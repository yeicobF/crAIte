import { type NextPage } from "next";
import { api } from "~/utils/api";
import { crIAte } from "~/constants";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
        <main className="container flex flex-col items-center justify-center gap-12 px-4 py-16 h-full flex-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-accent">{crIAte.name}</span>
          </h1>
          <p className="text-2xl font-bold">
            Tu asistente para la creación posts y anuncios sobre tu producto.
          </p>
        </main>
    </>
  );
};

export default Home;
