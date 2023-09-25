import { Logo } from "./Logo";
import Link from "next/link";
import { NavUserSection } from "./Nav/UserSection";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

const NAV_ITEMS = [
  {
    // Solo lo podrán ver usuarios autenticados.
    name: "My content",
    href: "/content",
    requiresAuth: false,
  },
  {
    name: "My brands",
    href: "/brands",
    requiresAuth: false,
  },
  {
    name: "Create",
    href: "/create",
    items: [
      {
        name: "Brand Kit",
        description: "Create a brand kit for your business.",
        href: "/create/kit",
        icon: null,
      },
      {
        name: "Ad",
        description: "Create an ad for your needs.",
        href: "/create/ad",
        icon: null,
      },
      {
        name: "Post",
        description: "Create a post for your social media.",
        href: "/create/post",
        icon: null,
      },
    ],
  },
  {
    name: "Templates",
    href: "/templates",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const Header = () => {
  const router = useRouter();
  const { isSignedIn, user } = useUser();

  console.log({ router, user });

  return (
    <header className="relative w-full  border-gray-200  bg-gray-900">
      <div className="mx-auto flex w-full max-w-screen-lg flex-wrap items-center justify-between gap-4 px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={48} />
        </Link>
        <nav className="hidden flex-1 items-center justify-center sm:flex">
          <ul className="flex items-center gap-4 md:gap-8">
            {NAV_ITEMS.map(({ name, requiresAuth, href }) => {
              if (requiresAuth && !isSignedIn) return null;
              const isActive = router.asPath.includes(href);

              return (
                <li
                  key={name}
                  className={`
                  font-medium
                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }
                  `}
                >
                  <Link href={href}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <NavUserSection />
      </div>
    </header>
  );
};
