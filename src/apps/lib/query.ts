import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 3 min
            gcTime: 1000 * 60 * 5, // 5 min
        },
    },
});
