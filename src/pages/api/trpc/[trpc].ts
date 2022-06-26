/**
 * This file contains tRPC's HTTP response handler
 */
import { appRouter } from "@/backend/router";
import * as trpcNext from "@trpc/server/adapters/next";

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
