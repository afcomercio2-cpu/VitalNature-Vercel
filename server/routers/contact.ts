import { z } from 'zod';
import { publicProcedure, router } from '../_core/trpc';
import { createContact } from '../db';

export const contactRouter = router({
  submit: publicProcedure
    .input(z.object({
      name: z.string().trim().min(2).max(255),
      email: z.string().trim().toLowerCase().email().max(320),
      subject: z.string().trim().min(2).max(255),
      message: z.string().trim().min(10).max(5000),
    }))
    .mutation(async ({ input }) => {
      const success = await createContact(input);
      if (!success) {
        throw new Error('Contact message could not be sent');
      }
      return { success: true } as const;
    }),
});
