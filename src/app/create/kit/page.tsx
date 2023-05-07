import { type NextPage } from "next";
import { SectionLayout, SectionTitle } from "~/components/Section";

const CreateKit: NextPage = () => {
  return (
    <>
      <SectionLayout>
        <SectionTitle title="Create a Branding Kit" />
        <div>
          Here you will create a new Branding Kit
        </div>
      </SectionLayout>
    </>
  );
};

export default CreateKit;