import ProfileNav from "../../navbar/profilenav";
import SideNav from "../../navbar/sidenav";

const Payment = () => {
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
            <div className="bg-white p-5 w-full h-full block">
              <ProfileNav />
              <div className="block my-5">
                <h3 className="font-semibold text-gray-800">My Payment</h3>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quod, eveniet.
                </p>
              </div>
              <div className="block my-5">
                <div className="flex flex-col gap-5 my-3">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-700 text-md">
                      Bank
                    </h3>
                    <a href="#" className="text-blue-500 underline text-md">
                      Add Bank
                    </a>
                  </div>
                  <div className="my-2 flex gap-3">
                    <img
                      src="../../images/design.jpg"
                      alt="gambar"
                      className="lg:w-20 lg:h-20 w-14 h-14 object-cover object-center"
                    />
                    <div className="flex flex-col gap-0 lg:gap-1">
                      <h3 className="font-semibold text-sm lg:text-lg text-gray-600">
                        Bank Punya GW (BPG)
                      </h3>
                      <h5 className="font-normal text-sm lg:text-md text-gray-500">
                        Pemilik: *****Doe
                      </h5>
                      <h5 className="font-normal text-sm lg:text-md text-gray-500">
                        *******654
                      </h5>
                    </div>
                    <a href="#" className="ml-auto text-red-500 underline">
                      Delete
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-5 my-3">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-700 text-md">
                      Debit / Credit Card
                    </h3>
                    <a href="#" className="text-blue-500 underline text-md">
                      Add Card
                    </a>
                  </div>
                  <div className="my-2 flex gap-3">
                    <img
                      src="../../images/art.jpg"
                      alt="gambar"
                      className="lg:w-20 lg:h-20 w-14 h-14 object-cover object-center"
                    />
                    <div className="flex flex-col gap-0 lg:gap-1">
                      <h3 className="font-semibold text-sm lg:text-lg text-gray-600">
                        Visa
                      </h3>
                      <h5 className="font-normal text-sm lg:text-md text-gray-500">
                        Pemilik: *****Doe
                      </h5>
                      <h5 className="font-normal text-sm lg:text-md text-gray-500">
                        *********7549
                      </h5>
                    </div>
                    <a href="#" className="ml-auto text-red-500 underline">
                      Delete
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-5 my-3">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-700 text-md">
                      Ewallet
                    </h3>
                    <a href="#" className="text-blue-500 underline text-md">
                      Add Wallet
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <img
                      src="../../images/technology.jpg"
                      alt="gambar"
                      className="lg:w-20 lg:h-20 w-14 h-14 object-cover object-center"
                    />
                    <div className="flex flex-col gap-0 lg:gap-1">
                      <h3 className="font-semibold text-sm lg:text-lg text-gray-600">
                        Dani
                      </h3>
                      <h5 className="font-medium text-sm lg:text-md text-gray-500">
                        Pemilik: *****Doe
                      </h5>
                      <h5 className="font-medium text-sm lg:text-md text-gray-500">
                        ******7549
                      </h5>
                    </div>
                    <a href="#" className="ml-auto text-red-500 underline">
                      Delete
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <img
                      src="../../images/banner.jpg"
                      alt="gambar"
                      className="lg:w-20 lg:h-20 w-14 h-14 object-cover object-center"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold text-sm lg:text-lg text-gray-600">
                        LinkDoank
                      </h3>
                      <h5 className="font-medium text-sm lg:text-md text-gray-500">
                        Pemilik: *****Doe
                      </h5>
                      <h5 className="font-medium text-sm lg:text-md text-gray-500">
                        ******3452
                      </h5>
                    </div>
                    <a href="#" className="ml-auto text-red-500 underline">
                      Delete
                    </a>
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

export default Payment;