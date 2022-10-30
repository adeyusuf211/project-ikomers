import Link from "next/link";

const Product = () => {
  return (
    <>
      <div className="px-5 lg:px-[150px] py-5 bg-gray-100">
        <div className="flex justify-between gap-3 p-5 rounded-xl bg-white mb-5">
          <input
            type="text"
            className="w-full bg-transparent outline-none"
            placeholder="search article..."
          />
          <img src="../images/icons/search.svg" alt="gambar" />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-800 lg:text-2xl">
            Latest Product
          </h3>
          <div className="flex gap-3 items-center">
            <h3 className="font-bold text-gray-800">84</h3>
            <div className="p-2 border border-gray-800 rounded-md">
              <img src="../images/icons/filter.svg" alt="icons" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-5">
          <Link href="/product/detail">
            <div className="relative">
              <div className="relative">
                <img
                  src="../images/furniture1.webp"
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
                    <span className="font-medium text-gray-700 text-sm">
                      500
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/product/detail">
            <div className="relative">
              <div className="relative">
                <img
                  src="../images/furniture2.webp"
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
                    <span className="font-medium text-gray-700 text-sm">
                      300
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/product/detail">
            <div className="relative">
              <div className="relative">
                <img
                  src="../images/furniture3.webp"
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
                    <span className="font-medium text-gray-700 text-sm">
                      500
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/product/detail">
            <div className="relative">
              <div className="relative">
                <img
                  src="../images/furniture4.webp"
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
                    <span className="font-medium text-gray-700 text-sm">
                      300
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/product/detail">
            <div className="relative">
              <div className="relative">
                <img
                  src="../images/furniture1.webp"
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
                    <span className="font-medium text-gray-700 text-sm">
                      500
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/product/detail">
            <div className="relative">
              <div className="relative">
                <img
                  src="../images/furniture2.webp"
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
                    <span className="font-medium text-gray-700 text-sm">
                      300
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/product/detail">
            <div className="relative">
              <div className="relative">
                <img
                  src="../images/furniture3.webp"
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
                    <span className="font-medium text-gray-700 text-sm">
                      500
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/product/detail">
            <div className="relative">
              <div className="relative">
                <img
                  src="../images/furniture4.webp"
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
                    <span className="font-medium text-gray-700 text-sm">
                      300
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="my-5 flex gap-3 bg-blue-200 p-5 rounded-lg lg:my-10">
          <div className="block w-full lg:py-5 text-center">
            <h3 className="text-blue-600 text-lg lg:text-4xl font-bold lg:mb-2">
              Get discount up to 70% for all furniture
            </h3>
            <button className="px-4 py-2 font-medium bg-blue-500 text-blue-100 mt-2 shadow-lg shadow-blue-300 hover:shadow-none transition-all duration-500 ease-linear">
              Get Now
            </button>
          </div>
        </div>
        <div className="block lg:mb-0 mb-5">
          <h3 className="font-semibold text-gray-800 mb-5 lg:text-2xl">
            Latest Viewed
          </h3>
          <div className="lg:overflow-x-hidden overflow-y-auto flex lg:flex-wrap lg:justify-between gap-3">
            <div className="relative shrink-0 lg:w-60 w-52 h-fit">
              <div className="relative">
                <img
                  src="../images/furniture1.webp"
                  alt="product"
                  className="rounded-2xl w-full h-full"
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
            <div className="relative shrink-0 lg:w-60 w-52 h-fit">
              <div className="relative">
                <img
                  src="../images/furniture2.webp"
                  alt="product"
                  className="rounded-2xl w-full h-full"
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
                    <span className="font-medium text-gray-700 text-sm">
                      400
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 lg:w-60 w-52 h-fit">
              <div className="relative">
                <img
                  src="../images/furniture4.webp"
                  alt="product"
                  className="rounded-2xl w-full h-full"
                />
                <span className="absolute top-3 left-3 text-gray-700 text-sm">
                  Furniture
                </span>
              </div>
              <div className="py-5 px-2">
                <span className="text-sm text-gray-600">campuranstore</span>
                <h3 className="font-bold text-xl text-gray-800">Rp.400.000</h3>
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
                      700
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 lg:w-60 w-52 h-fit">
              <div className="relative">
                <img
                  src="../images/furniture3.webp"
                  alt="product"
                  className="rounded-2xl w-full h-full"
                />
                <span className="absolute top-3 left-3 text-gray-700 text-sm">
                  Furniture
                </span>
              </div>
              <div className="py-5 px-2">
                <span className="text-sm text-gray-600">campuranstore</span>
                <h3 className="font-bold text-xl text-gray-800">Rp.400.000</h3>
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
                      700
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
