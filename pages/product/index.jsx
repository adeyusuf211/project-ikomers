import { Footer, Header, MetaData, Navbar, Products } from "../../components";

const product = () => {
  return (
    <>
      <MetaData
        title="Ikomers | Product"
        content="Let's sell or buying in ikomers"
      />
      <Navbar />
      <Header />
      <Products />
      <Footer />
    </>
  );
};

export default product;
