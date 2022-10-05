import { Otp, MetaData } from "../../components";

const otp = () => {
  return (
    <>
        <MetaData 
            title="One Time Password" 
            content="Please login to ikomers" 
        />
      <Otp />
    </>
  );
};

export default otp;
