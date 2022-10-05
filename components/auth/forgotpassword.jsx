import Link from "next/link";

const ForgotPassword = () => {
  return (
    <>
      <div className="w-full h-full lg:flex lg:justify-center lg:items-center">
        <div className="p-5 block">
          <img src="../images/forgot-password.svg" alt="login" />
          <div className="block my-10">
            <h3 className="font-bold text-gray-800 text-3xl">Forgot Password</h3>
            <div className="block">
              <div className="flex my-5 bg-gray-200 p-5 gap-3 rounded-xl">
                <img src="../images/icons/at.svg" alt="gambar" />
                <input
                  type="text"
                  className="w-full text-gray-500 outline-none bg-transparent"
                  placeholder="Email ID"
                  required
                />
              </div>
              <button className="p-5 w-full bg-blue-600 text-white font-semibold rounded-xl my-5 text-xl shadow-lg shadow-blue-400 hover:shadow-none transition-all duration-300 ease-linear">
                Submit
              </button>
              <Link href="/auth">
                <h3 className="text-blue-600 text-center mt-3 font-semibold">Back to login</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
