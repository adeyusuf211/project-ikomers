import { Blog, MetaData, Navbar } from '../../components'

const blog = () => {
  return (
    <>
      <MetaData 
        title="Our Blogs Pages"
        content="This is our blog pages"
      />
      <Navbar />
      <Blog />
    </>
  )
};

export default blog;
