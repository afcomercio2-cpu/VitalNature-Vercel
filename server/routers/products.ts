import { publicProcedure, router, protectedProcedure } from "../_core/trpc";
import { getProducts, getProductById, getCategories } from "../db";
import { z } from "zod";

export const productsRouter = router({
  list: publicProcedure
    .input(z.object({ categoryId: z.number().optional() }).optional())
    .query(async ({ input }) => {
      return await getProducts(input?.categoryId);
    }),

  getById: publicProcedure
    .input(z.number())
    .query(async ({ input }) => {
      return await getProductById(input);
    }),

  categories: publicProcedure.query(async () => {
    return await getCategories();
  }),
});
