import { Footer, MetaData, Navbar, SubHeader, User } from "../../components";

const account = () => {
  return (
    <>
      <MetaData
        title="Ikomers | My Account"
        content="This is page for your acccount"
      />
      <Navbar />
      <SubHeader title="My Account" />
      <User />
      <Footer />
    </>
  );
};

export default account;
