import { Navbar, MetaData, DetailProduct, Footer } from "../../components";

const detail = () => {
  return (
    <>
      <MetaData
        title="ikomers | Detail Products"
        content="Let's look a detail product"
      />
      <Navbar />
      <DetailProduct />
      <Footer />
    </>
  );
};

export default detail;
