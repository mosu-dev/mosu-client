import { QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import type { AppProps } from "next/app";

import "@/apps/lib/gsap";
import { queryClient } from "@/apps/lib/query";
import "@/apps/styles/globals.css";
import { GlobalLayout } from "@/apps/ui/GlobalLayout";

type AppPropsWithLayout = AppProps & {
    Component: NextPage & { layout?: (page: React.ReactNode) => React.ReactNode };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.layout ?? ((page: React.ReactNode) => page);

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalLayout>{Layout(<Component {...pageProps} />)}</GlobalLayout>
        </QueryClientProvider>
    );
}
