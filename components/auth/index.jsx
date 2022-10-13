import Link from "next/link";

const Login = () => {
    return (
      <>
        <div className="w-full h-full lg:flex lg:justify-center lg:items-center">
          <div className="p-5 flex flex-col lg:flex-row lg:items-center lg:gap-20">
            <img src="../images/login.svg" alt="login" className="lg:w-[50%] lg:h-full" />
            <div className="block my-10 w-full">
              <h3 className="font-bold text-gray-800 text-3xl">Login</h3>
              <div className="block">
                <div className="flex my-5 bg-gray-100 p-5 gap-3 rounded-xl">
                  <img src="../images/icons/at.svg" alt="gambar" />
                  <input
                    type="email"
                    className="w-full text-gray-500 outline-none bg-transparent"
                    placeholder="Email ID"
                    required
                  />
                </div>
                <div className="flex my-5 bg-gray-100 p-5 gap-3 rounded-xl">
                  <img src="../images/icons/key.svg" alt="gambar" />
                  <input
                    type="password"
                    className="w-full text-gray-500 outline-none bg-transparent"
                    placeholder="Your Password"
                    required
                  />
                </div>
                <Link href="/auth/forgotpassword">
                  <a className="font-semibold text-blue-600 my-3">
                    Forgot Password?
                  </a>
                </Link>
                <button className="p-3 w-full bg-blue-600 text-white font-semibold rounded-xl my-5 text-xl shadow-lg shadow-blue-300 hover:shadow-none transition-all duration-300 ease-linear">
                  Login
                </button>
                <h3 className="text-center text-xl">OR</h3>
                <button className="p-3 w-full white text-gray-700 font-semibold border border-gray-800 rounded-xl my-5 text-xl shadow-lg">
                  Login with Google
                </button>
                <h3 className="font-semibold text-gray-800 text-center">
                  Dont have account?{" "}
                  <Link href="/auth/register">
                    <a className="text-blue-600">Sign Up</a>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Login;