import { type GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { type ReactNode } from "react";
import { toast } from "react-hot-toast";
import { TextLink } from "~/components/Link";
import { LoadingPage } from "~/components/LoadingSpinner";
import { SectionLayout, SectionTitle } from "~/components/Section";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { api, type RouterOutputs } from "~/utils/api";

type FullBrand = RouterOutputs["brands"]["getById"];
type BrandStatsType = {
  Post?: FullBrand["Post"];
  Ad?: FullBrand["Ad"];
};

const BrandStats = ({ Post, Ad }: BrandStatsType) => {
  const elements = [
    `📝 ${Post?.length ?? 0} Posts`,
    `📈 ${Ad?.length ?? 0} Ads`,
  ];
  return (
    <ul>
      {elements.map((element) => (
        <li key={element}>{element}</li>
      ))}
    </ul>
  );
};

const BrandKits = ({ brandKit }: { brandKit: FullBrand["BrandKit"] }) => {
  if (!brandKit) return <div>No brand kit yet.</div>;

  const { logoUrl, BrandFont, colors } = brandKit;
  const { accent, primary, secondary } = colors;

  return (
    <article className="grid grid-cols-1 gap-8 md:grid-cols-2 place-items-center md:place-items-start">
      <div className="text-start">
        <h2 className="mb-6 text-start text-xl font-bold">Fonts</h2>
        <ul className="text-lg font-medium">
          {BrandFont.map(({ name, id, url }) => {
            if (!name) return null;
            if (!url) return <li key={id}>{name}</li>;

            return (
              <li key={id}>
                <TextLink href={url} target="_blank">
                  {name}
                </TextLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-start text-xl font-bold">Colors</h2>
        <ul className="flex flex-wrap gap-8">
          {Object.entries({ accent, primary, secondary }).map(
            ([type, color]) => {
              return (
                <li
                  key={type}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <div
                    className={`h-24 w-24 rounded-md`}
                    style={{
                      backgroundColor: color,
                    }}
                  />
                  <span className="first-letter:uppercase">{type}</span>
                  <span className="font-mono lowercase text-slate-400">
                    {color}
                  </span>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </article>
  );
};

const BrandDetailsSection = ({
  title,
  children,
  ...rest
}: {
  title: string;
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`flex flex-col first-letter:uppercase ${
        rest?.className ?? ""
      }`}
    >
      <h4 className="mb-4 text-3xl font-semibold">{title}</h4>
      {children}
    </section>
  );
};

const BrandDetails = ({
  BrandKit,
  Post,
  Ad,
  description,
  name,
  mood,
  uniqueSellingPoints,
  targetAudience,
  purpose,
  keyValues,
}: FullBrand) => {
  return (
    <article className="flex w-full flex-col items-center gap-16">
      <figure className="flex flex-wrap items-center justify-center gap-4">
        {BrandKit?.logoUrl && (
          <Image
            src={BrandKit?.logoUrl}
            width={256}
            height={256}
            alt={`${name} Logo`}
            className="aspect-square"
          />
        )}
        <div>
          <SectionTitle title={name} className="text-2xl font-bold" />
          <p className="text-lg font-medium">{description}</p>
        </div>
      </figure>

      <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <BrandDetailsSection
          title="🎨 Brand Kit"
          className="mb-8 w-full gap-8 text-center md:col-span-2"
        >
          <BrandKits brandKit={BrandKit} />
        </BrandDetailsSection>

        <BrandDetailsSection title="🌳 Unique Selling Points">
          <p>{uniqueSellingPoints}</p>
        </BrandDetailsSection>
        <BrandDetailsSection title="🖼️ Purpose">
          <p className="first-letter:uppercase">{purpose}</p>
        </BrandDetailsSection>
        <BrandDetailsSection title="🔑 Key Values">
          <p className="first-letter:uppercase">{keyValues}</p>
        </BrandDetailsSection>
        <BrandDetailsSection title="🌃 Mood">
          <p className="first-letter:uppercase">{mood}</p>
        </BrandDetailsSection>
        <BrandDetailsSection title="🎯 Target Audience">
          <p>{targetAudience}</p>
        </BrandDetailsSection>
        <BrandDetailsSection title="🌌 Brand Details">
          <BrandStats Post={Post} Ad={Ad} />
        </BrandDetailsSection>
        <BrandDetailsSection title="📝 Posts"></BrandDetailsSection>
        <BrandDetailsSection title="📈 Ads"></BrandDetailsSection>
      </section>
    </article>
  );
};

const BrandPage: NextPage<{ id: string }> = ({ id }) => {
  const { data: fullBrand, isLoading } = api.brands.getById.useQuery(
    {
      id,
    },
    {
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  if (isLoading)
    return (
      <>
        <SectionTitle title="My Brand" />
        <LoadingPage />;
      </>
    );

  if (!fullBrand)
    return (
      <>
        <SectionTitle title="My Brand" />
        <div>The brand does not exist.</div>
      </>
    );

  return (
    <>
      <Head>
        <title>{fullBrand.name} | Brand</title>
      </Head>

      <BrandDetails {...fullBrand} />
    </>
  );
};

// La forma más sencilla de tipar los parámetros es tipando la función (variable
//  en este caso) directamente.
//
// Al obtener los datos 'ahead of time', no habrá un loading state, ya que al
// cargar la página en el cliente, los datos ya estarán disponibles.
export const getStaticProps: GetStaticProps = async (context) => {
  const ssgHelpers = generateSSGHelper();

  const id = context.params?.id;

  if (typeof id !== "string") throw new Error("No id");

  // Prefetch nos permite obtener los datos "ahead of time" para después
  // 'hidrate them' mediante `server side props`.
  await ssgHelpers.brands.getById.prefetch({ id });

  return {
    props: {
      // Aquí tendremos que `dehydrate` los datos que queremos enviar al
      // cliente. Toma todos los datos que hemos obtenido, los pone en una forma
      // que puede ser parseada por `getServerSideProps` y `getStaticProps` de
      // Next.js (serializar), y en `_app` hidratamos los datos con
      // `react-query` al estar encapsulado en `TRPC`.
      trpcState: ssgHelpers.dehydrate(),
      id,
    },
  };
};

// Si utilizamos `getStaticProps`, tenemos que devolver los `paths`, aunque
// podemos indicar que no los queremos generar 'ahead of time' para generarlos
// 'on load'.
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default BrandPage;
