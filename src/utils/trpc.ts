import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "@/backend/router";

// AppRouter is the backend as a type, so it can generate types from the backend.
export const trpc = createReactQueryHooks<AppRouter>();
// => { useQuery: ..., useMutation: ...}
