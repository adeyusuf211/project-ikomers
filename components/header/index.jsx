import Link from "next/link";

const Header = () => {
    return (
        <div className="lg:px-[150px] px-10 py-10 flex lg:flex-row flex-col-reverse justify-start gap-10">
            <img src="../images/main-banner.svg" alt="banner" className="lg:h-96 h-fit w-fit" />
            <div className="block">
                <h3 className="font-extrabold text-3xl lg:text-7xl text-gray-700">
                    SPEND <br />
                    YOUR MONEY <br />
                    HERE
                </h3>
                <div className="flex gap-5 items-center mt-5">
                    <Link href="/product">
                        <button className="px-5 py-2 rounded-xl bg-red-500 text-white font-semibold shadow-lg shadow-red-300 hover:shadow-sm transition-all duration-300 ease">Shop Now</button>
                    </Link>
                    <Link href="/blog">
                        <div className="flex items-center gap-2">
                            <img src="../images/icons/book.svg" alt="book" className="h-5" />
                            <a href="#" className="text-blue-600 underline">Read Blogs</a>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;