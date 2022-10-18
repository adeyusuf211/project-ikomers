import { MetaData, Navbar, SubHeader, Finished } from "../../../components";

const finished = () => {
  return (
    <>
      <MetaData title="Finished Order" content="This is finished order pages" />
      <Navbar />
      <SubHeader title="Finished Order" />
      <Finished />
    </>
  );
};

export default finished;
