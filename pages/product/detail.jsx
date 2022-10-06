import { ProductDetail, MetaData, Navbar } from '../../components'

const detailProduct = () => {
  return (
    <>
      <MetaData
        title="Detail Product"
        content="This is detail product page"
      />
      <Navbar />
      <ProductDetail />
    </>
  )
};

export default detailProduct;
