import Link from "next/link";

const Blogs = () => {
  return (
    <>
      <div className="w-full h-full lg:px-[100px] px-5 py-10 flex lg:flex-row flex-col gap-5">
        <div className="flex flex-col lg:w-[70%] w-full">
          <Link href="/blog/detail">
            <div className="flex flex-col my-5 cursor-pointer">
              <div className="flex lg:flex-row flex-col gap-5">
                <img
                  src="../images/fashion.jpg"
                  alt="fashion"
                  className="lg:w-32 w-full lg:h-32 h-full flex object-cover object-center"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold lg:text-5xl text-3xl text-gray-600">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <div className="flex gap-5 w-full mt-3">
                    <h3 className="font-normal text-red-500">
                      September 12, 2022
                    </h3>
                    <h3 className="font-normal text-blue-500">2000 Views</h3>
                  </div>
                </div>
              </div>
              <p className="font-normal text-gray-500 my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                ipsum eligendi iure modi delectus consequuntur, odit
                voluptatibus commodi quam in maxime rem! Aspernatur fuga
                dolores, voluptate, dolor illum nisi odio quae omnis, eveniet
                autem quo aperiam dolore fugiat architecto nam.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex lg:gap-5 gap-3 w-[70%]">
                  <button className="border-none outline-none bg-none">
                    #fashion
                  </button>
                  <button className="border-none outline-none bg-none">
                    #style
                  </button>
                  <button className="border-none outline-none bg-none">
                    #people
                  </button>
                </div>
                <img
                  src="../images/technology.jpg"
                  alt="gambar"
                  className="w-10 h-10 rounded-full mr-5"
                />
              </div>
            </div>
          </Link>
          <Link href="/blog/detail">
            <div className="flex flex-col my-5 cursor-pointer">
              <div className="flex lg:flex-row flex-col gap-5">
                <img
                  src="../images/technology.jpg"
                  alt="fashion"
                  className="lg:w-32 w-full lg:h-32 h-full flex object-cover object-center"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold lg:text-5xl text-3xl text-gray-600">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <div className="flex gap-5 w-full mt-3">
                    <h3 className="font-normal text-red-500">
                      September 12, 2022
                    </h3>
                    <h3 className="font-normal text-blue-500">2000 Views</h3>
                  </div>
                </div>
              </div>
              <p className="font-normal text-gray-500 my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                ipsum eligendi iure modi delectus consequuntur, odit
                voluptatibus commodi quam in maxime rem! Aspernatur fuga
                dolores, voluptate, dolor illum nisi odio quae omnis, eveniet
                autem quo aperiam dolore fugiat architecto nam.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex lg:gap-5 gap-3 w-[70%]">
                  <button className="border-none outline-none bg-none">
                    #fashion
                  </button>
                  <button className="border-none outline-none bg-none">
                    #style
                  </button>
                  <button className="border-none outline-none bg-none">
                    #people
                  </button>
                </div>
                <img
                  src="../images/technology.jpg"
                  alt="gambar"
                  className="w-10 h-10 rounded-full mr-5"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col sticky top-10">
          <h3 className="font-semibold text-2xl text-gray-600 my-5">
            Recent Post
          </h3>
          <div className="flex flex-col my-5 cursor-pointer">
            <div className="flex gap-3">
              <img
                src="../images/design.jpg"
                alt="fashion"
                className="w-14 h-14 flex object-cover object-center"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-600">
                  Lorem ipsum dolor sit amet.
                </h3>
                <h3 className="font-normal text-red-500">September 12, 2022</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-5 cursor-pointer">
            <div className="flex gap-3">
              <img
                src="../images/fashion.jpg"
                alt="fashion"
                className="w-14 h-14 flex object-cover object-center"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-600">
                  Lorem ipsum dolor sit amet.
                </h3>
                <h3 className="font-normal text-red-500">September 12, 2022</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-5 cursor-pointer">
            <div className="flex gap-3">
              <img
                src="../images/furniture1.jpg"
                alt="fashion"
                className="w-14 h-14 flex object-cover object-center"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-600">
                  Lorem ipsum dolor sit amet.
                </h3>
                <h3 className="font-normal text-red-500">September 12, 2022</h3>
              </div>
            </div>
          </div>
          <h3 className="font-semibold text-2xl text-gray-600 my-5">
            Popular Tags
          </h3>
          <div className="flex gap-2 lg:gap-3 justify-between mb-3">
            <button className="border-none bg-none outline-none">
              #holiday
            </button>
            <button className="border-none bg-none outline-none">
              #politics
            </button>
            <button className="border-none bg-none outline-none">
              #brands
            </button>
          </div>
          <div className="flex gap-2 lg:gap-3 justify-between mb-3">
            <button className="border-none bg-none outline-none">
              #technology
            </button>
            <button className="border-none bg-none outline-none">#art</button>
            <button className="border-none bg-none outline-none">
              #science
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
