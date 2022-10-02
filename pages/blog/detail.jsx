import { DetailBlog, Footer, MetaData, Navbar } from "../../components";

const detailBlog = () => {
  return (
    <>
      <MetaData
        title="ikomers | Detail Blog"
        content="Let's visit many popular article in ikomers"
      />
      <Navbar />
      <DetailBlog />
      <Footer />
    </>
  );
};

export default detailBlog;
