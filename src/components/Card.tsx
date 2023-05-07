import { type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

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

type CardProps = {
  href: string;
  title: string;
  description: string;
  img?: string;
};

export const VerticalCard = (props: CardProps) => {
  return (
    <Link
      href={props.href}
      className="max-w-sm rounded-lg border border-gray-700  bg-gray-800 shadow hover:bg-gray-600"
    >
      {props.img && (
        <Image
          className="aspect-square h-64 w-full rounded-t-lg object-cover md:h-auto"
          src={props.img}
          alt={props.title}
          width={380}
          height={256}
        />
      )}
      <div className="p-5">
        <h5 className="tracking-tighttext-white mb-2 text-2xl font-bold">
          {props.title}
        </h5>
        <p className="mb-3 font-normal text-gray-400">{props.description}</p>
      </div>
    </Link>
  );
};

export const HorizontalCard = (props: CardProps) => {
  return (
    <Link
      href={props.href}
      className="flex flex-col items-center rounded-lg border border-gray-700  bg-gray-800 shadow hover:bg-gray-700 md:max-w-xl md:flex-row"
    >
      {props.img && (
        <Image
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={props.img}
          alt={props.title}
          width={152}
          height={256}
        />
      )}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      </div>
    </Link>
  );
};

export { CardLink };
