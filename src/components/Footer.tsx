import Link from "next/link";
import { crAIte } from "~/constants";
import { Logo } from "./Logo";

const FOOTER_LINKS = [
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Tulum Crypto Fest 2023",
    href: "/thanks",
  },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-600">
      <div className="mx-auto w-full max-w-screen-lg gap-4 p-4 md:py-6">
        <div className="flex flex-wrap justify-items-center gap-8 sm:items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              {crAIte.name}
            </span>
          </Link>
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 gap-4">
            {FOOTER_LINKS.map(({ name, href }) => (
              <li key={name}>
                <Link href={href} className=" hover:underline">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          {`${new Date().getFullYear()} `}
          <Link href="/" className="font-bold hover:underline">
            {crAIte.name}
          </Link>
        </span>
      </div>
    </footer>
  );
};
