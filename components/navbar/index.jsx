import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full h-[100px] lg:px-[100px] px-10 flex items-center bg-blue-50 justify-between relative">
      <Link href="/">
        <h3 className="font-bold text-2xl text-gray-700">ikomers</h3>
      </Link>
      <ul className="hidden lg:flex gap-5 lg:relative fixed bottom-0 right-0">
        <li>
          <Link href="/">
            <a
              className={
                router.asPath == "/"
                  ? "text-gray-600 hover:text-gray-600 transition-all ease-in duration-300 "
                  : "text-gray-400 hover:text-gray-600 transition-all ease-in duration-300 "
              }
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a
              className={
                router.asPath == "/product"
                  ? "text-gray-600 hover:text-gray-600 transition-all ease-in duration-300 "
                  : "text-gray-400 hover:text-gray-600 transition-all ease-in duration-300 "
              }
            >
              Product
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a
              className={
                router.asPath == "/blog"
                  ? "text-gray-600 hover:text-gray-600 transition-all ease-in duration-300 "
                  : "text-gray-400 hover:text-gray-600 transition-all ease-in duration-300 "
              }
            >
              Blog
            </a>
          </Link>
        </li>
      </ul>
      <ul className="flex lg:gap-5 gap-10">
        <li className="cursor-pointer">
          <img src="../images/icons/search.svg" alt="person" />
        </li>
        <Link href="/cart">
          <li className="cursor-pointer">
            <img src="../images/icons/shopping-bag.svg" alt="person" />
          </li>
        </Link>
        <li className="cursor-pointer relative">
          <img
            src="../images/icons/person.svg"
            alt="person"
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu == true ? (
            <div
              className="flex flex-col absolute right-0 top-full w-[200px] p-3 bg-white z-10 rounded-md shadow-lg border border-gray-300 transition-all duration-500 ease-in mt-3"
              id="menu"
            >
              <Link href="/auth">
                <a className="ml-3 mt-1 cursor-pointer">Login</a>
              </Link>
              <Link href="/auth/register">
                <a className="ml-3 mt-1 cursor-pointer">Register</a>
              </Link>
              <Link href="/user">
                <a className="ml-3 mt-1 cursor-pointer">My Account</a>
              </Link>
            </div>
          ) : (
            ""
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
