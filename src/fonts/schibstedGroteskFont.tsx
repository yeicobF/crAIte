import localFont from "next/font/local";

// type Font = {
//   path: string;
//   style: "normal" | "italic";
//   weight: string;
// };

// 100: Thin (delgada)
// 200: Extra Light (extra ligera)
// 300: Light (ligera)
// 400: Normal (normal)
// 500: Medium (mediana)
// 600: Semi Bold (semi negrita)
// 700: Bold (negrita)
// 800: Extra Bold (extra negrita)
// 900: Black (negra)

export const schibstedGroteskFont = localFont({
  src: [
    // Normal
    {
      path: "./SchibstedGrotesk/SchibstedGrotesk-Black.woff2",
      style: "normal",
      weight: "900",
    },
    {
      path: "./SchibstedGrotesk/SchibstedGrotesk-ExtraBold.woff2",
      style: "normal",
      weight: "800",
    },
    {
      path: "./SchibstedGrotesk/SchibstedGrotesk-Bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "./SchibstedGrotesk/SchibstedGrotesk-SemiBold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "./SchibstedGrotesk/SchibstedGrotesk-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "./SchibstedGrotesk/SchibstedGrotesk-Regular.woff2",
      style: "normal",
      weight: "400",
    },

    // Italics
    {
      path: "./SchibstedGrotesk/SchibstedGrotesk-BlackItalic.woff2",
      style: "italic",
      weight: "900",
    },
    {
      path: "./SchibstedGrotesk/SchibstedGrotesk-ExtraBoldItalic.woff2",
      style: "italic",
      weight: "800",
    },
    {
      path: "./SchibstedGrotesk/SchibstedGrotesk-BoldItalic.woff2",
      style: "italic",
      weight: "700",
    },
    {
      path: "./SchibstedGrotesk/SchibstedGrotesk-SemiBoldItalic.woff2",
      style: "italic",
      weight: "600",
    },
    {
      path: "./SchibstedGrotesk/SchibstedGrotesk-MediumItalic.woff2",
      style: "italic",
      weight: "500",
    },
    {
      path: "./SchibstedGrotesk/SchibstedGrotesk-Italic.woff2",
      style: "italic",
      weight: "400",
    },
  ],
});
