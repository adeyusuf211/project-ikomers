import { Cart, MetaData, Navbar, SubHeader } from '../../components'

const cart = () => {
  return (
    <>
      <MetaData 
        title="Cart | Lets look your goods in cart"
        content="Cart Pages"
      />
      <Navbar />
      <SubHeader title="Your Cart" />
      <Cart />
    </>
  )
};

export default cart;
