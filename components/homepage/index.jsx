import Category from '../category';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Homepage = () => {
  const [likes, setLikes]         = useState(false);
  const [countLike, setCountLike] = useState(500);
  const [product, setProduct]     = useState([]);
  
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/laptops?limit=4")
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);

    return (
      <>
        <div className="w-full lg:px-[150px] px-5 py-10 bg-gray-100">
          <Category />

          <div className="w-full pt-5">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-lg lg:text-2xl text-gray-700">
                Our best product
              </h3>
              <Link href="/product">
                <a className="font-semibold text-blue-500">View all</a>
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-3">
              {product.map((hasil) => (
                <div className="relative border border-gray-300 cursor-pointer hover:shadow-lg hover:shadow-gray-300 transition-all duration-300 ease-linear" key={hasil.id}>
                  <div className="relative">
                    <img
                      src={hasil.images[0]}
                      alt={hasil.title}
                      className="w-fit h-48 object-cover object-center"
                    />
                    <span className="absolute top-3 left-3 text-gray-700 text-sm">
                      {hasil.category}
                    </span>
                  </div>
                  <div className="lg:p-5 p-3">
                    <span className="text-sm text-gray-600">{hasil.title}</span>
                    <h3 className="font-bold text-md lg:text-xl text-gray-800">
                      Rp {parseInt(hasil.price * 15000).toLocaleString('id-ID')}
                    </h3>
                    <div className="flex justify-between items-center mt-3">
                      <a
                        href="#"
                        className="text-blue-500 font-semibold text-sm"
                      >
                        Add to cart
                      </a>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <img
                          src={
                            likes
                              ? "../images/icons/love-pink-fill.svg"
                              : "../images/icons/love.svg"
                          }
                          alt="icon"
                          className="w-4"
                          onClick={() => setLikes(!likes)}
                        />
                        <span className="font-medium text-gray-700 text-sm">
                          {!likes ? countLike : countLike + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-10 flex gap-3 bg-blue-200 p-5 rounded-lg">
              <div className="block w-full lg:py-5 text-center">
                <h3 className="text-blue-600 text-lg lg:text-4xl font-bold lg:mb-2">
                  Get discount up to 70% for all furniture
                </h3>
                <button className="px-4 py-2 font-medium bg-blue-500 text-blue-100 mt-2 shadow-lg shadow-blue-300 hover:shadow-none transition-all duration-500 ease-linear">
                  Get Now
                </button>
              </div>
            </div>
            <div className="relative mb-20">
              <div className="flex justify-between mt-5">
                <h3 className="font-semibold text-lg lg:text-2xl text-gray-700">
                  Our best article
                </h3>
                <Link href="/blog">
                  <a className="font-semibold text-blue-500">View all</a>
                </Link>
              </div>
              <div className="block">
                <div className="flex gap-3 mt-5">
                  <img
                    src="../images/art.webp"
                    alt="gambar"
                    className="lg:w-40 lg:h-40 h-20 w-20 object-cover object-center rounded-lg"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-gray-800 lg:text-4xl">
                      Lorem ipsum dolor sit amet...
                    </h3>
                    <h4 className="font-medium text-gray-600 lg:text-2xl">
                      Oct 04, 2022 - John Doe
                    </h4>
                    <h5 className="font-medium text-blue-600 lg:text-xl">
                      #art
                    </h5>
                  </div>
                </div>
                <div className="flex gap-3 mt-5">
                  <img
                    src="../images/design.webp"
                    alt="gambar"
                    className="lg:w-40 lg:h-40 h-20 w-20 object-cover object-center rounded-lg"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-gray-800 lg:text-4xl">
                      Lorem ipsum dolor sit amet...
                    </h3>
                    <h4 className="font-medium text-gray-600 lg:text-2xl">
                      Oct 04, 2022 - John Doe
                    </h4>
                    <h5 className="font-medium text-blue-600 lg:text-xl">
                      #design
                    </h5>
                  </div>
                </div>
                <div className="flex gap-3 mt-5">
                  <img
                    src="../images/technology.webp"
                    alt="gambar"
                    className="lg:w-40 lg:h-40 h-20 w-20 object-cover object-center rounded-lg"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-gray-800 lg:text-4xl">
                      Lorem ipsum dolor sit amet...
                    </h3>
                    <h4 className="font-medium text-gray-600 lg:text-2xl">
                      Oct 04, 2022 - John Doe
                    </h4>
                    <h5 className="font-medium text-blue-600 lg:text-xl">
                      #technology
                    </h5>
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