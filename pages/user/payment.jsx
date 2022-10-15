import { MetaData, Navbar, Payment, SubHeader } from "../../components";

const payment = () => {
    return (
        <>
            <MetaData 
                title="User Payment"
                content="User payment pages"
            />
            <Navbar />
            <SubHeader title="My Payment" />
            <Payment />
        </>
    )
}

export default payment;