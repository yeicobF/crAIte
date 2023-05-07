import { type NextPage } from "next";
import { SectionLayout, SectionTitle } from "~/components/Section";
import { useForm, SubmitHandler } from "react-hook-form";
import { AdFields } from "~/types";
import { useState } from "react";
const CreateAd: NextPage = () => {
  const promptGenForm = useForm<AdFields>();
  const promptSendForm = useForm<{ prompt: string; }>();
  const [str, setStr] = useState<string>("")
  const onGeneratePrompt: SubmitHandler<AdFields> = (data) => {
    let newPrompt: string = "I want you to generate one " + data.tone + " advertising of " + data.type + " type about " +
      data.about + " to be published on " + data.where + ", which its name is \""+ data.name + "\" and belongs to our " + 
      "company named \"" + data.org + "\". " + data.who + " people would love my product because it has " + data.reasons + 
      ". This ad will be valid until " + data.deadline + " so let's tell people to take advantage of it before the " +
      "deadline is reached.";
    setStr(newPrompt)
  };
  const onSendPrompt: SubmitHandler<{ prompt: string; }> = (data) => {
    console.log(data.prompt)
  }
  return (
    <>
      <SectionLayout>
        <SectionTitle title="Create an Advertising" />
        <div>
          Here you will create a new Advertising
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
            <form className="w-full flex-col gap-4" onSubmit={promptGenForm.handleSubmit(onGeneratePrompt)}>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="about">What is my ad about?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("about", {required: true})} 
                  placeholder="My new product... 75% off on new game purchase... "/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="type">What type of ad do I want to create?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("type", {required: true})}
                  placeholder="Social Media, Paid Search, Print, Broadcast, Out of Home, Mobile, Direct Mail"/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="name">What is the name of the product/service?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("name", {required: true})}
                  placeholder="Creator 2.0"/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="org">What is the name of my organization?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("org", {required: true})}
                  placeholder="Microsoft"/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="reasons">Why would people buy my product?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("reasons", {required: true})}
                  placeholder="Quality, Power, Status, Low Price"/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="deadline">When does the ad stop being valid?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("deadline", {required: true})}
                  placeholder="June 15th, 2023"/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="where">Where do I want to publish my ad?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("where", {required: true})}
                  placeholder="Instagram, Facebook, Twitter, YouTube, T.V."/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="tone">How should my ad be to make people feel things?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("tone", {required: true})}
                  placeholder="Happy, Sad, Funny, Angry, Surprising, Beautiful, Inspiring"/>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="who">Who would like to watch my ad?</label>
                </div>
                <input className="text-black w-full" {...promptGenForm.register("who", {required: true})}
                  placeholder="Adults, Teen Women, Trans, Teachers, Scientists"/>
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

export default CreateAd;
