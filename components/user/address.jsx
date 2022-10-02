import { useState } from "react";

const Address = () => {
  const [address, setAddress] = useState(false);

  return (
    <>
      <div className="w-full p-5 bg-green-600 rounded-lg block">
        <h3 className="text-white">John Doe</h3>
        <h5 className="text-green-200">(+90) 34492927492</h5>
        <h3 className="text-green-200 text-sm mb-5">
          JL. Hahahihihuhuhehehoho No. 83929298292, Kec. Santuy Kabupaten Anjay,
          Negara Wkwkland.
        </h3>
        <a
          className="text-green-200 hover:text-white hover:underline cursor-pointer"
          onClick={() => setAddress(true)}
        >
          Change Address
        </a>
      </div>
      {address === true ? (
        <div
          className="w-screen h-screen bg-gray-700 fixed top-0 left-0 flex flex-col justify-center items-center px-5"
          id="modal"
        >
          <span
            className="text-2xl font-bold text-white absolute top-10 right-5 lg:right-16 cursor-pointer"
            onClick={() => setAddress(false)}
          >
            X
          </span>
          <div className="bg-white p-5 lg:p-10 rounded-lg block w-full lg:w-[50vw] shadow-xl shadow-gray-800">
            <h3 className="font-semibold text-2xl text-gray-700 text-center mb-5">
              Change Address
            </h3>
            <div className="block my-3">
              <h3 className="font-medium">Your Name</h3>
              <input
                type="text"
                className="p-2 outline-none rounded-md w-full border border-gray-600 text-sm"
                placeholder="Your name"
              />
            </div>
            <div className="block my-3">
              <h3 className="font-medium">Full Address</h3>
              <textarea
                type="text"
                className="p-2 outline-none rounded-md w-full border border-gray-600 text-sm"
                placeholder="Full address"
              ></textarea>
            </div>
            <div className="block my-3">
              <h3 className="font-medium">Phone Number</h3>
              <input
                type="telp"
                className="p-2 outline-none rounded-md w-full border border-gray-600 text-sm"
                placeholder="Phone number"
              />
            </div>
            <div className="mt-10 w-full flex justify-center">
              <button className="bg-green-600 text-white font-medium rounded-md py-2 px-4 hover:bg-green-500 transition-all duration-200 ease-in">
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Address;
