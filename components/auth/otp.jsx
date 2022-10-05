const Otp = () => {
  return (
    <div className="w-full h-full lg:flex lg:justify-center lg:items-center">
      <div className="p-5 block">
        <img src="../images/otp.svg" alt="login" />
        <div className="block my-10">
          <h3 className="font-bold text-gray-800 text-3xl">OTP</h3>
          <div className="block">
            <div className="flex my-5 gap-3">
              <input
                type="text"
                className="w-full text-gray-700 outline-none bg-transparent text-center border-b border-gray-600 font-bold text-3xl py-2"
                required
              />
              <input
                type="text"
                className="w-full text-gray-700 outline-none bg-transparent text-center border-b border-gray-600 font-bold text-3xl py-2"
                required
              />
              <input
                type="text"
                className="w-full text-gray-700 outline-none bg-transparent text-center border-b border-gray-600 font-bold text-3xl py-2"
                required
              />
              <input
                type="text"
                className="w-full text-gray-700 outline-none bg-transparent text-center border-b border-gray-600 font-bold text-3xl py-2"
                required
              />
              <input
                type="text"
                className="w-full text-gray-700 outline-none bg-transparent text-center border-b border-gray-600 font-bold text-3xl py-2"
                required
              />
              <input
                type="text"
                className="w-full text-gray-700 outline-none bg-transparent text-center border-b border-gray-600 font-bold text-3xl py-2"
                required
              />
            </div>
            <button className="p-5 w-full bg-blue-600 text-white font-semibold rounded-xl my-5 text-xl shadow-lg shadow-blue-400 hover:shadow-none transition-all duration-300 ease-linear">
              Submit
            </button>
            <h3 className="font-base text-gray-700 text-center mt-5">
              Dont get SMS? <a href="#" className="text-blue-600">try again</a> in 00:43
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
