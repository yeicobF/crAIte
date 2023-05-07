import { type NextPage } from "next";
import { Logo } from "~/components/Logo";

const Home: NextPage = () => {
  return (
    <main className="container flex h-full flex-1 flex-col items-center justify-center gap-12">
      <Logo size={320} />
      <p className="text-center text-2xl font-bold">
        Tu asistente para la creación posts y anuncios sobre tu producto.
      </p>
    </main>
  );
};

export default Home;
