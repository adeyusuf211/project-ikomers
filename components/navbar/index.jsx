import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

    const [showMenu, setShowMenu]   = useState(false);

    return (
      <div className="flex justify-between items-center lg:px-[150px] px-10 py-10 relative">
        <h3 className="font-semibold uppercase">ikomers</h3>
        <ul className="flex gap-10 lg:relative fixed bottom-0 right-0 w-full text-gray-600 justify-center items-center lg:bg-none bg-white lg:py-0 py-5 z-[9999999999999999]">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
        <ul className="flex gap-5">
          <li className="cursor-pointer">
            <img src="../images/icons/search.svg" alt="gambar" />
          </li>
          <li className="cursor-pointer">
            <img 
              src="../images/icons/cart.svg" 
              alt="gambar" 
            />
          </li>
          <li className="cursor-pointer relative">
            <img
              src="../images/icons/user.svg"
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
}

export default Navbar;