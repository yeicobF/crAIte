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
        <SectionTitle title="Agradecimientos" />
        <div>
          Damos las gracias a{" "}
          <Link
            href={TULUM_CRYPTO_FEST.url}
            target="_blank"
            className="font-semibold underline"
          >
            Tulum Crypto Fest 2023
          </Link>{" "}
          por organizar un evento tan interesante y por apoyar a la comunidad de
          desarrolladores.
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
          Gracias a los sponsors por su colaboración y apoyo a la comunidad.
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
