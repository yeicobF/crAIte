import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { VerticalCard } from "~/components/Card";
import { SectionLayout, SectionTitle } from "~/components/Section";
import { type ContentProduct } from "~/types";

const PRODUCTS: Array<ContentProduct> = [
  {
    name: "Posts",
    description: "Create stunning social media posts with ease.",
    id: "post",
    img: "/content-products/posts.png",
  },
  {
    name: "Ads",
    description:
      "Boost advertising efforts with engaging ads for target audiences.",
    id: "ad",
    img: "/content-products/ads.png",
  },
  {
    name: "Brand Kit",
    description:
      "Establish consistent brand identity with logos, color palettes, and fonts.",
    id: "kit",
    img: "/content-products/brand-kit.png",
  },
];

const CreatePage: NextPage = () => {
  return (
    <SectionLayout>
      <SectionTitle title="💡 Create" />
      <p>Optimize your content creation with our suite of AI-powered tools!</p>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {PRODUCTS.map(({ id, name, ...props }) => (
          <VerticalCard
            {...props}
            href={`/create/${id}`}
            title={name}
            key={id}
          />
        ))}
      </section>
    </SectionLayout>
  );
};

export default CreatePage;
