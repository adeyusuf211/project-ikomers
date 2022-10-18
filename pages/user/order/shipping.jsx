import { MetaData, Navbar, SubHeader, Shipping } from "../../../components";

const shipping = () => {
  return (
    <>
      <MetaData title="Order Shipping" content="This is order shipping pages" />
      <Navbar />
      <SubHeader title="Shipping" />
      <Shipping />
    </>
  );
};

export default shipping;
