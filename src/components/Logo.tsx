import Image from "next/image";
import { LOGO_VARIANTS, crIAte } from "~/constants";

type LogoVariant = keyof typeof LOGO_VARIANTS;

export const Logo = (props: { size?: number; variant?: LogoVariant }) => {
  const imgSize = props.size ?? 64;
  const variant = props.variant ?? LOGO_VARIANTS.light;
  return (
    <Image
      src={variant}
      className="rounded-md"
      alt={`${crIAte.name} Logo`}
      height={imgSize}
      width={imgSize}
    />
  );
};
