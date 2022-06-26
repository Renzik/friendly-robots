import React, { Fragment } from "react";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "@/backend/router/";
import { AppProps } from "next/app";
import { NextPage } from "next";
import { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import "@/styles/globals.css";

export type NextPageWithLayout = NextPage & {
  layout: React.FC<{ children: React.ReactNode }>;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = Component.layout ?? Fragment;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}) as AppType;

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return "";
  }
  // reference for vercel.com
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
