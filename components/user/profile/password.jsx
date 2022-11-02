import ProfileNav from "../../navbar/profilenav";
import SideNav from "../../navbar/sidenav";
import Button from "../../button";

const Password = () => {
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
            <div className="bg-white p-5 w-full h-full block">
              <ProfileNav />
              <div className="block my-5">
                <h3 className="font-semibold text-gray-800">My Password</h3>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quod, eveniet.
                </p>
              </div>
              <div className="block my-7">
                <div className="flex flex-col gap-1 my-3">
                  <div className="flex lg:flex-row flex-col items-start lg:items-center my-2">
                    <h3 className="font-medium text-md text-gray-800 w-full lg:w-[30%]">
                      Old Password
                    </h3>
                    <div className="border border-gray-700 p-2 w-full">
                      <input
                        type="password"
                        placeholder="old password"
                        className="outline-none border-none text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col items-start lg:items-center my-2">
                    <h3 className="font-medium text-md text-gray-800 w-full lg:w-[30%]">
                      New Password
                    </h3>
                    <div className="border border-gray-700 p-2 w-full">
                      <input
                        type="password"
                        placeholder="new password"
                        className="outline-none border-none text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col items-start lg:items-center my-2">
                    <h3 className="font-medium text-md text-gray-800 w-full lg:w-[30%]">
                      Repeat Password
                    </h3>
                    <div className="border border-gray-700 p-2 w-full">
                      <input
                        type="password"
                        placeholder="repeat password"
                        className="outline-none border-none text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex my-2">
                  <h3 className="font-medium text-sm text-gray-800 w-0 lg:w-[23%]"></h3>
                  <Button
                    title="Change Password"
                    bgColor="bg-red-500"
                    shadow="shadow-red-300"
                    textColor="text-white"
                    link="/product"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
