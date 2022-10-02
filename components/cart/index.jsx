import { useState } from "react";
import Link from "next/link";

const Cart = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="w-full h-full lg:px-[100px] px-5 py-5 bg-gray-100">
      <div className="relative shadow-md sm:rounded-lg w-full lg:px-5 py-5 px-2 bg-white">
        <div className="flex justify-between items-center pb-4 px-3 lg:px-0 lg:gap-0 gap-2">
          <div>
            <button
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
              type="button"
              onClick={() => setDropdown(!dropdown)}
            >
              <span className="sr-only">Action button</span>
              Action
              <svg
                className="ml-2 w-3 h-3"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {dropdown == true ? (
              <div
                id="dropdownAction"
                className="z-10 w-44 bg-white absolute mt-3 rounded divide-y divide-gray-100 shadow"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom"
              >
                <ul
                  className="py-1 text-sm text-gray-700"
                  aria-labelledby="dropdownActionButton"
                >
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                      Newest Product
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                      Ready Stock
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-darkreader-inline-fill=""
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none w-full lg:w-fit"
              placeholder="Search for users"
            />
          </div>
        </div>
        <div className="w-full h-full p-3 block">
          <div className="relative mb-5">
            <div className="flex gap-5 items-center">
              <input type="checkbox" />
              <div className="flex gap-3">
                <img
                  src="../../images/furniture1.jpg"
                  alt="gambar"
                  className="w-20 h-20 object-cover object-center"
                />
                <div className="block">
                  <h3 className="font-bold text-gray-700 lg:text-lg text-sm">
                    The Best Product in the World
                  </h3>
                  <span className="font-medium text-gray-500">
                    Color: White
                  </span>
                  <h3 className="font-medium text-gray-600">Rp.300.000</h3>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-10 lg:mt-0 mt-3">
              <img
                src="../../images/icons/delete.svg"
                alt="gambar"
                className="cursor-pointer"
              />
              <div className="flex gap-5 items-center">
                <button className="w-8 h-8 rounded-full border border-gray-600 flex justify-center items-center transition-all duration-300 ease-in hover:bg-gray-600 hover:text-white">
                  -
                </button>
                <span className="font-medium text-gray-800">1</span>
                <button className="w-8 h-8 rounded-full border border-gray-600 flex justify-center items-center transition-all duration-300 ease-in hover:bg-gray-600 hover:text-white">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="relative mb-5">
            <div className="flex gap-5 items-center">
              <input type="checkbox" />
              <div className="flex gap-3">
                <img
                  src="../../images/furniture2.jpg"
                  alt="gambar"
                  className="w-20 h-20 object-cover object-center"
                />
                <div className="block">
                  <h3 className="font-bold text-gray-700 lg:text-lg text-sm">
                    The Best Product in the Universe
                  </h3>
                  <span className="font-medium text-gray-500">
                    Color: White
                  </span>
                  <h3 className="font-medium text-gray-600">Rp.300.000</h3>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-10 lg:mt-0 mt-3">
              <img
                src="../../images/icons/delete.svg"
                alt="gambar"
                className="cursor-pointer"
              />
              <div className="flex gap-5 items-center">
                <button className="w-8 h-8 rounded-full border border-gray-600 flex justify-center items-center transition-all duration-300 ease-in hover:bg-gray-600 hover:text-white">
                  -
                </button>
                <span className="font-medium text-gray-800">1</span>
                <button className="w-8 h-8 rounded-full border border-gray-600 flex justify-center items-center transition-all duration-300 ease-in hover:bg-gray-600 hover:text-white">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-4 flex gap-3 justify-end">
          <Link href="/">
            <button className="outline-none lg:py-2 py-1 lg:px-4 px-3 rounded-lg border border-red-400 hover:bg-red-400 hover:text-white w-full lg:w-fit text-red-400 transition-all duration-300 ease-linear">
              Back
            </button>
          </Link>
          <Link href="/checkout">
            <button className="outline-none lg:py-2 py-1 lg:px-4 px-3 rounded-lg border-red-400 bg-red-400 text-white w-full lg:w-fit">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
