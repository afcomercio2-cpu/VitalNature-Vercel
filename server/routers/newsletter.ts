import { z } from 'zod';
import { publicProcedure, router } from '../_core/trpc';
import { subscribeNewsletter } from '../db';

export const newsletterRouter = router({
  subscribe: publicProcedure
    .input(z.object({ email: z.string().trim().toLowerCase().email().max(320) }))
    .mutation(async ({ input }) => {
      const success = await subscribeNewsletter(input.email);
      if (!success) {
        throw new Error('Newsletter subscription could not be completed');
      }
      return { success: true } as const;
    }),
});
