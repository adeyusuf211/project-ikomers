import Category from '../category';
import Link from 'next/link';

const Homepage = () => {
    return (
      <>
        <div className="w-full lg:px-[150px] px-5 py-10 bg-gray-100">
          <Category />

          <div className="w-full pt-5 bg-white">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-lg text-gray-700">
                Our best product
              </h3>
              <Link href="/product">
                <a className="font-semibold text-blue-500">View all</a>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <div className="relative">
                  <img
                    src="../images/furniture1.jpg"
                    alt="product"
                    className="rounded-2xl w-fit"
                  />
                  <span className="absolute top-3 left-3 text-gray-700 text-sm">
                    Furniture
                  </span>
                </div>
                <div className="py-5 px-2">
                  <span className="text-sm text-gray-600">campuranstore</span>
                  <h3 className="font-bold text-xl text-gray-800">
                    Rp.300.000
                  </h3>
                  <div className="flex justify-between items-center mt-3">
                    <a href="#" className="text-blue-500 font-semibold text-sm">
                      Add to cart
                    </a>
                    <div className="flex items-center gap-1">
                      <img
                        src="../images/icons/love.svg"
                        alt="icon"
                        className="w-4"
                      />
                      <span className="font-medium text-gray-700 text-sm">
                        500
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative">
                  <img
                    src="../images/furniture2.jpg"
                    alt="product"
                    className="rounded-2xl w-fit"
                  />
                  <span className="absolute top-3 left-3 text-gray-700 text-sm">
                    Furniture
                  </span>
                </div>
                <div className="py-5 px-2">
                  <span className="text-sm text-gray-600">campuranstore</span>
                  <h3 className="font-bold text-xl text-gray-800">
                    Rp.500.000
                  </h3>
                  <div className="flex justify-between items-center mt-3">
                    <a href="#" className="text-blue-500 font-semibold text-sm">
                      Add to cart
                    </a>
                    <div className="flex items-center gap-1">
                      <img
                        src="../images/icons/love.svg"
                        alt="icon"
                        className="w-4"
                      />
                      <span className="font-medium text-gray-700 text-sm">
                        300
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative">
                  <img
                    src="../images/furniture3.jpg"
                    alt="product"
                    className="rounded-2xl w-fit"
                  />
                  <span className="absolute top-3 left-3 text-gray-700 text-sm">
                    Furniture
                  </span>
                </div>
                <div className="py-5 px-2">
                  <span className="text-sm text-gray-600">campuranstore</span>
                  <h3 className="font-bold text-xl text-gray-800">
                    Rp.300.000
                  </h3>
                  <div className="flex justify-between items-center mt-3">
                    <a href="#" className="text-blue-500 font-semibold text-sm">
                      Add to cart
                    </a>
                    <div className="flex items-center gap-1">
                      <img
                        src="../images/icons/love.svg"
                        alt="icon"
                        className="w-4"
                      />
                      <span className="font-medium text-gray-700 text-sm">
                        500
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative">
                  <img
                    src="../images/furniture4.jpg"
                    alt="product"
                    className="rounded-2xl w-fit"
                  />
                  <span className="absolute top-3 left-3 text-gray-700 text-sm">
                    Furniture
                  </span>
                </div>
                <div className="py-5 px-2">
                  <span className="text-sm text-gray-600">campuranstore</span>
                  <h3 className="font-bold text-xl text-gray-800">
                    Rp.500.000
                  </h3>
                  <div className="flex justify-between items-center mt-3">
                    <a href="#" className="text-blue-500 font-semibold text-sm">
                      Add to cart
                    </a>
                    <div className="flex items-center gap-1">
                      <img
                        src="../images/icons/love.svg"
                        alt="icon"
                        className="w-4"
                      />
                      <span className="font-medium text-gray-700 text-sm">
                        300
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3 flex gap-3 bg-blue-200 p-5 rounded-lg lg:mb-0 mb-20">
              <div className="block w-[70%]">
                <h3 className="text-blue-600 text-lg font-bold">
                  Get discount up to 70% for all furniture
                </h3>
                <button className="px-4 py-2 rounded-lg font-medium bg-blue-500 text-blue-100 mt-2">
                  Get Now
                </button>
              </div>
              <img
                src="../images/furniture-nobg.png"
                className="h-full w-20"
                alt="gambar"
              />
            </div>
            <div className="relative mb-20">
              <div className="flex justify-between mt-5">
                <h3 className="font-semibold text-lg text-gray-700">
                  Our best article
                </h3>
                <Link href="/blogs">
                  <a className="font-semibold text-blue-500">View all</a>
                </Link>
              </div>
              <div className="block">
                <div className="flex gap-3 mt-5">
                  <img
                    src="../images/art.jpg"
                    alt="gambar"
                    className="h-20 w-20 object-cover object-center rounded-lg"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-gray-800">
                      Lorem ipsum dolor sit amet...
                    </h3>
                    <h4 className="font-medium text-gray-600">
                      Oct 04, 2022 - John Doe
                    </h4>
                    <h5 className="font-medium text-blue-600">#art</h5>
                  </div>
                </div>
                <div className="flex gap-3 mt-5">
                  <img
                    src="../images/design.jpg"
                    alt="gambar"
                    className="h-20 w-20 object-cover object-center rounded-lg"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-gray-800">
                      Lorem ipsum dolor sit amet...
                    </h3>
                    <h4 className="font-medium text-gray-600">
                      Oct 04, 2022 - John Doe
                    </h4>
                    <h5 className="font-medium text-blue-600">#design</h5>
                  </div>
                </div>
                <div className="flex gap-3 mt-5">
                  <img
                    src="../images/technology.jpg"
                    alt="gambar"
                    className="h-20 w-20 object-cover object-center rounded-lg"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-gray-800">
                      Lorem ipsum dolor sit amet...
                    </h3>
                    <h4 className="font-medium text-gray-600">
                      Oct 04, 2022 - John Doe
                    </h4>
                    <h5 className="font-medium text-blue-600">#technology</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Homepage