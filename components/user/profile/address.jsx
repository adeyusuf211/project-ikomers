import ProfileNav from "../../navbar/profilenav"
import SideNav from "../../navbar/sidenav"

const Address = () => {
    return (
      <>
        <div className="w-full h-full py-5 px-5 lg:px-[150px] bg-gray-100">
          <div className="block">
            <div className="flex gap-3 p-5 items-center bg-white mb-5">
              <img
                src="../../images/design.webp"
                alt="gambar"
                className="w=16 h-16 rounded-full object-cover object-center"
              />
              <div className="block">
                <h1 className="font-semibold text-xl text-gray-800">
                  John Doe
                </h1>
                <h3 className="font-medium text-gray-500 text-sm">
                  Classic Member
                </h3>
              </div>
            </div>
            <div className="w-full h-full flex lg:flex-row flex-col gap-3 my-3">
              <SideNav />
              <div className="bg-white p-5 w-full h-full block">
                <ProfileNav />
                <div className="block my-5">
                  <div className="block">
                    <h3 className="font-semibold text-gray-800">My Address</h3>
                    <p className="text-gray-500 text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quod, eveniet.
                    </p>
                  </div>
                </div>
                <div className="block my-7">
                  <div className="flex flex-col gap-1 my-3">
                    <div className="flex lg:flex-row flex-col gap-2 lg:gap-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-sm lg:text-md text-gray-800">
                          John Doe
                        </h3>{" "}
                        <a
                          href="#"
                          className="text-blue-500 underline ml-auto text-sm lg:hidden block"
                        >
                          change
                        </a>
                      </div>
                      <span className="lg:block hidden">|</span>
                      <span className="text-gray-500 font-medium">
                        (+62) 123 4567 8900
                      </span>{" "}
                      <span className="lg:block hidden">|</span>
                      <button className="px-3 lg:py-0 py-1 border border-red-500 text-red-500 text-sm">
                        main address
                      </button>
                      <a
                        href="#"
                        className="text-blue-500 underline ml-auto text-sm lg:block hidden"
                      >
                        change
                      </a>
                    </div>
                    <h4 className="font-base text-md text-gray-500 lg:mt-0 mt-3">
                      Jl. Haha, Desa Hehe, Kecamatan Huhu, Kabupaten Hoho,
                      Provinsi Hihi, Wakanda. 66666
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Address;