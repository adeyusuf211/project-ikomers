import OrderNav from "../../navbar/ordernav";
import SideNav from "../../navbar/sidenav";

const NotPaid = () => {
  return (
    <>
      <div className="w-full h-full py-5 px-5 lg:px-[150px] bg-gray-100">
        <div className="block">
          <div className="flex gap-3 p-5 items-center bg-white mb-5">
            <img
              src="../../images/design.webp"
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
              <OrderNav />
              <div className="block my-5">
                <h3 className="font-semibold text-gray-800">Not Paid</h3>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quod, eveniet.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="block">
                  <div className="flex items-center gap-3">
                    <span className="px-2 bg-red-500 text-white font-normal text-sm">
                      star
                    </span>
                    <h3 className="text-gray-800 font-medium text-sm lg:text-md">
                      campuranstore
                    </h3>
                    <span className="ml-auto text-sm text-blue-600">
                      Shipping Proccess
                    </span>
                  </div>
                  <hr className="my-3 w-full border border-gray-300" />
                  <div className="flex lg:flex-row flex-col gap-5">
                    <img
                      src="../../../images/furniture1.webp"
                      alt="gambar"
                      className="lg:w-24 w-full lg:h-24 h-full object-cover object-center"
                    />
                    <div className="flex flex-col">
                      <h3 className="font-normal text-2xl text-gray-800">
                        Lorem ipsum dolor sit amet.
                      </h3>
                      <h4 className="text-gray-500">Varint: large</h4>
                      <span className="text-gray-600">1pcs</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 ml-auto">
                      Rp.300.000
                    </h3>
                  </div>
                  <hr className="my-3 w-full border border-gray-300" />
                  <div className="w-full flex justify-end">
                    <h3 className="text-md font-semibold text-gray-800">
                      Total Order: Rp.325.000
                    </h3>
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

export default NotPaid;
