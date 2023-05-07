import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { CardLink } from "~/components/Card";
import { SectionLayout, SectionTitle } from "~/components/Section";
import { SPONSORS, type Sponsor, TULUM_CRYPTO_FEST } from "~/data";

const About: NextPage = () => {
  return (
    <>
      <SectionLayout>
        <SectionTitle title="Thank You!" />
        <div>
          We want to express our gratitude to{" "}
          <Link
            href={TULUM_CRYPTO_FEST.url}
            target="_blank"
            className="font-semibold underline"
          >
            Tulum Crypto Fest 2023
          </Link>{" "}
          for hosting such an exciting event and for supporting the developer
          community.
        </div>
        <CardLink href={TULUM_CRYPTO_FEST.url}>
          <Image
            src={TULUM_CRYPTO_FEST.logo}
            alt={`Logotipo de ${TULUM_CRYPTO_FEST.name} ${TULUM_CRYPTO_FEST.year}`}
            height={240}
            width={240}
          />
        </CardLink>
      </SectionLayout>

      <SectionLayout>
        <SectionTitle title="Sponsors" />
        <p>
          We also extend a huge thank you to all of our sponsors for their
          collaboration and unwavering support of the community.
        </p>
        <div className="mx-auto grid grid-cols-2 items-center justify-center gap-4 sm:px-10 md:grid-cols-3">
          {SPONSORS.map(({ name, url, logo }: Sponsor) => (
            <CardLink href={url} key={name}>
              <Image
                src={logo}
                alt={`Logotipo de Sponsor ${name}`}
                height={80}
                width={224}
              />
            </CardLink>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default About;
