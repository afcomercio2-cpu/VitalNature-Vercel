import { router, protectedProcedure } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const paymentRouter = router({
  createCheckoutSession: protectedProcedure
    .input(
      z.object({
        items: z.array(
          z.object({
            productId: z.number(),
            name: z.string(),
            price: z.number(),
            quantity: z.number(),
            image: z.string(),
          }),
        ),
      }),
    )
    .mutation(async () => {
      throw new TRPCError({
        code: "PRECONDITION_FAILED",
        message: "Direct checkout is disabled while VitalNature operates as an affiliate storefront.",
      });
    }),
});
