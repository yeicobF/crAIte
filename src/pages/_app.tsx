import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Schibsted_Grotesk } from "next/font/google";
import { crAIte } from "~/constants";
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
  fallback: ["sans-serif"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>{crAIte.name}</title>
        <meta name="description" content={crAIte.description.en} />
        <link rel="icon" href="/favicon/dark.svg" type="image/svg+xml" />
      </Head>

      <div
        className={`${schibstedGroteskFont.className} flex min-h-screen  w-full flex-col items-center justify-between bg-gradient-to-b from-[#15162c] to-[#040209]`}
      >
        <Header />
        <div className="container my-8 mb-16 flex w-full max-w-xl flex-1 flex-col items-center gap-12 px-4 md:max-w-3xl lg:px-0">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ClerkProvider>
  );
};
export default api.withTRPC(MyApp);
