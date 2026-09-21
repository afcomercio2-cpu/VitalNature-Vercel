import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
import { sdk } from "./sdk";
import { readStaffSessionFromRequest } from "./staffSession";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
  /** True when a valid server-issued staff session cookie is present. */
  isStaff: boolean;
};

export async function createContext(
  opts: CreateExpressContextOptions,
): Promise<TrpcContext> {
  let user: User | null = null;

  try {
    user = await sdk.authenticateRequest(opts.req);
  } catch {
    // Authentication is optional for public procedures.
    user = null;
  }

  let isStaff = false;
  try {
    isStaff = readStaffSessionFromRequest(opts.req);
  } catch {
    isStaff = false;
  }

  // OAuth admin users also count as staff for the panel
  if (user?.role === "admin") {
    isStaff = true;
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
    isStaff,
  };
}
