import { Checkout, MetaData, Navbar, SubHeader } from '../../components';

const checkout = () => {
  return (
    <>
      <MetaData 
        title="Checkout Pages"
        content="Checkout pages"
      />
      <Navbar />
      <SubHeader title="Checkout" />
      <Checkout />
    </>
  )
};

export default checkout;
