import { useState } from "react";

const ProductDetail = () => {

  const [showModal, setShowModal]   = useState(false);
  const [isHover, setIsHover]       = useState(false);

  const mouseMove = (e) => {
    const image = document.getElementById("image");

    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    image.style.transformOrigin = `${x}px ${y}px`;
  };

  return (
    <>
      <div className="w-full h-full px-5 lg:px-[150px] mb-10 bg-gray-100 py-10">
        <div className="lg:flex lg:gap-10 block relative">
          <div
            className="lg:w-[40%] lg:h-full lg:sticky lg:top-5 overflow-hidden"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <img
              src="../images/furniture3.jpg"
              alt="gambar"
              className={`object-cover object-center flex w-full h-full ${
                isHover ? "scale-[2]" : ""
              }`}
              onMouseMove={(e) => mouseMove(e)}
              id="image"
            />
          </div>
          <div className="block my-5 w-full">
            <span className="text-sm text-blue-600 font-semibold">
              <a href="#">Product</a> / <a href="#">Furniture</a>
            </span>
            <div className="flex justify-between items-center">
              <h3 className="font-bold lg:text-3xl">Night Lamp Yellow</h3>
              <img
                src="../images/icons/love-pink-fill.svg"
                alt="icons"
                className="w-6 h-6"
              />
            </div>
            <div className="block">
              <h3 className="my-3 font-bold text-2xl text-gray-80">Rp.300.000</h3>
              <div className="flex gap-3 items-center">
                <span className="bg-red-500 text-red-200 px-3 font-medium">50%</span>
                <div className="block relative">
                  <h4 className="font-bold text-gray-500">Rp.600.000</h4>
                  <hr className="border-gray-800 absolute top-3 w-full" />
                </div>
              </div>
            </div>
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
            <div className="my-3 block">
              <h3 className="font-bold text-gray-600">Select Color:</h3>
              <div className="flex gap-2 mt-2">
                <button className="px-4 py-2 border border-gray-500 text-gray-500 font-medium">
                  Yellow
                </button>
                <button className="px-4 py-2 border border-gray-500 text-gray-500 font-medium">
                  Green
                </button>
                <button className="px-4 py-2 border border-gray-500 text-gray-500 font-medium">
                  Red
                </button>
                <button className="px-4 py-2 border border-gray-500 text-gray-500 font-medium">
                  Black
                </button>
              </div>
            </div>
            <div className="my-3 block">
              <h3 className="font-bold text-gray-600">Select Size:</h3>
              <div className="flex gap-2 mt-2">
                <button className="p-2 border border-gray-500 text-gray-500 font-medium">
                  small
                </button>
                <button className="p-2 border border-gray-500 text-gray-500 font-medium">
                  medium
                </button>
                <button className="p-2 border border-gray-500 text-gray-500 font-medium">
                  large
                </button>
              </div>
            </div>
            <div className="block my-10">
              <div className="flex gap-3">
                <img src="../images/art.jpg" alt="gambar" className="w-14 h-14 object-cover object-center rounded-full" />
                <div className="block">
                  <h3 className="font-semibold text-lg text-gray-600">campuranstore</h3>
                  <h3 className="font-medium text-green-500">Online</h3>
                </div>
                <button className="h-10 w-24 ml-auto font-medium border border-green-600 text-green-600">
                  Follow
                </button>
              </div>
            </div>
            <div className="block">
              <h3 className="font-bold text-lg text-gray-600">Voucher</h3>
              <div className="flex gap-3 mt-2 lg:overflow-x-hidden overflow-x-auto">
                <div className="font-semibold text-sm lg:text-2xl text-green-600 border-2 border-green-500 lg:p-10 p-4">
                  Voucher 1
                </div>
                <div className="font-semibold text-sm lg:text-2xl text-gray-600 border-2 border-gray-600 lg:p-10 p-4">
                  Voucher 2
                </div>
                <div className="font-semibold text-sm lg:text-2xl text-gray-600 border-2 border-gray-600 lg:p-10 p-4">
                  Voucher 3
                </div>
              </div>
            </div>
            <div className="mt-10 flex gap-2">
              <button type="button" className="border border-gray-500 p-3">
                <img src="../images/icons/cart.svg" alt=" gambar" />
              </button>
              <button className="bg-green-500 text-white font-medium px-10">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="w-full h-full my-10 bg-white p-5">
          <div className="relative">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nulla nobis consequatur assumenda reiciendis nesciunt numquam nam consequuntur vero rem iusto magnam debitis, consectetur minus perferendis, omnis sunt rerum deleniti enim hic quis ut neque optio? Quaerat atque, voluptates voluptatem nesciunt ducimus quod delectus quia? Nostrum blanditiis rerum accusantium repudiandae.
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
              <div className="flex gap-3">
                <img
                  src="../images/art.jpg"
                  alt="gambar"
                  className="w-10 h-10 rounded-full object-cover object-center"
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-gray-800">John Doe</h3>
                  <p className="font-medium text-sm text-gray-600">member classic</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-sm text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolore. Obcaecati a minima, dolorum nesciunt repellat magni facere excepturi corrupti placeat, illum delectus. Maxime qui expedita modi architecto omnis nobis!</p>
                <div className="flex gap-2 my-3">
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
              <div className="flex gap-3">
                <img
                  src="../images/banner.jpg"
                  alt="gambar"
                  className="w-10 h-10 rounded-full object-cover object-center"
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-gray-800">John Pret</h3>
                  <p className="font-medium text-sm text-gray-600">member classic</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-sm text-gray-500 my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam quia repellendus sequi! Aliquam perferendis provident obcaecati quisquam, ab impedit dolorem culpa pariatur animi repellendus doloremque dolorum nam voluptatibus veniam quo ratione sit deserunt beatae modi ducimus! Omnis soluta vel debitis laboriosam eaque, ratione autem magni. Expedita voluptatum dolor consequatur ea!</p>
                <div className="flex gap-2 my-3">
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
          </div>
          <h3
            href="#"
            className="font-semibold text-lg text-blue-600 text-center"
          >
            Load More
          </h3>
          <div className="block my-5 lg:overflow-x-hidden overflow-x-auto">
            <h3 className="text-xl font-bold text-gray-800">More product</h3>
            <div className="mt-5 flex gap-3">
              <img
                src="../images/furniture1.jpg"
                alt="gambar"
                className="lg:w-60 lg:h-full w-20 h-20  object-cover object-center"
              />
              <img
                src="../images/furniture2.jpg"
                alt="gambar"
                className="lg:w-60 lg:h-full w-20 h-20  object-cover object-center"
              />
              <img
                src="../images/furniture3.jpg"
                alt="gambar"
                className="lg:w-60 lg:h-full w-20 h-20  object-cover object-center"
              />
              <img
                src="../images/furniture4.jpg"
                alt="gambar"
                className="lg:w-60 lg:h-full w-20 h-20  object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
