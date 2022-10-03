import Category from '../category';

const Homepage = () => {
    return (
        <>
            <div className="w-full lg:px-[150px] px-5 py-10">
                <Category />

                <div className="w-full">
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="font-semibold text-lg text-gray-700">Our best product</h3>
                        <img src="../images/icons/filter.svg" alt="icon" className='cursor-pointer' />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                            <div className="relative">
                                <img src="../images/furniture1.jpg" alt="product" className='rounded-2xl w-fit' />
                                <span className="absolute top-3 left-3 text-gray-700 text-sm">Furniture</span>
                            </div>
                            <div className="py-5 px-2">
                                <span className="text-sm text-gray-600">
                                    campuranstore
                                </span>
                                <h3 className="font-bold text-xl text-gray-800">Rp.300.000</h3>
                                <div className="flex justify-between items-center mt-5">
                                    <a href="#" className="text-blue-500 font-semibold text-sm">Add to cart</a>
                                    <div className="flex items-center gap-1">
                                        <img src="../images/icons/love.svg" alt="icon" className='w-4' />
                                        <span className="font-medium text-gray-700 text-sm">500</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative">
                                <img src="../images/furniture2.jpg" alt="product" className='rounded-2xl w-fit' />
                                <span className="absolute top-3 left-3 text-gray-700 text-sm">Furniture</span>
                            </div>
                            <div className="py-5 px-2">
                                <span className="text-sm text-gray-600">
                                    campuranstore
                                </span>
                                <h3 className="font-bold text-xl text-gray-800">Rp.500.000</h3>
                                <div className="flex justify-between items-center mt-5">
                                    <a href="#" className="text-blue-500 font-semibold text-sm">Add to cart</a>
                                    <div className="flex items-center gap-1">
                                        <img src="../images/icons/love.svg" alt="icon" className='w-4' />
                                        <span className="font-medium text-gray-700 text-sm">300</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage