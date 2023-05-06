import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Schibsted_Grotesk } from "next/font/google";
import { crIAte } from "~/constants";
import Head from "next/head";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#google-fonts
// https://nextjs.org/docs/app/api-reference/components/font#subsets
const schibstedGroteskFont = Schibsted_Grotesk({
  display: "swap",
  subsets: ["latin"],
  preload: true,
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <div className={schibstedGroteskFont.className}>
        <Head>
          <title>{crIAte.name}</title>
          <meta name="description" content={crIAte.description.es} />
          <link rel="icon" href="/favicon/dark.svg" type="image/svg+xml" />
        </Head>

        <Header />
        <div className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#15162c] to-[#040209]">
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
