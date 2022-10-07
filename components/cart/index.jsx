const Cart = () => {
  return (
    <>
      <div className="w-full h-full bg-gray-100 py-5 px-5 lg:px-[150px] lg:mb-0 mb-20">
        <div className="block bg-white p-5 mb-5 ring-2 ring-red-500">
          <div className="flex gap-3 relative">
            <img src="../images/icons/cross.svg" alt="icons" className="absolute -top-7 -right-7 w-6 h-6" />
            <img
              src="../images/banner.jpg"
              alt="gambar"
              className="w-20 h-20 object-center object-cover"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl text-gray-800">
                Lorem ipsum dolor sit amet.
              </h3>
              <small className="text-gray-400 font-medium">
                1 pcs x Rp.300.000
              </small>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <h3 className="font-bold text-gray-800 text-xl">Rp.300.000</h3>
            <div className="flex gap-3 justify-center">
              <button className="w-6 h-6 flex justify-center items-center border border-gray-800">
                -
              </button>
              <h3 className="font-semibold text-xl text-gray-800">1</h3>
              <button className="w-6 h-6 flex justify-center items-center border border-gray-800">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="block bg-white p-5 mb-5">
          <div className="flex gap-3 relative">
            <img src="../images/icons/cross.svg" alt="icons" className="absolute -top-7 -right-7 w-6 h-6" />
            <img
              src="../images/art.jpg"
              alt="gambar"
              className="w-20 h-20 object-center object-cover"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl text-gray-800">
                Lorem ipsum dolor sit amet.
              </h3>
              <small className="text-gray-400 font-medium">
                1 pcs x Rp.500.000
              </small>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <h3 className="font-bold text-gray-800 text-xl">Rp.500.000</h3>
            <div className="flex gap-3 justify-center">
              <button className="w-6 h-6 flex justify-center items-center border border-gray-800">
                -
              </button>
              <h3 className="font-semibold text-xl text-gray-800">1</h3>
              <button className="w-6 h-6 flex justify-center items-center border border-gray-800">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="block bg-white p-5 mb-5">
          <div className="flex gap-3 relative">
            <img src="../images/icons/cross.svg" alt="icons" className="absolute -top-7 -right-7 w-6 h-6" />
            <img
              src="../images/design.jpg"
              alt="gambar"
              className="w-20 h-20 object-center object-cover"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl text-gray-800">
                Lorem ipsum dolor sit amet.
              </h3>
              <small className="text-gray-400 font-medium">
                1 pcs x Rp.600.000
              </small>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <h3 className="font-bold text-gray-800 text-xl">Rp.600.000</h3>
            <div className="flex gap-3 justify-center">
              <button className="w-6 h-6 flex justify-center items-center border border-gray-800">
                -
              </button>
              <h3 className="font-semibold text-xl text-gray-800">1</h3>
              <button className="w-6 h-6 flex justify-center items-center border border-gray-800">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white p-5">
          <h3 className="font-bold text-gray-800 text-xl">Rp.300.000</h3>
          <button className="px-4 py-2 font-medium bg-red-500 text-white text-xl">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
