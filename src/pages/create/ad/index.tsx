import { type NextPage } from "next";
import { SectionLayout, SectionTitle } from "~/components/Section";
import { useForm, SubmitHandler } from "react-hook-form";

const CreateAd: NextPage = () => {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<AdFields>();
  const onSubmit: SubmitHandler<AdFields> = data => console.log(data);

  return (
    <>
      <SectionLayout>
        <SectionTitle title="Create an Advertising" />
        <div>
          Here you will create a new Advertising
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
            <form className="w-full flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="about">What is my ad about?</label>
                </div>
                <input className="text-black" {...register("about", {required: true})} />
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="type">What type of ad do I want to create?</label>
                </div>
                <input className="text-black" {...register("type", {required: true})} />
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="name">What is the name of the product/service?</label>
                </div>
                <input className="text-black" {...register("name", {required: true})} />
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="org">What is the name of my organization?</label>
                </div>
                <input className="text-black" {...register("org", {required: true})} />
              </div>
              {/* <div>
                <div className="mb-2 block">
                  <label htmlFor="keymsg">Could you say a single key message in one sentence?</label>
                </div>
                <input className="text-black" {...register("keymsg", {required: true})} />
              </div> */}
              <div>
                <div className="mb-2 block">
                  <label htmlFor="reasons">Why would people buy my product?</label>
                </div>
                <input className="text-black" {...register("reasons", {required: true})} />
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="deadline">When does the ad stop being valid?</label>
                </div>
                <input className="text-black" {...register("deadline", {required: true})} />
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="where">Where do I want to publish my ad?</label>
                </div>
                <input className="text-black" {...register("where", {required: true})} />
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="tone">What do I want people to feel?</label>
                </div>
                <input className="text-black" {...register("tone", {required: true})} />
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="who">Who would like to watch my ad?</label>
                </div>
                <input className="text-black" {...register("who", {required: true})} />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Generate Prompt
              </button>
            </form>
            <div className="w-full flex-col gap-4">

            </div>
        </div>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <input className="text-black" {...register("firstName", { required: true, maxLength: 20 })} />
          <input className="text-black" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          <input className="text-black" type="number" {...register("age", { min: 18, max: 99 })} />
          <input className="text-black" type="submit" />
        </form> */}
      </SectionLayout>
    </>
  );
};

export default CreateAd;
