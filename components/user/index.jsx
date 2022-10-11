const User = () => {
  return (
    <>
      <div className="w-full h-full py-5 px-5 lg:px-[150px] bg-gray-100">
        <div className="block">
          <div className="flex gap-3 p-5 items-center bg-white mb-5">
            <img src="../images/design.jpg" alt="gambar" className="w=16 h-16 rounded-full object-cover object-center" />
            <div className="block">
              <h1 className="font-semibold text-xl text-gray-800">John Doe</h1>
              <h3 className="font-medium text-gray-500 text-sm">Classic Member</h3>
            </div>
          </div>
          <div className="p-5 bg-white">
            <div className="block">
              <div className="flex gap overflow-y-uto">
                <div className="px-3 py-2 shrink-0 border-b border-gray-800">
                  <a className="font-semibold text-gray-800">Profile</a>
                </div>
                <div className="px-3 py-2 shrink-0">
                  <a className="font-medium text-gray-500">My Account</a>
                </div>
                <div className="px-3 py-2 shrink-0">
                  <a className="font-medium text-gray-500">Payment</a>
                </div>
              </div>
              <div className="my-10">
                <div className="block">
                  <img src="../images/design.jpg" alt="gambar" className="w-full h-full object-cover  object-center" />
                  <h3 className="font-bold text-2xl text-gray-800 mt-5 text-center">John Doe</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default User;
