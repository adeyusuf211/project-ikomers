import { MetaData, Navbar, Notification, SubHeader } from '../../../components';

const notification   = () => {
  return (
    <>
      <MetaData 
        title="User Notification"
        content="This is user notification pages"
      />
      <Navbar />
      <SubHeader title="Notification" />
      <Notification />
    </>
  )
};

export default notification;