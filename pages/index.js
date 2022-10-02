import { Footer, Header, Homepage, MetaData, Navbar } from "../components";

export default function Home() {
  return (
    <>
      <MetaData
        title="ikomers"
        content="Ikomers is a template for ecommerce website that you can get feel FREE and you can use for any requirement that you need."
      />
      <Navbar />
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}
