import Link from "next/link";
import { useState } from "react";

const DetailProduct = () => {
  const [numbers, setNumbers] = useState(1);
  const [stock, setStock] = useState(500);
  const [price, setPrice] = useState(300000);
  const [likes, setLikes] = useState(12);
  const [isHover, setIsHover] = useState(false);
  const [likeIcons, setLikesIcons] = useState("../images/icons/like.svg");

  const countersNumber = (str) => {
    if (str === "+") {
      setPrice(price + 300000);
      setNumbers(numbers + 1);
      setStock(stock - 1);
    } else {
      setNumbers(numbers - 1);
      setStock(stock + 1);
    }
  };

  const like = () => {
    setLikes(likes + 1);
    setLikesIcons("../images/icons/like_fill.svg");
  };

  const mouseMove = (e) => {
    const image = document.getElementById("image");

    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    image.style.transformOrigin = `${x}px ${y}px`;
  };

  return (
    <div className="w-full h-full py-10 px-5 lg:px-[100px] bg-gray-100">
      <div className="relative">
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="lg:w-[35%] w-full h-auto overflow-hidden">
            <img
              src="../images/furniture3.jpg"
              alt="gambar"
              className={`w-full h-full flex object-cover object-center ${
                isHover ? "scale-[2]" : ""
              }`}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onMouseMove={(e) => mouseMove(e)}
              id="image"
            />
          </div>
          <div className="flex-col">
            <h3 className="text-gray-600 text-2xl lg:text-4xl font-semibold uppercase">
              The best product in the moon
            </h3>
            <div className="flex gap-2 lg:gap-5 mt-2">
              <h3 className="text-blue-500">
                400 <span className="text-blue-700 font-semibold">Selling</span>
              </h3>
              |
              <h3 className="text-red-500">
                Rating <span className="text-red-700 font-semibold">4.7</span>
              </h3>
              |
              <h3 className="text-green-500">
                5.300{" "}
                <span className="text-green-700 font-semibold">Reviews</span>
              </h3>
            </div>
            <div className="flex flex-col p-3 my-3 bg-gray-50">
              <h3 className="font-bold text-4xl my-3 text-gray-600">
                Rp.300.000
              </h3>
              <div className="flex gap-3">
                <small className="py-1 px-2 bg-red-600 text-red-200 font-semibold">
                  50%
                </small>
                <div className="block">
                  <small className="relative font-medium">
                    Rp.600.000
                    <hr className="w-full h-2 border-black absolute left-0 top-2"></hr>
                  </small>
                </div>
              </div>
              <div className="block mt-3">
                <h3 className="font-semibold">lowest price</h3>
                <h3 className="text-gray-500 font-normal">
                  lowest price guarantee
                </h3>
              </div>
            </div>
            <div className="block p-3">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center gap-3">
                <div className="flex">
                  <button
                    className="w-8 h-8 flex justify-center items-center border border-gray-500 outline-none cursor-pointer hover:bg-gray-500 transiton-all duration-300 ease hover:text-white"
                    onClick={() => countersNumber("-")}
                  >
                    -
                  </button>
                  <h3 className="w-10 h-8 flex justify-center items-center border-y border-gray-500 font-medium">
                    {numbers}
                  </h3>
                  <button
                    className="w-8 h-8 flex justify-center items-center border border-gray-500 outline-none cursor-pointer hover:bg-gray-500 transiton-all duration-300 ease hover:text-white"
                    onClick={() => countersNumber("+")}
                  >
                    +
                  </button>
                </div>
                <h3 className="font-semibold text-red-600">
                  {stock}
                  <span className="font-normal text-red-400">left</span>
                </h3>
              </div>
              <div className="flex gap-5 items-center mt-5">
                <h3 className="font-medium text-gray-700">Color: </h3>
                <div className="flex gap-3">
                  <button className="py-1 px-3 border border-gray-500 outline-none hover:bg-gray-500 hover:text-white transition-all duration-500 ease">
                    color 1
                  </button>
                  <button className="py-1 px-3 border border-gray-500 outline-none hover:bg-gray-500 hover:text-white transition-all duration-500 ease">
                    color 2
                  </button>
                  <button className="py-1 px-3 border border-gray-500 outline-none hover:bg-gray-500 hover:text-white transition-all duration-500 ease">
                    color 3
                  </button>
                </div>
              </div>
            </div>
            <div className="block p-3">
              <h3 className="font-medium text-gray-700">Subtotal</h3>
              <div className="flex gap-3 items-center">
                <h3 className="font-semibold text-2xl text-gray-700">
                  Rp.{price.toLocaleString("id-ID")}
                </h3>
              </div>
            </div>
            <div className="flex my-3 gap-3 p-3">
              <Link href="/cart">
                <button className="py-2 px-4 border border-red-500 text-red-500 transition-all duration-300 ease-in hover:bg-red-500 hover:text-white">
                  Add to cart
                </button>
              </Link>
              <button className="py-2 px-4 border bg-red-500 text-white">
                Buy now
              </button>
            </div>
          </div>
        </div>
        <div className="my-3 p-4 bg-gray-50 flex lg:flex-row flex-col lg:justify-between justify-center lg:items-center items-start">
          <div className="flex lg:flex-row flex-col gap-5 lg:mb-0 mb-5">
            <img
              src="../../images/furniture1.jpg"
              alt="gambar"
              className="w-20 h-20 rounded-full"
            />
            <div className="block">
              <h3 className="font-semibold text-gray-600">yayasanstore</h3>
              <h4 className="font-medium text-gray-400">Active 3 Hours Ago</h4>
              <div className="flex gap-3 mt-2">
                <button className="px-3 py-1 border border-red-500 text-red-500 outline-none">
                  Visit Store
                </button>
                <button className="px-3 py-1 bg-red-500 text-white outline-none">
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-10 gap-5">
            <div className="block">
              <div className="flex gap-3">
                <h3 className="font-semibold text-gray-400">Feedback:</h3>
                <h3 className="font-semibold text-gray-600">3.830</h3>
              </div>
              <div className="flex gap-3">
                <h3 className="font-semibold text-gray-400">Products:</h3>
                <h3 className="font-semibold text-gray-600">500</h3>
              </div>
            </div>
            <div className="block">
              <div className="flex gap-3">
                <h3 className="font-semibold text-gray-400">Store Status:</h3>
                <h3 className="font-semibold text-gray-600">Star Seller</h3>
              </div>
              <div className="flex gap-3">
                <h3 className="font-semibold text-gray-400">Join:</h3>
                <h3 className="font-semibold text-gray-600">3 Years Ago</h3>
              </div>
            </div>
            <div className="block">
              <div className="flex gap-3">
                <h3 className="font-semibold text-gray-400">Followers:</h3>
                <h3 className="font-semibold text-gray-600">32.029</h3>
              </div>
              <div className="flex gap-3">
                <h3 className="font-semibold text-gray-400">Product Selling</h3>
                <h3 className="font-semibold text-gray-600">300</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 w-full h-full bg-gray-50">
          <h3 className="font-semibold text-gray-700 mb-5">
            Product Spesification
          </h3>
          <div className="flex lg:flex-row flex-col justify-between gap-2 lg:gap-10">
            <div className="relative w-full">
              <div className="block py-1">
                <div className="flex gap-5">
                  <div className="w-[30%] lg:w-[20%]">
                    <h3 className="font-semibold text-gray-400">Bahan</h3>
                  </div>
                  <div className="relative">
                    <h3 className="font-semibold text-gray-800">Baja</h3>
                  </div>
                </div>
              </div>
              <div className="block py-1">
                <div className="flex gap-5">
                  <div className="w-[30%] lg:w-[20%]">
                    <h3 className="font-semibold text-gray-400">Warna</h3>
                  </div>
                  <div className="relative">
                    <h3 className="font-semibold text-gray-800">
                      Merah, Kuning, Hitam
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block py-1">
                <div className="flex gap-5">
                  <div className="w-[30%] lg:w-[20%]">
                    <h3 className="font-semibold text-gray-400">Ukuran</h3>
                  </div>
                  <div className="relative">
                    <h3 className="font-semibold text-gray-800">
                      Kecil, Besar, Sedang
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block py-1">
                <div className="flex gap-5">
                  <div className="w-[30%] lg:w-[20%]">
                    <h3 className="font-semibold text-gray-400">Stok</h3>
                  </div>
                  <div className="relative">
                    <h3 className="font-semibold text-gray-800">500</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="block py-1">
                <div className="flex gap-5">
                  <div className="w-[30%] lg:w-[20%]">
                    <h3 className="font-semibold text-gray-400">Kategori</h3>
                  </div>
                  <div className="relative">
                    <h3 className="font-semibold text-gray-800">
                      <a
                        href="#"
                        className="text-blue-500 hover:text-blue-700 transition-all duration-500 ease-in"
                      >
                        Accesories
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block py-1">
                <div className="flex gap-5">
                  <div className="w-[30%] lg:w-[20%]">
                    <h3 className="font-semibold text-gray-400">Tagar</h3>
                  </div>
                  <div className="relative">
                    <h3 className="font-semibold text-gray-800">
                      <a
                        href="#"
                        className="text-blue-500 hover:text-blue-700 transition-all duration-500 ease-in"
                      >
                        accesories,{" "}
                      </a>
                      <a
                        href="#"
                        className="text-blue-500 hover:text-blue-700 transition-all duration-500 ease-in"
                      >
                        hiasan,{" "}
                      </a>
                      <a
                        href="#"
                        className="text-blue-500 hover:text-blue-700 transition-all duration-500 ease-in"
                      >
                        light
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="block py-1">
                <div className="flex gap-5">
                  <div className="w-[30%] lg:w-[20%]">
                    <h3 className="font-semibold text-gray-400">Terjual</h3>
                  </div>
                  <div className="relative">
                    <h3 className="font-semibold text-gray-800">300</h3>
                  </div>
                </div>
              </div>
              <div className="block py-1">
                <div className="flex gap-5">
                  <div className="w-[30%] lg:w-[20%]">
                    <h3 className="font-semibold text-gray-400">Jaminan</h3>
                  </div>
                  <div className="relative">
                    <h3 className="font-semibold text-gray-800">
                      Produk Original
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block py-1">
                <div className="flex gap-5">
                  <div className="w-[30%] lg:w-[20%]">
                    <h3 className="font-semibold text-gray-400">Status</h3>
                  </div>
                  <div className="relative">
                    <h3 className="font-semibold text-green-500">Tersedia</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 my-3 bg-gray-50 block">
          <h3 className="font-semibold text-gray-600 mb-5">Description</h3>
          <p className="font-base text-gray-500 my-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur reiciendis officia enim id harum voluptate perspiciatis
            nostrum corporis aspernatur rem?
          </p>
          <p className="font-base text-gray-500 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta
            dolorum, accusamus quam nihil sint ex in dignissimos vel maxime,
            aperiam libero debitis enim recusandae quod tempore necessitatibus
            architecto praesentium ad, a provident temporibus? Accusantium
            doloribus incidunt excepturi magnam repellendus!
          </p>
          <p className="font-base text-gray-500 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sequi?
          </p>
        </div>
        <div className="p-4 block w-full h-full bg-gray-50">
          <h3 className="font-semibold text-gray-600 mb-5">Product Rating</h3>
          <div className="relative mt-10">
            <div className="flex items-center gap-5">
              <div className="flex gap-1">
                <img src="../images/icons/star_fill.svg" alt="icon" />
                <img src="../images/icons/star_fill.svg" alt="icon" />
                <img src="../images/icons/star_fill.svg" alt="icon" />
                <img src="../images/icons/star_fill.svg" alt="icon" />
                <img src="../images/icons/star_outline.svg" alt="icon" />
              </div>
              <h3 className="font-medium text-gray-500">1 Years Ago</h3>
              <img
                src="../images/icons/more.svg"
                alt="gambar"
                className="ml-auto"
              />
            </div>
            <div className="flex gap-5 items-center my-5">
              <img
                src="../images/design.jpg"
                alt="gambar"
                className="w-10 h-10 rounded-full object-cover object-center"
              />
              <div className="flex flex-col">
                <h3 className="font-medium text-gray-600">CuyHat</h3>
              </div>
            </div>
            <h3 className="font-semibold text-gray-500">Variant: Black</h3>
            <p className="mt-3 font-medium text-gray-800">
              Great light, i love it.
            </p>
            <div className="flex my-2 gap-3">
              <img
                src="../images/nature.jpg"
                alt="gambar"
                className="w-20 h-20 object-cover object-center"
              />
              <img
                src="../images/technology.jpg"
                alt="gambar"
                className="w-20 h-20 object-cover object-center"
              />
            </div>
            <div className="flex gap-3 items-center">
              <img
                src={likeIcons}
                alt="gambar"
                onClick={() => like()}
                className="cursor-pointer"
              />
              <p className="text-gray-600">{likes}</p>
            </div>
            <div className="flex gap-5 my-3 items-center">
              <img
                src="../images/fashion.jpg"
                alt="gambar"
                className="w-10 h-10 rounded-full ml-5"
              />
              <h3 className="font-medium text-gray-600">yayasanstore</h3>
              <small className="py-1 px-2 bg-blue-500 text-white text-xs -ml-3 rounded-full">
                Admin
              </small>
            </div>
            <div className="relative ml-5">
              <p className="mt-3 font-medium text-gray-800">
                Thanks for your feedback
              </p>
              <div className="flex gap-3 items-center mt-2">
                <img src="../images/icons/like.svg" alt="gambar" />
                <p className="text-gray-600">3</p>
              </div>
            </div>
          </div>
          <div className="relative mt-10">
            <div className="flex items-center gap-5">
              <div className="flex gap-1">
                <img src="../images/icons/star_fill.svg" alt="icon" />
                <img src="../images/icons/star_fill.svg" alt="icon" />
                <img src="../images/icons/star_fill.svg" alt="icon" />
                <img src="../images/icons/star_fill.svg" alt="icon" />
                <img src="../images/icons/star_fill.svg" alt="icon" />
              </div>
              <h3 className="font-medium text-gray-500">2 Years Ago</h3>
              <img
                src="../images/icons/more.svg"
                alt="gambar"
                className="ml-auto"
              />
            </div>
            <div className="flex gap-5 items-center my-5">
              <img
                src="../images/banner.jpg"
                alt="gambar"
                className="w-10 h-10 rounded-full object-cover object-center"
              />
              <div className="flex flex-col">
                <h3 className="font-medium text-gray-600">KamPes</h3>
              </div>
            </div>
            <h3 className="font-semibold text-gray-500">Variant: Black</h3>
            <p className="mt-3 font-medium text-gray-800">
              I love this product, lowe it, love it, love it...
            </p>
            <div className="flex gap-3 items-center mt-3">
              <img src="../images/icons/like.svg" alt="gambar" />
              <p className="text-gray-600">20</p>
            </div>
          </div>
          <div className="relative mt-10">
            <div className="flex items-center gap-5">
              <div className="flex gap-1">
                <img src="../images/icons/star_fill.svg" alt="icon" />
                <img src="../images/icons/star_fill.svg" alt="icon" />
                <img src="../images/icons/star_fill.svg" alt="icon" />
                <img src="../images/icons/star_fill.svg" alt="icon" />
                <img src="../images/icons/star_fill.svg" alt="icon" />
              </div>
              <h3 className="font-medium text-gray-500">2 Years Ago</h3>
              <img
                src="../images/icons/more.svg"
                alt="gambar"
                className="ml-auto"
              />
            </div>
            <div className="flex gap-5 items-center my-5">
              <img
                src="../images/nature.jpg"
                alt="gambar"
                className="w-10 h-10 rounded-full object-cover object-center"
              />
              <div className="flex flex-col">
                <h3 className="font-medium text-gray-600">Lolololol</h3>
              </div>
            </div>
            <h3 className="font-semibold text-gray-500">Variant: Black</h3>
            <p className="mt-3 font-medium text-gray-800">
              Best product, i like it
            </p>
            <div className="flex gap-3 items-center mt-3">
              <img src="../images/icons/like.svg" alt="gambar" />
              <p className="text-gray-600">6</p>
            </div>
          </div>
          <div className="w-full flex justify-center my-5">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 transition-all duration-500 underline ease"
            >
              Load More Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
