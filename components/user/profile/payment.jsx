import { useState } from "react";
import Button from "../../button";
import ProfileNav from "../../navbar/profilenav";
import SideNav from "../../navbar/sidenav";

const Payment = () => {

  const [bank, setBank] = useState(false);

  return (
    <>
      <div className="w-full h-full py-5 px-5 lg:px-[150px] bg-gray-100 relative">
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
                    <a
                      className="text-blue-500 underline text-md cursor-pointer"
                      onClick={() => setBank(!bank)}
                    >
                      Add Bank
                    </a>
                    <div
                      className={`${
                        bank ? "flex" : "hidden"
                      } justify-center items-center fixed top-0 left-0 w-full h-screen bg-gray-700 bg-opacity-80 overflow-y-auto z-[9999999999999999999]`}
                    >
                      <div className="flex flex-col gap-2 p-5 bg-white max-w-[50vw] w-full rounded-lg">
                        <span 
                          className="text-lg font-bold text-gray-800 hover:text-red-500 text-right cursor-pointer transition-all duration-500 ease-linear"
                          onClick={() => setBank(!bank)}
                        >
                            X
                        </span>
                        <h3 className="font-semibold text-gray-700 text-lg text-center mb-10">
                          Add a New Bank
                        </h3>
                        <div className="flex flex-col gap-1">
                          <label htmlFor="bank" className="font-semibold">
                            Select Bank
                          </label>
                          <select
                            name="bank"
                            id="bank"
                            className="p-2 border border-gray-600 outline-none w-full"
                          >
                            <option disabled className="p-2 outline-none">
                              -- Add a New Bank --
                            </option>
                            <option value="BPG" className="p-3 outline-none">
                              Bank Punya GW (BPG)
                            </option>
                            <option value="BPG" className="p-3 outline-none">
                              Bank Punya Orang (BPO)
                            </option>
                            <option value="BIS" className="p-3 outline-none">
                              Bank Ibu Saya (BIS)
                            </option>
                            <option value="BPS" className="p-3 outline-none">
                              Bank Bapak Saya (BPS)
                            </option>
                            <option value="BISA" className="p-3 outline-none">
                              Bank Istri Saya (BISA)
                            </option>
                            <option value="BSS" className="p-3 outline-none">
                              Bank Suami Saya (BSS)
                            </option>
                          </select>
                        </div>
                        <div className="my-3 gap-1 flex flex-col">
                          <label htmlFor="no" className="font-semibold">
                            No. Rekening
                          </label>
                          <div className="flex w-full gap-3">
                            <input
                              type="number"
                              className="outline-none border border-gray-600 px-2 focus:border focus:border-green-500 w-[78%]"
                            />
                            <Button
                              bgColor="bg-red-500"
                              textColor="text-white"
                              title="Add Bank"
                              link=""
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-3 w-full mt-10">
                          <small className="font-medium">
                            By continuing, you agree to the{" "}
                            <a className="text-blue-700 cursor-pointer">
                              Privacy Policy
                            </a>{" "}
                            and the applicable{" "}
                            <a className="text-blue-700 cursor-pointer">
                              Terms & Conditions.
                            </a>
                          </small>
                          <Button
                            bgColor="bg-blue-500"
                            textColor="text-white"
                            title="Save"
                            link=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-2 flex gap-3">
                    <img
                      src="../../images/design.webp"
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
                      src="../../images/art.webp"
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
                      src="../../images/technology.webp"
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
                      src="../../images/banner.webp"
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
