import { Category, Header, MetaData, Navbar, Product } from "../../components";

const product = () => {
  return (
    <>
      <MetaData 
        title="Lets see our best product" 
        content="Product pages" 
      />
      <Navbar />
      <Header />
      <Category />
      <Product />
    </>
  );
};

export default product;
