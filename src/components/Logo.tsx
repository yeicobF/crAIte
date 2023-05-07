import Image from "next/image";
import { LOGO_VARIANTS, crAIte } from "~/constants";

type LogoVariant = keyof typeof LOGO_VARIANTS;

export const Logo = (props: { size?: number; variant?: LogoVariant }) => {
  const imgSize = props.size ?? 32;
  const variant = props.variant ?? LOGO_VARIANTS.dark;
  return (
    <Image
      src={variant}
      className="rounded-md"
      alt={`${crAIte.name} Logo`}
      height={imgSize}
      width={imgSize}
    />
  );
};
