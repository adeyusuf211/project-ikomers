import { Blog, Footer, MetaData, Navbar } from "../../components";

const blog = () => {
  return (
    <>
      <MetaData
        title="ikomers | Blog"
        content="Let's visit many popular article in ikomers"
      />
      <Navbar />
      <Blog />
      <Footer />
    </>
  );
};

export default blog;
