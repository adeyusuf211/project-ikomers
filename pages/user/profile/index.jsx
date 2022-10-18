import { MetaData, Navbar, SubHeader, User } from '../../../components';

const user = () => {
  return (
    <>
      <MetaData 
        title="User Pages"
        content="This is user pages"
      />
      <Navbar />
      <SubHeader title="My Profle" />
      <User />
    </>
  )
};

export default user;
