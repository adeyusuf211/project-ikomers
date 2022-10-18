import { Address, MetaData, Navbar, SubHeader } from "../../../components";

const address = () => {
  return (
    <>
      <MetaData title="Your Address" content="Address Pages" />
      <Navbar />
      <SubHeader title="My Address" />
      <Address />
    </>
  );
};

export default address;
