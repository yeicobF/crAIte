import { type NextPage } from "next";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SectionLayout, SectionTitle } from "~/components/Section";
import { Brand } from "~/types";

const CreateKit: NextPage = () => {
  const promptGenForm = useForm<Brand>();
  const promptSendForm = useForm<{ prompt: string; }>();
  const [str, setStr] = useState<string>("")
  const onGeneratePrompt: SubmitHandler<Brand> = (data) => {
    let newPrompt: string = "I want you to generate a brand kit for my brand which is named \"" + data.brandName + "\"" +
      ". The following sentence describes my brand: \"" + data.description + "\" and \"" + data.mood + "\" are the " + 
      "words that could represent the mood. I want you to consider these keywords for my brand \"" + data.keywords + 
      "\" and these key values that I want to transmit \""+ data.keyValues +"\". What I do with my brand is "+ 
      data.purpose + " and I want " + data.targetAudience + " people to be my clients, " + 
      " and they would love my product because it has " + data.uniqueSellingPoints;
    setStr(newPrompt)
  };
  const onSendPrompt: SubmitHandler<{ prompt: string; }> = (data) => {
    console.log(data.prompt)
  }
  return (
    <>
      <SectionLayout>
        <SectionTitle title="Create a Branding Kit" />
        <div>
          Here you will create a new Branding Kit
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
            <form className="w-full flex-col gap-4" onSubmit={promptGenForm.handleSubmit(onGeneratePrompt)}>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="brandName">My brand is named...</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("brandName", {required: true})} 
                  placeholder="Microsoft, Meta, Twitter"/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="purpose">What is the purpose of your brand?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("purpose", {required: true})}
                  placeholder="Selling self-care products, Buying gold pieces, Selling music production services"/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="keywords">What are the keywords of my brand?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("keywords", {required: true})}
                  placeholder="Peace, Sustainability, Strength"/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="keyValues">What are the key values of my brand?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("keyValues", {required: true})}
                  placeholder="Loyalty, Unity, Honesty"/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="targetAudience">Who would be engaged by my project?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("targetAudience", {required: true})}
                  placeholder="Adults, Teen Women, Teachers, Scientists"/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="description">My project in a short sentence...</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("description", {required: true})}
                  placeholder="The future is in our hands..."/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="uniqueSellingPoints">Why would people be my clients?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("uniqueSellingPoints", {required: true})}
                  placeholder="Quality, Power, Status, Low Price"/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="mood">How would I describe my brand's mood?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("mood", {required: true})}
                  placeholder="Feminine, inspirational, fresh, vibrant"/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="inappropiateContent">Customized question?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("inappropiateContent", {required: true})}
                  placeholder="Custom answer"/>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Generate Prompt
              </button>
            </form>
            <div className="w-full grid-rows-2 grid-flow-col gap-4">
              <div className="h-2/6">
                <div className="h-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Prompt Preview
                    </h5>
                    <p className="h-5/6 mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-y-scroll ...">
                      {str}
                    </p>
                </div>
              </div>
              <form className="h-4/6" onSubmit={promptSendForm.handleSubmit(onSendPrompt)}>
                <div className="h-full w-full">
                  <div className="h-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Customize the prompt
                      </h5>
                      <textarea className="h-4/5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-y-scroll ..."
                        placeholder="Here you will be able to customize your prompt..." value={str} {...promptSendForm.register("prompt", {required: true})}/>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                        Send Prompt
                      </button>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default CreateKit;