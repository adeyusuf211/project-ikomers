import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
    const router = useRouter();
    const [showMenu, setShowMenu]   = useState(false);

    return (
      <div className="flex justify-between items-center lg:px-[150px] px-10 py-10 relative">
        <Link href="/">
          <h3 className="font-semibold uppercase">ikomers</h3>
        </Link>
        <ul className="flex gap-10 lg:relative fixed bottom-0 right-0 w-full justify-center items-center lg:bg-none bg-white lg:py-0 py-5 z-[9999999999999999]">
          <li>
            <Link href="/">
              <a
                href="#"
                className={`${
                  router.asPath == "/"
                    ? "text-gray-800 font-semibold"
                    : "text-gray-600"
                }`}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <a
                href="#"
                className={`${
                  router.asPath == "/product"
                    ? "text-gray-800 font-semibold"
                    : "text-gray-600"
                }`}
              >
                Products
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a
                href="#"
                className={`${
                  router.asPath == "/blog"
                    ? "text-gray-800 font-semibold"
                    : "text-gray-600"
                }`}
              >
                Blogs
              </a>
            </Link>
          </li>
        </ul>
        <ul className="flex gap-5">
          <Link href="/cart">
            <img
              src={`${
                router.asPath == "/user/profile" ||
                router.asPath == "/user/profile/address" ||
                router.asPath == "/user/profile/payment" ||
                router.asPath == "/user/profile/password" ||
                router.asPath == "/user/order" ||
                router.asPath == "/user/order/notpaid" ||
                router.asPath == "/user/order/shipping" ||
                router.asPath == "/user/order/finished" ||
                router.asPath == "/user/order/cancelled"
                  ? "../../images/icons/user.svg"
                  : "../images/icons/user.svg"
              }`}
              alt="gambar"
            />
          </Link>
          <li className="cursor-pointer relative">
            <img
              src={`${
                router.asPath == "/user/profile" ||
                router.asPath == "/user/profile/address" ||
                router.asPath == "/user/profile/payment" ||
                router.asPath == "/user/profile/password" ||
                router.asPath == "/user/order" ||
                router.asPath == "/user/order/notpaid" ||
                router.asPath == "/user/order/shipping" ||
                router.asPath == "/user/order/finished" ||
                router.asPath == "/user/order/cancelled"
                  ? "../../images/icons/user.svg"
                  : "../images/icons/user.svg"
              }`}
              alt="gambar"
              onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu === true ? (
              <div className="flex flex-col absolute right-0 top-full w-[200px] p-3 bg-white z-10 rounded-md shadow-lg border border-gray-300 transition-all duration-500 ease-in mt-3">
                <Link href="/auth">
                  <a className="ml-3 mt-1 cursor-pointer">Login</a>
                </Link>
                <Link href="/auth/register">
                  <a className="ml-3 mt-1 cursor-pointer">Register</a>
                </Link>
                <Link href="/user/profile">
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
}

export default Navbar;