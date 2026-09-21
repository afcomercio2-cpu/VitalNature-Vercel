import { createHmac, timingSafeEqual } from "node:crypto";
import type { Request, Response } from "express";
import { STAFF_COOKIE_NAME, STAFF_SESSION_MS } from "@shared/const";
import { ENV } from "./env";
import { getSessionCookieOptions } from "./cookies";

type StaffTokenPayload = {
  role: "staff";
  exp: number;
};

function getSigningSecret(): string {
  // Prefer JWT_SECRET; fall back only in local dev so misconfig is obvious in production.
  const secret = ENV.cookieSecret || (ENV.isProduction ? "" : "dev-only-staff-secret");
  if (!secret) {
    throw new Error("JWT_SECRET is not configured — cannot issue staff sessions.");
  }
  return secret;
}

function signPayload(payload: StaffTokenPayload): string {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = createHmac("sha256", getSigningSecret()).update(body).digest("base64url");
  return `${body}.${sig}`;
}

function verifyToken(token: string): StaffTokenPayload | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [body, sig] = parts;
  if (!body || !sig) return null;

  const expected = createHmac("sha256", getSigningSecret()).update(body).digest("base64url");
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  } catch {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as StaffTokenPayload;
    if (payload.role !== "staff" || typeof payload.exp !== "number") return null;
    if (Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

/** Constant-time password comparison to reduce timing attacks. */
export function verifyStaffPassword(input: string): boolean {
  const expected = ENV.staffPassword;
  if (!expected || expected.length === 0) {
    // Misconfiguration: never accept empty password
    return false;
  }
  try {
    const a = Buffer.from(input);
    const b = Buffer.from(expected);
    if (a.length !== b.length) {
      // Still do a dummy compare to keep timing similar
      timingSafeEqual(Buffer.alloc(b.length), b);
      return false;
    }
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function createStaffSessionToken(): string {
  const payload: StaffTokenPayload = {
    role: "staff",
    exp: Date.now() + STAFF_SESSION_MS,
  };
  return signPayload(payload);
}

export function readStaffSessionFromRequest(req: Request): boolean {
  const raw = req.cookies?.[STAFF_COOKIE_NAME] ?? parseCookieHeader(req.headers.cookie)[STAFF_COOKIE_NAME];
  if (!raw || typeof raw !== "string") return false;
  return verifyToken(raw) !== null;
}

export function setStaffSessionCookie(req: Request, res: Response, token: string) {
  const options = getSessionCookieOptions(req);
  res.cookie(STAFF_COOKIE_NAME, token, {
    ...options,
    maxAge: STAFF_SESSION_MS,
    httpOnly: true,
  });
}

export function clearStaffSessionCookie(req: Request, res: Response) {
  const options = getSessionCookieOptions(req);
  res.clearCookie(STAFF_COOKIE_NAME, { ...options, maxAge: -1 });
}

function parseCookieHeader(header: string | undefined): Record<string, string> {
  if (!header) return {};
  const out: Record<string, string> = {};
  for (const part of header.split(";")) {
    const idx = part.indexOf("=");
    if (idx === -1) continue;
    const key = part.slice(0, idx).trim();
    const val = part.slice(idx + 1).trim();
    if (key) out[key] = decodeURIComponent(val);
  }
  return out;
}
