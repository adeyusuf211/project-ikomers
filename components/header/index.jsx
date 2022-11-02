import Link from "next/link";
import Button from "../button";

const Header = () => {
    return (
      <div className="lg:px-[150px] px-10 py-10 flex lg:flex-row flex-col-reverse justify-start gap-10">
        <img
          src="../images/main-banner.svg"
          alt="banner"
          className="lg:h-96 h-fit w-fit"
        />
        <div className="block">
          <h3 className="font-extrabold text-3xl lg:text-7xl text-gray-700">
            SPEND <br />
            YOUR MONEY <br />
            HERE
          </h3>
          <div className="flex gap-5 items-center mt-5">
            <Button
              title="Shop Now"
              bgColor="bg-red-500"
              shadow="shadow-red-300"
              textColor="text-white"
              link="/product"
            />
            <Link href="/blog">
              <a href="#" className="text-blue-600 underline">
                Read Blogs
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Header;