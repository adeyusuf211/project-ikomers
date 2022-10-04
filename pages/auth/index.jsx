import { Login, MetaData } from "../../components";

const login = () => {
    return (
        <>
            <MetaData 
                title="Login to ikomers" 
                content="Please login to ikomers" 
            />
            <Login />
        </>
    );
};

export default login;
