import { type NextPage } from "next";
import { SectionLayout, SectionTitle } from "~/components/Section";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const CreateAd: NextPage = () => {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  console.log(watch("firstName")) // watch input value by passing the name of it
  return (
    <>
      <SectionLayout>
        <SectionTitle title="Create an Advertising" />
        <div>
          Here you will create a new Advertising
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName", { required: true, maxLength: 20 })} />
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          <input type="number" {...register("age", { min: 18, max: 99 })} />
          <input type="submit" />
        </form>
      </SectionLayout>
    </>
  );
};

export default CreateAd;
