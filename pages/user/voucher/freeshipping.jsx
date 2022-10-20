import { MetaData, Navbar, SubHeader, FreeShipping } from "../../../components";

const freeshipping = () => {
  return (
        <>
            <MetaData title="Voucher Free Shipping" content="This is user voucher pages" />
            <Navbar />
            <SubHeader title="Free Shipping Voucher" />
            <FreeShipping />
        </>
  );
};

export default freeshipping;
