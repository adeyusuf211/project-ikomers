import Link from "next/link";

const Blog = () => {
  return (
    <>
      <div className="w-full h-full px-5 lg:px-[150px] py-5 bg-gray-100">
        <div className="flex justify-between gap-3 p-5 rounded-xl bg-white">
          <input type="text" className="w-full bg-transparent outline-none" placeholder="search article..." />
          <img src="../images/icons/search.svg" alt="gambar" />
        </div>
        <div className="flex gap-3 mt-6">
          <a href="#" className="font-medium text-gray-800">Popular</a>
          <a href="#" className="font-medium text-gray-400">Trending</a>
          <a href="#" className="font-medium text-gray-400">Recent</a>
        </div>
        <div className="flex lg:flex-wrap lg:justify-between lg:overflow-x-hidden overflow-x-auto gap-5 my-5 hidden-scrollbar">
          <div className="bg-white w-60 h-full shrink-0">
            <img src="../images/design.jpg" alt="gambar" className="object-cover object-center lg:w-full w-60 h-60 shrink-0" />
            <div className="block my-5 p-3">
              <span className="px-3 py-1 bg-gray-300 text-lg text-gray-800">
                Nature
              </span>
              <h3 className="font-medium mt-2 text-lg text-gray-80">Lorem ipsum dolor sit amet.</h3>
              <div className="flex items-center gap-3 my-3">
                <span className="w-10 h-10 flex justify-center items-center bg-blue-400 rounded-full">
                  <img src="../images/icons/user.svg" alt="gambar" />
                </span>
                <h3 className="font-medium text-lg text-gray-800">John Doe.</h3>
              </div>
            </div>
          </div>
          <div className="bg-white w-60 h-full shrink-0">
            <img src="../images/art.jpg" alt="gambar" className="object-cover object-center lg:w-full w-60 h-60 shrink-0" />
            <div className="block my-5 p-3">
              <span className="px-3 py-1 bg-gray-300 text-lg text-gray-800">
                Nature
              </span>
              <h3 className="font-medium mt-2 text-lg text-gray-80">Lorem ipsum dolor sit amet.</h3>
              <div className="flex items-center gap-3 my-3">
                <span className="w-10 h-10 flex justify-center items-center bg-blue-400 rounded-full">
                  <img src="../images/icons/user.svg" alt="gambar" />
                </span>
                <h3 className="font-medium text-lg text-gray-800">John Doe.</h3>
              </div>
            </div>
          </div>
          <div className="bg-white w-60 h-full shrink-0">
            <img src="../images/technology.jpg" alt="gambar" className="object-cover object-center lg:w-full w-60 h-60 shrink-0" />
            <div className="block my-5 p-3">
              <span className="px-3 py-1 bg-gray-300 text-lg text-gray-800">
                Nature
              </span>
              <h3 className="font-medium mt-2 text-lg text-gray-80">Lorem ipsum dolor sit amet.</h3>
              <div className="flex items-center gap-3 my-3">
                <span className="w-10 h-10 flex justify-center items-center bg-blue-400 rounded-full">
                  <img src="../images/icons/user.svg" alt="gambar" />
                </span>
                <h3 className="font-medium text-lg text-gray-800">John Doe.</h3>
              </div>
            </div>
          </div>
          <div className="bg-white w-60 h-full shrink-0">
            <img src="../images/nature.jpg" alt="gambar" className="object-cover object-center lg:w-full w-60 h-60 shrink-0" />
            <div className="block my-5 p-3">
              <span className="px-3 py-1 bg-gray-300 text-lg text-gray-800">
                Nature
              </span>
              <h3 className="font-medium mt-2 text-lg text-gray-80">Lorem ipsum dolor sit amet.</h3>
              <div className="flex items-center gap-3 my-3">
                <span className="w-10 h-10 flex justify-center items-center bg-blue-400 rounded-full">
                  <img src="../images/icons/user.svg" alt="gambar" />
                </span>
                <h3 className="font-medium text-lg text-gray-800">John Doe.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:mb-0 mb-20">
          <h3 className="font-semibold text-lg lg:text-2xl text-gray-800 my-3">Article For You</h3>
          <Link href="/blog/detail">
            <div className="flex gap-3 bg-white p-3 my-3">
              <img src="../images/design.jpg" alt="gambar" className="lg:w-40 lg:h-40 w-20 h-20 object-cover object-center" />
              <div className="block">
                <h3 className="font-bold text-gray-800 lg:text-4xl lg:mb-2">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                <span className="text-sm font-medium text-gray-500 mt-2 lg:text-2xl">Art | 3 Weeks Ago | John Doe</span>
              </div>
            </div>
          </Link>
          <Link href="/blog/detail">
            <div className="flex gap-3 bg-white p-3 my-3">
              <img src="../images/art.jpg" alt="gambar" className="lg:w-40 lg:h-40 w-20 h-20 object-cover object-center" />
              <div className="block">
                <h3 className="font-bold text-gray-800 lg:text-4xl lg:mb-2">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                <span className="text-sm font-medium text-gray-500 mt-2 lg:text-2xl">Political | 2 Days Ago | John Doe</span>
              </div>
            </div>
          </Link>
          <Link href="/blog/detail">
            <div className="flex gap-3 bg-white p-3 my-3">
              <img src="../images/technology.jpg" alt="gambar" className="lg:w-40 lg:h-40 w-20 h-20 object-cover object-center" />
              <div className="block">
                <h3 className="font-bold text-gray-800 lg:text-4xl lg:mb-2">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                <span className="text-sm font-medium text-gray-500 mt-2 lg:text-2xl">Political | 2 Month Ago | John Doe</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
};

export default Blog;
