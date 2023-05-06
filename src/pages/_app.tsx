import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Schibsted_Grotesk } from "next/font/google";

// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#google-fonts
// https://nextjs.org/docs/app/api-reference/components/font#subsets
const schibstedGroteskFont = Schibsted_Grotesk({
  display: "swap",
  subsets: ["latin"],
  preload: true,
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={schibstedGroteskFont.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
