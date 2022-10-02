import { Footer, MetaData, MyOrder, Navbar, SubHeader } from "../../components";

const myOrder = () => {
  return (
    <>
      <MetaData title="Ikomers | My Order" content="This is all your order" />
      <Navbar />
      <SubHeader title="Orders" />
      <MyOrder />
      <Footer />
    </>
  );
};

export default myOrder;
