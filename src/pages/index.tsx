import { type NextPage } from "next";
import { Logo } from "~/components/Logo";

const Home: NextPage = () => {
  return (
    <main className="container flex h-full flex-1 flex-col items-center gap-6">
      <Logo size={320} />
      <p className="text-center text-2xl max-w-md font-bold">
        Your assistant to create posts or ads for your product or service.
      </p>
    </main>
  );
};

export default Home;
