import { type PropsWithChildren } from "react";

const SectionLayout = (props: PropsWithChildren) => {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      {props.children}
    </section>
  );
};

const SectionTitle = (props: { title: string }) => {
  return <h2 className="text-3xl sm:text-5xl font-bold">{props.title}</h2>;
};

export { SectionLayout, SectionTitle };
