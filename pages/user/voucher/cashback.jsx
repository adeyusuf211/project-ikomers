import { Cashback, MetaData, Navbar, SubHeader } from "../../../components";

const cashback = () => {
  return (
    <>
      <MetaData title="Vocher Cashback" content="This is user voucher pages" />
      <Navbar />
      <SubHeader title="Cashback Voucher" />
      <Cashback />
    </>
  );
};

export default cashback;
