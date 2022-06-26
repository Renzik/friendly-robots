import * as trpc from "@trpc/server";
import superjson from "superjson";
import { robotsRouter } from "./robots";

export const appRouter = trpc.router().transformer(superjson).merge("robots.", robotsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
