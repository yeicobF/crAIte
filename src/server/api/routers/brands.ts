import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const brandsRouter = createTRPCRouter({
  getById: privateProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const ownerId = ctx.userId;

      const brand = await ctx.prisma.brand.findUnique({
        where: {
          id: input.id,
        },
        include: {
          Ad: true,
          BrandInappropiateContent: true,
          BrandKit: {
            include: {
              BrandFont: true,
              colors: true,
            },
          },
          competitors: true,
          Post: true,
        },
      });

      if (!brand || brand.ownerId !== ownerId) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Brand not found" });
      }

      return brand;
    }),

  // Un procedure es un método para generar una función que se llama desde el
  // cliente. Al ser público, indicamos que cualquier usuario puede acceder a
  // los posts.
  getAll: privateProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.brand.findMany({
      take: 100,
      orderBy: [{ createdAt: "desc" }],
    });
  }),

  getUserBrands: privateProcedure.query(async ({ ctx }) => {
    const ownerId = ctx.userId;

    return await ctx.prisma.brand.findMany({
      where: {
        ownerId,
      },
      take: 100,
      orderBy: [{ createdAt: "desc" }],
    });
  }),
});
