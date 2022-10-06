import Link from "next/link";

const Product = () => {
  return (
    <>
      <div className="px-5 lg:[px-150px] py-5">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-800">Latest Product</h3>
          <div className="flex gap-3 items-center">
            <h3 className="font-bold text-gray-800">84</h3>
            <div className="p-2 border border-gray-800 rounded-md">
              <img src="../images/icons/filter.svg" alt="icons" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 my-5">
          <Link href="/product/detail">
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
                <h3 className="font-bold text-xl text-gray-800">Rp.300.000</h3>
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
                    <span className="font-medium text-gray-700 text-sm">500</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/product/detail">
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
                <h3 className="font-bold text-xl text-gray-800">Rp.500.000</h3>
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
                    <span className="font-medium text-gray-700 text-sm">300</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/product/detail">
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
                <h3 className="font-bold text-xl text-gray-800">Rp.300.000</h3>
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
                    <span className="font-medium text-gray-700 text-sm">500</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/product/detail">
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
                <h3 className="font-bold text-xl text-gray-800">Rp.500.000</h3>
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
                    <span className="font-medium text-gray-700 text-sm">300</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="block lg:mb-0 mb-5">
          <h3 className="font-semibold text-gray-800 mb-5">Latest Viewed</h3>
          <div className="lg:overflow-y-hidden overflow-y-auto flex gap-3">
            <div className="relative">
              <div className="relative">
                <img
                  src="../images/furniture1.jpg"
                  alt="product"
                  className="rounded-2xl w-full"
                />
                <span className="absolute top-3 left-3 text-gray-700 text-sm">
                  Furniture
                </span>
              </div>
              <div className="py-5 px-2">
                <span className="text-sm text-gray-600">campuranstore</span>
                <h3 className="font-bold text-xl text-gray-800">Rp.200.000</h3>
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
                  src="../images/furniture1.jpg"
                  alt="product"
                  className="rounded-2xl w-full"
                />
                <span className="absolute top-3 left-3 text-gray-700 text-sm">
                  Furniture
                </span>
              </div>
              <div className="py-5 px-2">
                <span className="text-sm text-gray-600">campuranstore</span>
                <h3 className="font-bold text-xl text-gray-800">Rp.200.000</h3>
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
          </div>
          <div className="my-3 flex gap-3 bg-blue-400 p-5 rounded-lg lg:mb-0 mb-20">
            <div className="block w-[70%]">
              <h3 className="text-blue-800 text-lg font-bold">
                Get discount up to 70% for all furniture
              </h3>
              <button className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-blue-300 mt-2">
                Get Now
              </button>
            </div>
            <img
              src="../images/furniture-nobg.png"
              className="h-full w-20"
              alt="gambar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
