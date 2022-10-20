import { Discount, MetaData, Navbar, SubHeader } from "../../../components";

const discount = () => {
  return (
    <>
      <MetaData
        title="Voucher Discount"
        content="This is user voucher pages"
      />
      <Navbar />
      <SubHeader title="Discount Voucher" />
      <Discount />
    </>
  )
};

export default discount;
