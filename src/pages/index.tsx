import { type NextPage } from "next";
import { Logo } from "~/components/Logo";

const Home: NextPage = (
) => {
  return (
    <main className="container flex h-full flex-1 flex-col items-center gap-6">
      <Logo size={320} />
      <p className="max-w-md text-center text-2xl font-bold">
        Your assistant to create posts or ads for your product or service.
      </p>
    </main>
  );
};
// 
// export const getServerSideProps: GetServerSideProps = async (_ctx) => {
//   const helpers = generateSSGHelper();
// 
//   let user = null;
// 
//   try {
//     user = await helpers.profile.getLoggedUser.fetch();
//     console.log("server user", user);
//   } catch (error) {
//     console.error(error);
//   }
// 
//   return {
//     props: {
//       user,
//     },
//   };
// };

export default Home;
