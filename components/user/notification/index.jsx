import SideNav from "../../navbar/sidenav";

const Notification = () => {
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
              <div className="block my-5">
                <h3 className="font-semibold text-gray-800">Notification</h3>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quod, eveniet.
                </p>
              </div>
              <div className="block">
                <div className="flex gap-3 mb-3">
                  <img
                    src="../images/art.jpg"
                    alt="gambar"
                    className="lg:w-28 w-24 lg:h-28 h-24 object-cover object-center"
                  />
                  <div className="block">
                    <h3 className="font-semibold text-blue-600 text-lg">
                      Order Completed
                    </h3>
                    <h4 className="text-md font-medium text-sm text-gray-600">
                      Order{" "}
                      <span className="text-gray-800 font-semibold">
                        APA93829XKFA928
                      </span>{" "}
                      Has Been Receive By{" "}
                      <span className="text-gray-800 font-semibold">
                        John Doe.
                      </span>
                    </h4>
                    <h5 className="font-medium text-gray-500 text-md">
                      01-02-2022 15:30
                    </h5>
                  </div>
                </div>
                <div className="flex gap-3 mb-3">
                  <img
                    src="../images/design.jpg"
                    alt="gambar"
                    className="lg:w-28 w-24 lg:h-28 h-24 object-cover object-center"
                  />
                  <div className="block">
                    <h3 className="font-semibold text-red-600 text-lg">
                      Order Cancelled
                    </h3>
                    <h4 className="text-md font-medium text-sm text-gray-600">
                      Order{" "}
                      <span className="text-gray-800 font-semibold">
                        APA93829XKFA928
                      </span>{" "}
                      Has Been Cancelled By{" "}
                      <span className="text-gray-800 font-semibold">
                        Our System.
                      </span>
                    </h4>
                    <h5 className="font-medium text-gray-500 text-md">
                      01-02-2021 15:30
                    </h5>
                  </div>
                </div>
                <div className="flex gap-3 mb-3">
                  <img
                    src="../images/technology.jpg"
                    alt="gambar"
                    className="lg:w-28 w-24 lg:h-28 h-24 object-cover object-center"
                  />
                  <div className="block">
                    <h3 className="font-semibold text-orange-600 text-lg">
                      Waiting For Paid
                    </h3>
                    <h4 className="text-md font-medium text-sm text-gray-600">
                      Order{" "}
                      <span className="text-gray-800 font-semibold">
                        APA93829XKFA928
                      </span>{" "}
                      Waiting For Paid Until{" "}
                      <span className="text-gray-800 font-semibold">
                        01-02-2023 14:40.
                      </span>
                    </h4>
                    <h5 className="font-medium text-gray-500 text-md">
                      01-02-2023 15:30
                    </h5>
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

export default Notification;
