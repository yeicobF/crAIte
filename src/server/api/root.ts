import { createTRPCRouter } from "~/server/api/trpc";
import { chatGPTRouter } from "~/server/api/routers/chatGPT";
import { profileRouter } from "./routers/profile";
import { brandsRouter } from "./routers/brands";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  chatGPT: chatGPTRouter,
  profile: profileRouter,
  brands: brandsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
