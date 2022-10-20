import SideNav from "../../navbar/sidenav";
import VoucherNav from "../../navbar/vouchernav";

const Voucher = () => {
  return (
    <>
      <div className="w-full h-full py-5 px-5 lg:px-[150px] bg-gray-100">
        <div className="block">
          <div className="flex gap-3 p-5 items-center bg-white mb-5">
            <img
              src="../../images/design.jpg"
              alt="gambar"
              className="w=16 h-16 rounded-full object-cover object-center"
            />
            <div className="block">
              <h1 className="font-semibold text-xl text-gray-800">John Doe</h1>
              <h3 className="font-medium text-gray-500 text-sm">
                Classic Member
              </h3>
            </div>
          </div>
          <div className="w-full h-full flex lg:flex-row flex-col gap-3 my-3">
            <SideNav />
            <div className="bg-white p-5 w-full h-full block lg:mb-0 mb-10">
              <VoucherNav />
              <div className="block my-5">
                <h3 className="font-semibold text-gray-800">My Voucher</h3>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quod, eveniet.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="block">
                  <div className="flex border items-center border-gray-200 mb-3">
                    <img
                      src="../images/design.jpg"
                      alt="gambar"
                      className="w-32 h-32 object-cover object-center"
                    />
                    <div className="block px-5 py-3">
                      <h3 className="font-semibold text-lg text-gray-800">
                        Free Shipping
                      </h3>
                      <h4 className="font-normal text-sm text-red-600">
                        Expired date: 01/11/2022
                      </h4>
                      <div className="flex lg:flex-nowrap flex-wrap gap-1 mt-2">
                        <button className="px-1 border border-red-800 text-red-800 text-sm font-normal hover:text-white hover:bg-red-800 transition-all duration-300 ease-in">
                          COD
                        </button>
                        <button className="px-1 border border-red-800 text-red-800 text-sm font-normal hover:text-white hover:bg-red-800 transition-all duration-300 ease-in">
                          Ewallet
                        </button>
                        <button className="px-1 border border-red-800 text-red-800 text-sm font-normal hover:text-white hover:bg-red-800 transition-all duration-300 ease-in">
                          Transfer Bank
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex border items-center border-gray-200 mb-3">
                    <img
                      src="../images/art.jpg"
                      alt="gambar"
                      className="w-32 h-32 object-cover object-center"
                    />
                    <div className="block px-5 py-3">
                      <h3 className="font-semibold text-lg text-gray-800">
                        50% Discount
                      </h3>
                      <h4 className="font-normal text-sm text-red-600">
                        Expired date: 01/11/2022
                      </h4>
                      <div className="flex lg:flex-nowrap flex-wrap gap-1 mt-2">
                        <button className="px-1 border border-red-800 text-red-800 text-sm font-normal hover:text-white hover:bg-red-800 transition-all duration-300 ease-in">
                          Transfer Bank
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex border items-center border-gray-200 mb-3">
                    <img
                      src="../images/technology.jpg"
                      alt="gambar"
                      className="w-32 h-32 object-cover object-center"
                    />
                    <div className="block px-5 py-3">
                      <h3 className="font-semibold text-lg text-gray-800">
                        Cashback up to 70%
                      </h3>
                      <h4 className="font-normal text-sm text-red-600">
                        Expired date: 01/11/2022
                      </h4>
                      <div className="flex lg:flex-nowrap flex-wrap gap-1 mt-2">
                        <button className="px-1 border border-red-800 text-red-800 text-sm font-normal hover:text-white hover:bg-red-800 transition-all duration-300 ease-in">
                          Transfer Bank
                        </button>
                      </div>
                    </div>
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

export default Voucher;
