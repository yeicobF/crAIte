import { type NextPage } from "next";
import { SectionLayout, SectionTitle } from "~/components/Section";

const CreatePost: NextPage = () => {
  return (
    <>
      <SectionLayout>
        <SectionTitle title="Create a Post" />
        <div>
          Here you will create a new Post
        </div>
      </SectionLayout>
    </>
  );
};

export default CreatePost;