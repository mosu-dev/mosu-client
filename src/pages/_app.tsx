import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

import { queryClient } from "@/apps/lib/query";
import "@/apps/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}
