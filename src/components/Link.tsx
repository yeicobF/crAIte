import Link from "next/link";
import { type ReactNode } from "react";

export const TextLink = ({
  href,
  children,
  ...rest
}: {
  href: string;
  children: ReactNode;
  [key: string]: any;
}) => {
  return (
    <Link href={href} {...rest} className="font-semibold underline hover:text-primary transition-colors">
      {children}
    </Link>
  );
};
