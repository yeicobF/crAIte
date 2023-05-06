import { type PropsWithChildren } from "react";

const SectionLayout = (props: PropsWithChildren) => {
  return (
    <section className="container flex max-w-4xl flex-col items-center justify-center gap-12 px-4 py-16">
      {props.children}
    </section>
  );
};

const SectionTitle = (props: { title: string }) => {
  return <h2 className="text-5xl font-bold">{props.title}</h2>;
};

export { SectionLayout, SectionTitle };
