import { Footer, MetaData, Navbar, SubHeader, User } from "../../components";

const address = () => {
  return (
    <>
      <MetaData
        title="Ikomers | Address"
        content="Page for look your address"
      />
      <Navbar />
      <SubHeader title="My Address" />
      <User />
      <Footer />
    </>
  );
};

export default address;
