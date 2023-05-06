import { crIAte } from "~/constants";
import { Logo } from "./Logo";
import Link from "next/link";
import { LoadingSpinner } from "./LoadingSpinner";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { getButtonClasses } from "~/helpers/buttons";

const NAV_ITEMS = [
  {
    name: "Crear",
    href: "/create",
    items: [
      {
        name: "Kit de Marca",
        description: "Crea un kit de marca para tu negocio.",
        href: "/create/brand-kit",
        icon: null,
      },
      {
        name: "Anuncio",
        description: "Crea un anuncio que se ajuste a tus necesidades.",
        href: "/create/ad",
        icon: null,
      },
      {
        name: "Post",
        description: "Crea un post para redes sociales.",
        href: "/create/post",
        icon: null,
      },
    ],
  },
  {
    name: "Productos",
    href: "/products",
  },
  {
    // Solo lo podrán ver usuarios autenticados.
    name: "Dashboard",
    href: "/dashboard",
    requiresAuth: true,
  },
];

const UserNavSection = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <LoadingSpinner size={24} />;
  if (isSignedIn) return <UserButton />;

  const buttonClasses = getButtonClasses();
  return (
    <SignInButton>
      <div className={buttonClasses}>Iniciar sesión</div>
    </SignInButton>
  );
};

export const Header = () => {
  return (
    <header className="relative  border-gray-200  bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={32} />
          <span className="self-center whitespace-nowrap text-2xl font-semibold ">
            {crIAte.name}
          </span>
        </Link>
        <UserNavSection />
      </div>
    </header>
  );
};

// const FlowbiteHeader = () => {
//   return (
//     <nav className="relative  border-gray-200  bg-gray-900">
//       <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
//         <a href="https://flowbite.com" className="flex items-center">
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="mr-3 h-8"
//             alt="Flowbite Logo"
//           />
//           <span className="self-center whitespace-nowrap text-2xl font-semibold ">
//             Flowbite
//           </span>
//         </a>
//         <button
//           data-collapse-toggle="mega-menu-full"
//           type="button"
//           className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
//           aria-controls="mega-menu-full"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="h-6 w-6"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//         </button>
//         <div
//           id="mega-menu-full"
//           className="hidden w-full items-center justify-between font-medium md:order-1 md:flex md:w-auto"
//         >
//           <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
//             <li>
//               <a
//                 href="#"
//                 className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <button
//                 id="mega-menu-full-dropdown-button"
//                 data-collapse-toggle="mega-menu-full-dropdown"
//                 className="flex w-full items-center justify-between rounded py-2 pl-3  pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-600 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
//               >
//                 Company{" "}
//                 <svg
//                   className="ml-1 h-5 w-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
//               >
//                 Marketplace
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
//               >
//                 Resources
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div
//         id="mega-menu-full-dropdown"
//         className="top-100 absolute left-0 z-50 mt-1 w-full border-y border-gray-200 bg-gray-50 py-5 shadow-sm dark:border-gray-600 dark:bg-gray-800"
//       >
//         <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
//           <ul>
//             <li>
//               <a
//                 href="#"
//                 className="block rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 <div className="font-semibold">Online Stores</div>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                   Connect with third-party tools that you're already using.
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 <div className="font-semibold">Segmentation</div>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                   Connect with third-party tools that you're already using.
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 <div className="font-semibold">Marketing CRM</div>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                   Connect with third-party tools that you're already using.
//                 </span>
//               </a>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <a
//                 href="#"
//                 className="block rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 <div className="font-semibold">Online Stores</div>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                   Connect with third-party tools that you're already using.
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 <div className="font-semibold">Segmentation</div>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                   Connect with third-party tools that you're already using.
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 <div className="font-semibold">Marketing CRM</div>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                   Connect with third-party tools that you're already using.
//                 </span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };
