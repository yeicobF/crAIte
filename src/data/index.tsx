type Sponsor = {
  name: string;
  url: string;
  logo: string;
};

const SPONSORS: Array<Sponsor> = [
  {
    name: "Digital Lab Agency",
    url: "https://esp.digitallabagency.com/",
    logo: "/sponsors/digital-lab-agency.png",
  },
];

const TULUM_CRYPTO_FEST = {
  name: "Tulum Crypto Fest",
  year: 2023,
  url: "https://www.tulumcryptofest.com/",
  logo: "/tulum-crypto-fest/2023.png",
};

export {
  SPONSORS,
  TULUM_CRYPTO_FEST,
}

export type {
  Sponsor,
}
