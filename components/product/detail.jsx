import { useState } from "react";

const ProductDetail = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full h-full px-5 lg:px-[150px] mb-20">
        <div className="lg:flex lg:gap-10 block relative">
          <img
            src="../images/furniture3.jpg"
            alt="gambar"
            className="object-cover object-center rounded-xl lg:rounded-none lg:w-[30%] lg:h-full lg:sticky lg:top-5"
          />
          <div className="block my-5">
            <span className="text-sm text-blue-600 font-semibold">
              <a href="#">Product</a> / <a href="#">Furniture</a>
            </span>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-2xl">Night Lamp Yellow</h3>
              <img
                src="../images/icons/love-pink-fill.svg"
                alt="icons"
                className="w-6 h-6"
              />
            </div>
            <h3 className="my-3 font-bold text-2xl text-gray-80">Rp.300.000</h3>
            <div className="flex flex-col gap-3 mt-3">
              <div className="flex gap-3 items-center">
                <img
                  src="../images/icons/store.svg"
                  alt="gambar"
                  className="w-4 h-4"
                />
                <span className="font-semibold text-gray-600">
                  CampuranStore
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src="../images/icons/star.svg"
                  alt="gambar"
                  className="w-4 h-4"
                />
                <span className="font-semibold text-gray-600">4.7</span>
                <span className="font-semibold text-blue-600">
                  3021 Reviews
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src="../images/icons/like-thumb.svg"
                  alt="gambar"
                  className="w-4 h-4"
                />
                <span className="font-semibold text-gray-600">92%</span>
                <span className="font-semibold text-blue-600">2900 Likes</span>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="font-bold text-xl">Product Info</h3>
              <div className="flex gap-3 my-3">
                <h3 className="font-semibold w-[30%]">Stock:</h3>
                <h3 className="font-bold">320</h3>
              </div>
              <div className="flex gap-3 my-3">
                <h3 className="font-semibold w-[30%]">Color: </h3>
                <h3 className="font-bold">Yellow</h3>
              </div>
              <div className="flex gap-3 my-3">
                <h3 className="font-semibold w-[30%]">Size: </h3>
                <h3 className="font-bold">Big, Medium, Small</h3>
              </div>
              <div className="flex gap-3 my-3">
                <h3 className="font-semibold w-[30%]">Status: </h3>
                <h3 className="font-bold bg-green-300 px-3 py-1 text-green-700">
                  Ready Stock
                </h3>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="font-bold text-xl">Product Detail</h3>
              <h4 className="font-medium text-gray-500 mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione ut cumque similique perferendis, quas ullam!
              </h4>
            </div>
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-xl">Reviews (3021)</h3>
                <img src="../images/icons/filter.svg" alt="icons" />
              </div>
              <div className="block my-5">
                <div className="flex gap-3 my-3">
                  <img
                    src="../images/icons/star.svg"
                    alt="icons"
                    className="w-4 h-4"
                  />
                  <img
                    src="../images/icons/star.svg"
                    alt="icons"
                    className="w-4 h-4"
                  />
                  <img
                    src="../images/icons/star.svg"
                    alt="icons"
                    className="w-4 h-4"
                  />
                  <img
                    src="../images/icons/star.svg"
                    alt="icons"
                    className="w-4 h-4"
                  />
                  <img
                    src="../images/icons/star.svg"
                    alt="icons"
                    className="w-4 h-4"
                  />
                </div>
                <div className="flex gap-4">
                  <img
                    src="../images/art.jpg"
                    alt="gambar"
                    className="w-10 h-10 rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-gray-800">John Doe</h3>
                    <p className="font-medium text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad, magni?
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 my-3 ml-14">
                  <img
                    src="../images/design.jpg"
                    alt="gambar"
                    className="w-20 h-20"
                  />
                  <img
                    src="../images/technology.jpg"
                    alt="gambar"
                    className="w-20 h-20"
                  />
                  <img
                    src="../images/furniture1.jpg"
                    alt="gambar"
                    className="w-20 h-20"
                  />
                </div>
              </div>
              <div className="block my-5">
                <div className="flex gap-3 my-3">
                  <img
                    src="../images/icons/star.svg"
                    alt="icons"
                    className="w-4 h-4"
                  />
                  <img
                    src="../images/icons/star.svg"
                    alt="icons"
                    className="w-4 h-4"
                  />
                  <img
                    src="../images/icons/star.svg"
                    alt="icons"
                    className="w-4 h-4"
                  />
                  <img
                    src="../images/icons/star.svg"
                    alt="icons"
                    className="w-4 h-4"
                  />
                  <img
                    src="../images/icons/star.svg"
                    alt="icons"
                    className="w-4 h-4"
                  />
                </div>
                <div className="flex gap-4">
                  <img
                    src="../images/banner.jpg"
                    alt="gambar"
                    className="w-10 h-10 rounded-full object-cover object-center"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-gray-800">John Pret</h3>
                    <p className="font-medium text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis amet adipisci non cumque voluptatum
                      exercitationem.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 my-3 ml-14">
                  <img
                    src="../images/design.jpg"
                    alt="gambar"
                    className="w-20 h-20"
                  />
                  <img
                    src="../images/technology.jpg"
                    alt="gambar"
                    className="w-20 h-20"
                  />
                </div>
              </div>
            </div>
            <h3
              href="#"
              className="font-semibold text-lg text-blue-600 text-center"
            >
              Load More
            </h3>
            <div className="block my-5">
              <h3 className="text-xl font-bold text-gray-800">More product</h3>
              <div className="mt-5 flex gap-3">
                <img
                  src="../images/furniture1.jpg"
                  alt="gambar"
                  className="w-20 h-20  object-cover object-center"
                />
                <img
                  src="../images/furniture2.jpg"
                  alt="gambar"
                  className="w-20 h-20  object-cover object-center"
                />
                <img
                  src="../images/furniture3.jpg"
                  alt="gambar"
                  className="w-20 h-20  object-cover object-center"
                />
                <img
                  src="../images/furniture4.jpg"
                  alt="gambar"
                  className="w-20 h-20  object-cover object-center"
                />
              </div>
            </div>
            <div className="mt-10 flex justify-between items-center p-3 bg-gray-300">
              <div className="block">
                <small className="bg-green-400 text-green-800 p-1">
                  30% off
                </small>
                <h3 className="font-bold text-xl">Rp.300.000</h3>
              </div>
              <div className="flex gap-2">
                <button
                  className="p-3 bg-green-500"
                  onClick={() => setShowModal(!showModal)}
                >
                  <img src="../images/icons/cart.svg" alt="icons" />
                </button>
                <button className="px-5 py-3 bg-blue-700 text-white font-semibold">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          {/* {showModal ? (
            <div className="fixed bottom-20 left-0 p-5 bg-white w-full">
              <div className="block">
                <div className="flex gap-3">
                  <img src="../images/furniture3.jpg" alt="gambar" className="h-fit w-24 object-cover object-center" />
                  <div className="block">
                    <h3 className="font-bold text-gray-800 text-2xl mb-2">Light Lamp Yellow</h3>
                    <div className="block">
                      <h3 className="font-semibold text-gray-800 mb-1 text-lg">Size</h3>
                      <div className="flex gap-2">
                        <button className="py-2 px-4 bg-gray-200">Small</button>
                        <button className="py-2 px-4 bg-gray-200">Medium</button>
                        <button className="py-2 px-4 bg-gray-200">Big</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-between items-center">
                  <h3 className="font-bold text-2xl">Rp.300.000</h3>
                  <div className="flex items-center gap-4">
                    <button className="w-8 h-8 border border-gray-500">
                      -
                    </button>
                    <h3 className="font-semibold text-lg">1</h3>
                    <button className="w-8 h-8 border border-gray-500">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : ""} */}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
