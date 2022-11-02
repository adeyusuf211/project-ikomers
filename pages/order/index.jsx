import { MetaData, Navbar, Order, SubHeader } from '../../components'

const order = () => {
  return (
    <>
      <MetaData 
        title="Your Order"
        content="Order pages"
      />
      <Navbar />
      <SubHeader title="Order" />
      <Order />
    </>
  )
};

export default order;