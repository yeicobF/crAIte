import { type PropsWithChildren } from "react";

const SectionLayout = (props: PropsWithChildren) => {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      {props.children}
    </section>
  );
};

const SectionTitle = ({
  title,
  ...rest
}: {
  title: string;
  [key: string]: any;
}) => {
  return (
    <h2 className="text-3xl font-bold sm:text-5xl" {...rest}>
      {title}
    </h2>
  );
};

export { SectionLayout, SectionTitle };
