import {
  Checkout,
  Footer,
  MetaData,
  Navbar,
  SubHeader,
} from "../../components";

const checkout = () => {
  return (
    <>
      <MetaData
        title="ikomers | Checkout"
        content="Let's checkout your goods"
      />
      <Navbar />
      <SubHeader title="Checkout" />
      <Checkout />
      <Footer />
    </>
  );
};

export default checkout;
