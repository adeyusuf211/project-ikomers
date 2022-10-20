import { MetaData, Navbar, SubHeader, Voucher } from "../../../components";

const voucher = () => {
  return (
    <>
      <MetaData title="My Voucher" content="This is user voucher pages" />
      <Navbar />
      <SubHeader title="My Voucher" />
      <Voucher />
    </>
  );
};

export default voucher;
