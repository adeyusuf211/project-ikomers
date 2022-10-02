import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <div className="w-full h-full lg:px-[100px] px-5 py-10">
        <div className="flex justify-between">
          <h3 className="font-semibold text-gray-600 mb-5">Popular Product</h3>
          <Link href="/product">
            <a className="font-normal text-base text-blue-500 underline">
              See another product
            </a>
          </Link>
        </div>
        <div className="flex gap-5 overflow-y-auto no-scrollbar">
          <div className="block border border-gray-300 min-w-fit w-80 h-full cursor-pointer">
            <div className="w-full relative">
              <img
                src="../images/furniture1.jpg"
                alt="furniture"
                className="object-cover object-center h-96 w-full"
              />
              <button className="absolute px-3 py-2 top-3 left-3 bg-red-500 text-white rounded-md">
                Furniture
              </button>
              <div className="w-[40%] p-3 absolute bottom-0 right-0 bg-blue-400 text-white flex justify-center">
                Popular
              </div>
            </div>
            <div className="w-full p-3">
              <h3 className="text-base font-semibold text-gray-600 mb-3">
                The best product in the world
              </h3>
              <div className="flex justify-between">
                <h5 className="font-normal">Rp. 500.000</h5>
                <h5 className="font-normal text-red-500">Stok: 500</h5>
              </div>
            </div>
          </div>
          <div className="block border border-gray-300 min-w-fit w-80 h-full cursor-pointer">
            <div className="w-full relative">
              <img
                src="../images/furniture1.jpg"
                alt="furniture"
                className="object-cover object-center h-96 w-full"
              />
              <button className="absolute px-3 py-2 top-3 left-3 bg-red-500 text-white rounded-md">
                Furniture
              </button>
              <div className="w-[40%] p-3 absolute bottom-0 right-0 bg-blue-400 text-white flex justify-center">
                Popular
              </div>
            </div>
            <div className="w-full p-3">
              <h3 className="text-base font-semibold text-gray-600 mb-3">
                The best product in the world
              </h3>
              <div className="flex justify-between">
                <h5 className="font-normal">Rp. 500.000</h5>
                <h5 className="font-normal text-red-500">Stok: 500</h5>
              </div>
            </div>
          </div>
          <div className="block border border-gray-300 min-w-fit w-80 h-full cursor-pointer">
            <div className="w-full relative">
              <img
                src="../images/furniture1.jpg"
                alt="furniture"
                className="object-cover object-center h-96 w-full"
              />
              <button className="absolute px-3 py-2 top-3 left-3 bg-red-500 text-white rounded-md">
                Furniture
              </button>
              <div className="w-[40%] p-3 absolute bottom-0 right-0 bg-blue-400 text-white flex justify-center">
                Popular
              </div>
            </div>
            <div className="w-full p-3">
              <h3 className="text-base font-semibold text-gray-600 mb-3">
                The best product in the world
              </h3>
              <div className="flex justify-between">
                <h5 className="font-normal">Rp. 500.000</h5>
                <h5 className="font-normal text-red-500">Stok: 500</h5>
              </div>
            </div>
          </div>
          <div className="block border border-gray-300 min-w-fit w-80 h-full cursor-pointer">
            <div className="w-full relative">
              <img
                src="../images/furniture1.jpg"
                alt="furniture"
                className="object-cover object-center h-96 w-full"
              />
              <button className="absolute px-3 py-2 top-3 left-3 bg-red-500 text-white rounded-md">
                Furniture
              </button>
              <div className="w-[40%] p-3 absolute bottom-0 right-0 bg-blue-400 text-white flex justify-center">
                Popular
              </div>
            </div>
            <div className="w-full p-3">
              <h3 className="text-base font-semibold text-gray-600 mb-3">
                The best product in the world
              </h3>
              <div className="flex justify-between">
                <h5 className="font-normal">Rp. 500.000</h5>
                <h5 className="font-normal text-red-500">Stok: 500</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full lg:px-[100px] px-5">
        <img
          src="../images/banner.jpg"
          alt="gambar"
          className="object-cover object-center"
        />
      </div>
      <div className="w-full h-full lg:px-[100px] px-5 py-10">
        <h3 className="font-semibold text-gray-600 mb-5 text-2xl lg:text-base">
          Our latest article
        </h3>
        <div className="flex flex-col my-5 cursor-pointer">
          <div className="flex lg:flex-row flex-col gap-5">
            <img
              src="../images/technology.jpg"
              alt="fashion"
              className="lg:w-32 w-full lg:h-32 h-full flex object-cover object-center"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-2xl lg:text-5xl text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
                sapiente.
              </h3>
              <div className="flex gap-5 w-full mt-3">
                <h3 className="font-normal text-red-500 lg:text-base text-lg">
                  September 12, 2022
                </h3>
                <h3 className="font-normal text-blue-500 lg:text-base text-lg">
                  2000 Views
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-5 cursor-pointer">
          <div className="flex lg:flex-row flex-col gap-5">
            <img
              src="../images/design.jpg"
              alt="fashion"
              className="lg:w-32 lg:h-32 w-full h-full flex object-cover object-center"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-2xl lg:text-5xl text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                quaerat quidem fugiat. Voluptate!
              </h3>
              <div className="flex gap-5 w-full mt-3">
                <h3 className="font-normal text-red-500 lg:text-base text-lg">
                  September 12, 2022
                </h3>
                <h3 className="font-normal text-blue-500 lg:text-base text-lg">
                  2000 Views
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-5 cursor-pointer">
          <div className="flex lg:flex-row flex-col gap-5">
            <img
              src="../images/fashion.jpg"
              alt="fashion"
              className="lg:w-32 w-full lg:h-32 h-full flex object-cover object-center"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold text-2xl lg:text-5xl text-gray-600">
                Lorem ipsum dolor sit amet.
              </h3>
              <div className="flex gap-5 w-full mt-3">
                <h3 className="font-normal text-red-500 lg:text-base text-lg">
                  September 12, 2022
                </h3>
                <h3 className="font-normal text-blue-500 lg:text-base text-lg">
                  2000 Views
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Link href="/blog">
          <button className="w-full p-3 outline-none border border-blue-500 rounded-md font-semibold text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-500 ease-in">
            Look another article
          </button>
        </Link>
      </div>
      <div className="w-full h-full lg:px-[100px] px-5 mb-5">
        <img
          src="../images/art.jpg"
          alt="gambar"
          className="object-cover object-center w-full h-60"
        />
      </div>
    </>
  );
};

function getStaticProps() {
  const url = fetch("https://ikomers-60db8-default-rtdb.firebaseio.com/", {
    method: "POST",
    body: "gaktau",
  });
}

export default Homepage;
