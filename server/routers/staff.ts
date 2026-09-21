import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { publicProcedure, router } from "../_core/trpc";
import {
  clearStaffSessionCookie,
  createStaffSessionToken,
  setStaffSessionCookie,
  verifyStaffPassword,
} from "../_core/staffSession";
import { ENV } from "../_core/env";

/**
 * Team staff authentication for /admin.
 * Password is validated ONLY on the server (STAFF_PASSWORD env var).
 * Session is an httpOnly cookie — never readable from JavaScript in the browser.
 */
export const staffRouter = router({
  /** Check if the current request has a valid staff session cookie. */
  me: publicProcedure.query(({ ctx }) => {
    return {
      isStaff: Boolean(ctx.isStaff),
    } as const;
  }),

  /**
   * Login with the shared team password.
   * On success, sets an httpOnly signed cookie (vn_staff_session).
   */
  login: publicProcedure
    .input(
      z.object({
        password: z.string().min(1, "Password is required"),
      }),
    )
    .mutation(({ ctx, input }) => {
      if (!ENV.staffPassword) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "STAFF_PASSWORD is not configured on the server.",
        });
      }

      const ok = verifyStaffPassword(input.password);
      if (!ok) {
        // Generic message — do not reveal whether the env is set or password is wrong
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid credentials",
        });
      }

      const token = createStaffSessionToken();
      setStaffSessionCookie(ctx.req, ctx.res, token);

      return { success: true as const };
    }),

  /** Clear the staff session cookie. */
  logout: publicProcedure.mutation(({ ctx }) => {
    clearStaffSessionCookie(ctx.req, ctx.res);
    return { success: true as const };
  }),
});
