import { MetaData, Navbar, Password, SubHeader } from "../../components";

const password = () => {
  return (
    <>
      <MetaData title="Your Password" content="Password Pages" />
      <Navbar />
      <SubHeader title="My Password" />
      <Password />
    </>
  );
};

export default password;
