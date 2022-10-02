import Link from "next/link";
import { useState } from "react";

const Checkout = () => {
  const [cod, setCod] = useState(false);
  const [bank, setBank] = useState(false);
  const [wallet, setWallet] = useState(false);

  return (
    <>
      <div className="w-full h-full py-3 lg:px-[100px] bg-gray-100">
        <div className="p-4 border border-gray-200 rounded-lg my-5 bg-white">
          <h3 className="font-semibold text-gray-500">Your Address</h3>
          <div className="flex lg:flex-row flex-col justify-between lg:gap-5 gap-1">
            <div className="w-[40%] mt-5">
              <h3 className="font-semibold text-gray-800">Ade Yusuf</h3>
              <h3 className="font-semibold text-gray-600">
                (+82) 292-9282-9102
              </h3>
            </div>
            <div className="mt-5">
              <h3 className="font-semibold text-gray-500" id="address">
                Kp. Hahahihihuhuhehehoho RT 1000 / RW 2000, Kecamatan Cuy,
                Kabupaten Yoi, Negara Wakanda.
              </h3>
            </div>
            <div className="mt-5 w-[10%]">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition-all duration-500 ease-in"
              >
                change
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg pt-3 bg-white">
          <h3 className="font-semibold text-gray-500">Your Order</h3>
          <div className="flex gap-3 my-5 items-center">
            <span className="bg-red-500 text-white rounded-md text-sm px-2 py-1">
              star
            </span>
            <span className="text-gray-600">yayasanstore</span>
          </div>
          <div className="block">
            <div className="flex lg:flex-row flex-col justify-center gap-3 items-center my-2 lg:justify-between">
              <div className="block lg:w-[40%] w-full">
                <h3 className="font-semibold text-gray-400">Product</h3>
                <div className="flex gap-3 items-center mt-3">
                  <img
                    src="../../images/fashion.jpg"
                    alt="gambar"
                    className="w-16 h-16"
                  />
                  <h3 className="font-base text-gray-400">
                    The best product in the moon
                  </h3>
                </div>
              </div>
              <div className="lg:block w-full lg:w-[20%] flex justify-between items-center">
                <h3 className="font-semibold text-gray-400">Price</h3>
                <div className="flex gap-3 items-center mt-0 lg:mt-3">
                  <h3 className="font-base text-gray-400">Rp.300.000</h3>
                </div>
              </div>
              <div className="lg:block w-full lg:w-[10%] flex justify-between items-center">
                <h3 className="font-semibold text-gray-400">Quantity</h3>
                <div className="flex gap-3 items-center mt-0 lg:mt-3">
                  <h3 className="font-base text-gray-400">1</h3>
                </div>
              </div>
              <div className="lg:block w-full lg:w-[20%] flex justify-between items-center">
                <h3 className="font-semibold text-gray-400">Subtotal</h3>
                <div className="flex gap-3 items-center mt-0 lg:mt-3">
                  <h3 className="font-base text-gray-400">Rp.300.000</h3>
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-gray-300 mt-5" />
          <div className="flex justify-between py-5">
            <h3 className="font-semibold text-gray-500">Total</h3>
            <h3 className="font-semibold text-gray-800">Rp.300.000</h3>
          </div>
        </div>
      </div>

      <div className="w-full h-full lg:px-[100px] pt-3 bg-gray-100">
        <div className="p-4 border border-gray-200 rounded-lg bg-white">
          <h3 className="font-semibold text-gray-500">Payment Method</h3>
          <div className="block">
            <div className="flex justify-between gap-5 mt-5">
              <div className="w-[20%]">
                <h3 className="font-medium text-gray-500">Select Payment:</h3>
              </div>
              <div className="w-full flex lg:flex-row flex-col gap-3">
                <button
                  className={
                    cod === true
                      ? `px-4 py-2 border border-blue-600 text-white bg-blue-600 rounded-md`
                      : `px-4 py-2 border border-blue-600 text-blue-600 rounded-md transition-all hover:bg-blue-600 hover:text-white duration-500 ease`
                  }
                  onClick={() => {
                    setCod(true);
                    setBank(false);
                    setWallet(false);
                  }}
                >
                  Cash On Devlivery
                </button>
                <button
                  className={
                    bank === true
                      ? `px-4 py-2 border border-blue-600 text-white bg-blue-600 rounded-md`
                      : `px-4 py-2 border border-blue-600 text-blue-600 rounded-md transition-all hover:bg-blue-600 hover:text-white duration-500 ease`
                  }
                  onClick={() => {
                    setBank(true);
                    setCod(false);
                    setWallet(false);
                  }}
                >
                  Transfer Bank
                </button>
                <button
                  className={
                    wallet === true
                      ? `px-4 py-2 border border-blue-600 text-white bg-blue-600 rounded-md`
                      : `px-4 py-2 border border-blue-600 text-blue-600 rounded-md transition-all hover:bg-blue-600 hover:text-white duration-500 ease`
                  }
                  onClick={() => {
                    setWallet(true);
                    setBank(false);
                    setCod(false);
                  }}
                >
                  E-wallet
                </button>
              </div>
            </div>
            {bank === true ? (
              <div className="flex justify-between gap-5 mt-5">
                <div className="w-[20%]">
                  <h3 className="font-medium text-gray-500">Select Option:</h3>
                </div>
                <div className="w-full block">
                  <div className="flex w-full gap-5 items-center mb-5">
                    <input type="radio" className="p-2" />
                    <img
                      src="../../images/furniture1.jpg"
                      className="w-10 h-8"
                    />
                    <label htmlFor="" className="font-medium text-gray-500">
                      Bank Punya Gw (BPG)
                    </label>
                  </div>
                  <div className="flex w-full gap-5 items-center mb-5">
                    <input type="radio" className="p-2" />
                    <img
                      src="../../images/furniture2.jpg"
                      className="w-10 h-8"
                    />
                    <label htmlFor="" className="font-medium text-gray-500">
                      Bank Ibu Saya (BIS)
                    </label>
                  </div>
                  <div className="flex w-full gap-5 items-center mb-5">
                    <input type="radio" className="p-2" />
                    <img
                      src="../../images/furniture3.jpg"
                      className="w-10 h-8"
                    />
                    <label htmlFor="" className="font-medium text-gray-500">
                      Bank Bapak Saya (BBS)
                    </label>
                  </div>
                  <div className="flex w-full gap-5 items-center mb-5">
                    <input type="radio" className="p-2" />
                    <img
                      src="../../images/furniture4.jpg"
                      className="w-10 h-8"
                    />
                    <label htmlFor="" className="font-medium text-gray-500">
                      Bank Adik Saya (BAS)
                    </label>
                  </div>
                  <div className="flex w-full gap-5 items-center mb-5">
                    <input type="radio" className="p-2" />
                    <img src="../../images/nature.jpg" className="w-10 h-8" />
                    <label htmlFor="" className="font-medium text-gray-500">
                      Bank Siapa Ya (BSY)
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {cod === true ? (
              <div className="flex justify-between gap-5 mt-5">
                <div className="w-[20%]">
                  <h3 className="font-medium text-gray-500">Select Option:</h3>
                </div>
                <div className="w-full block">
                  <h3 className="font-medium text-gray-500">
                    please make payment after the goods arrive
                  </h3>
                </div>
              </div>
            ) : (
              ""
            )}
            {wallet === true ? (
              <div className="flex justify-between gap-5 mt-5" id="eWallet">
                <div className="w-[20%]">
                  <h3 className="font-medium text-gray-500">Select Option:</h3>
                </div>
                <div className="w-full block">
                  <div className="flex w-full gap-5 items-center mb-5">
                    <input type="radio" className="p-2" />
                    <img
                      src="../../images/furniture1.jpg"
                      className="w-10 h-8"
                    />
                    <label htmlFor="" className="font-medium text-gray-500">
                      Dini
                    </label>
                  </div>
                  <div className="flex w-full gap-5 items-center mb-5">
                    <input type="radio" className="p-2" />
                    <img
                      src="../../images/furniture2.jpg"
                      className="w-10 h-8"
                    />
                    <label htmlFor="" className="font-medium text-gray-500">
                      LinkDoank
                    </label>
                  </div>
                  <div className="flex w-full gap-5 items-center mb-5">
                    <input type="radio" className="p-2" />
                    <img
                      src="../../images/furniture3.jpg"
                      className="w-10 h-8"
                    />
                    <label htmlFor="" className="font-medium text-gray-500">
                      HoPay
                    </label>
                  </div>
                  <div className="flex w-full gap-5 items-center mb-5">
                    <input type="radio" className="p-2" />
                    <img
                      src="../../images/furniture4.jpg"
                      className="w-10 h-8"
                    />
                    <label htmlFor="" className="font-medium text-gray-500">
                      OPO
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="w-full h-full lg:px-[100px] pt-3 bg-gray-100">
        <div className="p-4 border border-gray-200 rounded-lg bg-white">
          <h3 className="font-semibold text-gray-500">Shipping</h3>
          <div className="block">
            <div className="flex justify-between gap-5 mt-5">
              <div className="w-[20%]">
                <h3 className="font-medium text-gray-500">Select Shipping:</h3>
              </div>
              <div className="flex w-full justify-end gap-20">
                <div className="block">
                  <h3 className="font-medium text-gray-500">Regular</h3>
                  <small className="font-base text-gray-500">Rp.10.000</small>
                </div>
                <a className="text-blue-500 hover:text-blue-700 hover:underline transition-all duration-500 ease cursor-pointer">
                  Change
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full lg:px-[100px] pt-3 bg-gray-100">
        <div className="p-4 border border-gray-200 rounded-lg bg-white">
          <h3 className="font-semibold text-gray-500">Total</h3>
          <div className="block">
            <div className="block mt-5">
              <div className="w-full flex justify-between mb-5">
                <h3 className="font-medium text-gray-400">Goods:</h3>
                <h3 className="font-medium text-gray-500">
                  The Best Product In The Moon
                </h3>
              </div>
              <div className="w-full flex justify-between mb-5">
                <h3 className="font-medium text-gray-400">Quantity:</h3>
                <h3 className="font-medium text-gray-500">1pcs</h3>
              </div>
              <div className="w-full flex justify-between mb-5">
                <h3 className="font-medium text-gray-400">Price:</h3>
                <h3 className="font-medium text-gray-500">Rp.300.000</h3>
              </div>
              <div className="w-full flex justify-between mb-5">
                <h3 className="font-medium text-gray-400">Payment Method:</h3>
                <h3 className="font-medium text-gray-500">
                  Transfer Bank (BPG)
                </h3>
              </div>
              <div className="w-full flex justify-between mb-5">
                <h3 className="font-medium text-gray-400">Shipping:</h3>
                <h3 className="font-medium text-gray-500">Rp.10.000</h3>
              </div>
              <hr className="w-full border border-gray-300 mb-5" />
              <div className="w-full flex justify-between mb-5">
                <h3 className="font-medium text-gray-400">Total:</h3>
                <h3 className="font-medium text-gray-500">Rp.310.000</h3>
              </div>
              <div className="w-full flex justify-end gap-3">
                <Link href="/cart">
                  <button className="px-4 py-2 outline-none border border-red-500 text-red-500 cursor-pointer hover:bg-red-700 hover:text-white transition-all duration-500 ease-in">
                    Back To Cart
                  </button>
                </Link>
                <Link href="/order">
                  <button className="px-4 py-2 outline-none border-none bg-red-500 text-white cursor-pointer hover:bg-red-700 transition-all duration-500 ease-in">
                    Checkout Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
