import { Cart, Footer, MetaData, Navbar, SubHeader } from "../../components";

const cart = () => {
  return (
    <>
      <MetaData title="Ikomers | Cart" content="This is my cart in ikomers" />
      <Navbar />
      <SubHeader title="cart" />
      <Cart />
      <Footer />
    </>
  );
};

export default cart;
