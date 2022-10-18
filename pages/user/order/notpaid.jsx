import { MetaData, NotPaid, Navbar, SubHeader } from "../../../components";

const notpaid = () => {
  return (
    <>
      <MetaData title="User Paid" content="This is user paid pages" />
      <Navbar />
      <SubHeader title="Not Paid" />
      <NotPaid />
    </>
  );
};

export default notpaid;
