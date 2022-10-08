import { MetaData, Navbar, Order, SubHeader } from '../../components'

const order = () => {
  return (
    <>
      <MetaData 
        title="YOur Order"
        content="Order pages"
      />
      <Navbar />
      <SubHeader title="Order" />
      <Order />
    </>
  )
};

export default order;