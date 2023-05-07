import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const chatGPTRouter = createTRPCRouter({
  generatePost: publicProcedure
    .input(z.object({ prompt: z.string(), brandId: z.string() }))
    .query(({ input }) => {
      return {};
    }),

    // Send brand name, mood, and prompt
  generateBrandKit: publicProcedure
    .input(z.object({ prompt: z.string(), userId: z.string() }))
    .query(({ input }) => {
      return {};
    }),

  generateAd: publicProcedure
    .input(z.object({ prompt: z.string(), brandId: z.string() }))
    .query(({ input }) => {
      return {};
    }),
});
