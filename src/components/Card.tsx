import { type ReactNode } from "react";
import Link from "next/link";

const CardLink = (props: { href: string; children: ReactNode }) => {
  return (
    <Link
      href={props.href}
      target="_blank"
      className="rounded-2xl bg-white p-4"
    >
      {props.children}
    </Link>
  );
};

export { CardLink };
