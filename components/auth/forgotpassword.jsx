import Link from "next/link";

const ForgotPassword = () => {
  return (
    <>
      <div className="w-full lg:min-h-screen h-full lg:flex lg:justify-center lg:items-center lg:bg-gray-100 bg-white lg:px-[100px]">
        <div className="p-5 flex flex-col lg:flex-row lg:items-center lg:gap-20">
          <img
            src="../images/forgot-password.svg"
            alt="login"
            className="lg:w-[50%]"
          />
          <div className="block my-10 lg:w-full lg:bg-white lg:p-10">
            <h3 className="font-bold text-gray-800 text-3xl">
              Forgot Password
            </h3>
            <div className="block">
              <div className="flex my-5 border border-gray-400 p-5 gap-3 rounded-xl">
                <img src="../images/icons/at.svg" alt="gambar" />
                <input
                  type="text"
                  className="w-full text-gray-500 outline-none bg-transparent"
                  placeholder="Email ID"
                  required
                />
              </div>
              <button className="p-3 w-full bg-blue-600 text-white font-semibold my-5 text-xl shadow-lg shadow-blue-300 hover:shadow-none transition-all duration-300 ease-linear">
                Submit
              </button>
              <Link href="/auth">
                <h3 className="text-blue-600 text-center mt-3 font-semibold cursor-pointer">
                  Back to Login
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
