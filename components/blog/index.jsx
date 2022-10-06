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
        <div className="flex lg:overflow-y-hidden overflow-y-auto gap-3 my-5">
          <div className="w-40 h-40">
            <img src="../images/design.jpg" alt="gambar" className="object-cover object-center" />
          </div>
          <div className="w-40 h-40">
            <img src="../images/design.jpg" alt="gambar" className="object-cover object-center" />
          </div>
          <div className="w-40 h-40">
            <img src="../images/design.jpg" alt="gambar" className="object-cover object-center" />
          </div>
        </div>
        <div className="block lg:mb-0 mb-20">
          <h3 className="font-semibold text-lg text-gray-800 my-3">Article For You</h3>
          <div className="flex gap-3 bg-white p-3 my-3">
            <img src="../images/design.jpg" alt="gambar" className="w-20 h-20 object-cover object-center" />
            <div className="bloc">
              <h3 className="font-bold text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <span className="text-sm font-medium text-gray-500 mt-2">Art and Design | 3 Weeks Ago</span>
            </div>
          </div>
          <div className="flex gap-3 bg-white p-3 my-3">
            <img src="../images/art.jpg" alt="gambar" className="w-20 h-20 object-cover object-center" />
            <div className="bloc">
              <h3 className="font-bold text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <span className="text-sm font-medium text-gray-500 mt-2">Political | 2 Days Ago</span>
            </div>
          </div>
          <div className="flex gap-3 bg-white p-3 my-3">
            <img src="../images/technology.jpg" alt="gambar" className="w-20 h-20 object-cover object-center" />
            <div className="bloc">
              <h3 className="font-bold text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <span className="text-sm font-medium text-gray-500 mt-2">Political | 2 Month Ago</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Blog;
