import { BlogDetail, MetaData, Navbar } from '../../components'

const detailBlog = () => {
  return (
    <>
      <MetaData 
        title="Detail Blog"
        content="Our Detail Blog Pages"
      />
      <Navbar />
      <BlogDetail />
    </>
  )
};

export default detailBlog;
