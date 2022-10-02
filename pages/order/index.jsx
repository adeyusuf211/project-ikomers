import { Footer, MetaData, Navbar, Order, SubHeader } from "../../components";

const order = () => {
  return (
    <>
      <MetaData title="ikomers | Order" content="Order pages" />
      <Navbar />
      <SubHeader title="Order" />
      <Order />
      <Footer />
    </>
  );
};

export default order;
