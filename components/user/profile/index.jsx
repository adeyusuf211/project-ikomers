import ProfileNav from "../../navbar/profilenav";
import SideNav from "../../navbar/sidenav";
import Button from '../../button';

const User = () => {
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
                <h3 className="font-semibold text-gray-800">My Profile</h3>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quod, eveniet.
                </p>
              </div>
              <div className="relative">
                <div className="flex lg:flex-row flex-col-reverse gap-5 my-5">
                  <div className="block w-full">
                    <div className="flex my-2">
                      <h4 className="font-medium text-gray-600 w-[40%] lg:w-[30%]">
                        Username:
                      </h4>
                      <h3 className="font-semibold text-gray-800">johndoe</h3>
                    </div>
                    <div className="flex my-2">
                      <h4 className="font-medium text-gray-600 w-[40%] lg:w-[30%]">
                        Full Name:
                      </h4>
                      <h3 className="font-semibold text-gray-800">John Doe</h3>
                    </div>
                    <div className="flex my-2">
                      <h4 className="font-medium text-gray-600 w-[40%] lg:w-[30%]">
                        Email:
                      </h4>
                      <h3 className="font-semibold text-gray-800">
                        jo******@gmail.com
                      </h3>
                    </div>
                    <div className="flex my-2">
                      <h4 className="font-medium text-gray-600 w-[40%] lg:w-[30%]">
                        Telp:
                      </h4>
                      <h3 className="font-semibold text-gray-800">
                        **********393
                      </h3>
                    </div>
                    <div className="flex my-2">
                      <h4 className="font-medium text-gray-600 w-[40%] lg:w-[30%]">
                        Gender:
                      </h4>
                      <h3 className="font-semibold text-gray-800">Man</h3>
                    </div>
                    <div className="flex my-2">
                      <h4 className="font-medium text-gray-600 w-[40%] lg:w-[30%]">
                        Birth Date:
                      </h4>
                      <h3 className="font-semibold text-gray-800">
                        01/02/1987
                      </h3>
                    </div>
                    <div className="flex my-2">
                      <h4 className="font-medium text-gray-600 w-[40%] lg:w-[30%]"></h4>
                      <Button
                        title="Save"
                        bgColor="bg-red-500"
                        shadow="shadow-red-300"
                        textColor="text-white"
                        link=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-full lg:w-[30%] gap-5">
                    <img
                      src="../../images/design.webp"
                      alt="gambar"
                      className="w-40 h-40 rounded-full object-cover object-center"
                    />
                    <button
                      type="button"
                      className="py-2 px-4 border border-gray-700"
                    >
                      Select Image
                    </button>
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

export default User;
