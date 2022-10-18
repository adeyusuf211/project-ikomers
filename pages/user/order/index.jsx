import { MetaData, MyOrder, Navbar, SubHeader } from '../../../components'

const order = () => {
    return (
        <>
            <MetaData
                title="My Order Pages"
                content="This is user order pages"
            />
            <Navbar />
            <SubHeader title="My Order" />
            <MyOrder />
        </>
    )
}

export default order;