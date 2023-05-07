import { type NextPage } from "next";
import { crAIte } from "~/constants";

const Home: NextPage = () => {
  return (
    <>
        <main className="container flex flex-col items-center justify-center gap-12 px-4 py-16 h-full flex-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-accent">{crAIte.name}</span>
          </h1>
          <p className="text-2xl font-bold text-center">
            Tu asistente para la creación posts y anuncios sobre tu producto.
          </p>
        </main>
    </>
  );
};

export default Home;
