import Link from "next/link";
import { useRouter } from "next/router";

const Password = () => {
    const router = useRouter();

    return (
      <>
        <div className="w-full h-full py-5 px-5 lg:px-[150px] bg-gray-100">
          <div className="block">
            <div className="flex gap-3 p-5 items-center bg-white mb-5">
              <img
                src="../images/design.jpg"
                alt="gambar"
                className="w=16 h-16 rounded-full object-cover object-center"
              />
              <div className="block">
                <h1 className="font-semibold text-xl text-gray-800">
                  John Doe
                </h1>
                <h3 className="font-medium text-gray-500 text-sm">
                  Classic Member
                </h3>
              </div>
            </div>
            <div className="w-full h-full flex lg:flex-row flex-col gap-3 my-3">
              <div className="bg-white p-5 block lg:w-[30%] w-full h-full">
                <h3 className="font-semibold text-gray-800 my-2">My Account</h3>
                <h3 className="font-semibold text-gray-800 my-2">My Order</h3>
                <h3 className="font-semibold text-gray-800 my-2">
                  Notification
                </h3>
                <h3 className="font-semibold text-gray-800 my-2">My Voucher</h3>
              </div>
              <div className="bg-white p-5 w-full h-full block">
                <div className="flex gap-3 lg:overflow-x-hidden overflow-x-auto hidden-scrollbar">
                  <Link href="/user">
                    <div
                      className={`py-2 mr-10 ${
                        router.asPath == "/user"
                          ? "border-b-2 border-blue-600"
                          : ""
                      } cursor-pointer`}
                    >
                      <h3
                        className={`font-semibold text-md ${
                          router.asPath == "/user"
                            ? "text-blue-600"
                            : "text-gray-500"
                        }`}
                      >
                        Profile
                      </h3>
                    </div>
                  </Link>
                  <Link href="/user/payment">
                    <div
                      className={`py-2 mr-10 ${
                        router.asPath == "/user/payment"
                          ? "border-b-2 border-blue-600"
                          : ""
                      } cursor-pointer`}
                    >
                      <h3
                        className={`font-semibold text-md ${
                          router.asPath == "/user/payment"
                            ? "text-blue-500"
                            : "text-gray-500"
                        }  cursor-pointer`}
                      >
                        Payment
                      </h3>
                    </div>
                  </Link>
                  <Link href="/user/address">
                    <div
                      className={`py-2 mr-10 ${
                        router.asPath == "/user/address"
                          ? "border-b-2 border-blue-600"
                          : ""
                      } cursor-pointer`}
                    >
                      <h3
                        className={`font-semibold text-md ${
                          router.asPath == "/user/address"
                            ? "text-blue-500"
                            : "text-gray-500"
                        }  cursor-pointer`}
                      >
                        Address
                      </h3>
                    </div>
                  </Link>
                  <Link href="/user/password">
                    <div
                      className={`py-2 mr-10 ${
                        router.asPath == "/user/password"
                          ? "border-b-2 border-blue-600"
                          : ""
                      } cursor-pointer`}
                    >
                      <h3
                        className={`font-semibold text-md ${
                          router.asPath == "/user/password"
                            ? "text-blue-500"
                            : "text-gray-500"
                        }  cursor-pointer`}
                      >
                        Password
                      </h3>
                    </div>
                  </Link>
                </div>
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
                    <button className="bg-red-500 px-4 py-2 text-white shadow-lg shadow-red-300 hover:shadow-none transition-all duration-300 ease-linear lg:mx-0 mx-auto">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Password