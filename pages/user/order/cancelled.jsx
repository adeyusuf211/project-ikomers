import { Cancelled, MetaData, Navbar, SubHeader } from "../../../components";

const cancelled = () => {
  return (
    <>
      <MetaData title="Cancelled Order" content="This is Cancelled order pages" />
      <Navbar />
      <SubHeader title="Cancelled Order" />
      <Cancelled />
    </>
  );
};

export default cancelled;
