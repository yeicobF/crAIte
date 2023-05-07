import { type GetServerSidePropsContext, type NextPage } from "next";
import { HorizontalCard } from "~/components/Card";
import { TextLink } from "~/components/Link";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import { SectionLayout, SectionTitle } from "~/components/Section";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { api } from "~/utils/api";

const BrandsContent = () => {
  const { data: brands, isLoading } = api.brands.getUserBrands.useQuery();

  if (isLoading) return <LoadingSpinner />;

  if (!brands) {
    return (
      <div>
        <p>You have not registered any brand yet 🤔</p>
        <div>
          <TextLink href="/create/brand">Register your brand</TextLink> and
          optimize your workflow!
        </div>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {brands.map(({ id, description, name }) => (
        <HorizontalCard
          key={id}
          href={`/brands/${id}`}
          title={name}
          description={description}
        />
      ))}
    </section>
  );
};

const BrandsPage: NextPage = () => {
  return (
    <SectionLayout>
      <SectionTitle title="🎨 Brands" />
      <div>
        <p>
          This is the brands page. Here you can see all your brands and manage
          them.
        </p>
        <span>
          You can{" "}
          <TextLink href="/create/brand">register another brand</TextLink> and
          increase your productivity!
        </span>
      </div>
      <BrandsContent />
    </SectionLayout>
  );
};

export async function getServerSideProps(
  _context: GetServerSidePropsContext<{ _: string }>
) {
  const ssgHelpers = generateSSGHelper();

  // Prefetch nos permite obtener los datos "ahead of time" para después
  // 'hidrate them' mediante `server side props`.
  await ssgHelpers.brands.getUserBrands.prefetch();

  return {
    props: {
      // Aquí tendremos que `dehydrate` los datos que queremos enviar al
      // cliente. Toma todos los datos que hemos obtenido, los pone en una forma
      // que puede ser parseada por `getServerSideProps` y `getStaticProps` de
      // Next.js (serializar), y en `_app` hidratamos los datos con
      // `react-query` al estar encapsulado en `TRPC`.
      trpcState: ssgHelpers.dehydrate(),
    },
  };
}

export default BrandsPage;
