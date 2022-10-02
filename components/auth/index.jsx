import Link from "next/link";

const Login = () => {
  return (
    <div className="w-full min-h-screen h-full bg-gray-100 flex justify-center items-center p-3">
      <div className="p-5 border border-gray-300 bg-white rounded-lg lg:w-[30vw] w-full">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold text-gray-700">Login</h3>
          <p className="font-normal text-gray-500">
            Dont have account?{" "}
            <Link href="/auth/register">
              <a className="text-blue-600">Register</a>
            </Link>
          </p>
        </div>
        <div className="flex justify-center gap-3 my-5">
          <button className="border border-gray-500 rounded-md py-2 px-4 hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-500 ease-in w-full">
            Google
          </button>
          <button className="border border-gray-500 rounded-md py-2 px-4 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-500 ease-in w-full">
            Facebook
          </button>
        </div>
        <span className="w-full text-gray-500">
          ---------------- Or ---------------
        </span>
        <div className="block mt-3">
          <div className="flex flex-col mb-3">
            <label>Email</label>
            <input
              type="email"
              placeholder="input your email"
              className="border border-gray-800 w-full p-2 text-gray-700 outline-none rounded-md mt-1 placeholder:text-sm"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label>Password</label>
            <input
              type="password"
              placeholder="input your password"
              className="border border-gray-800 w-full p-2 text-gray-700 outline-none rounded-md mt-1 placeholder:text-sm"
            />
          </div>
          <button className="w-full p-3 bg-blue-700 text-white outline-none border-none rounded-md mt-3 hover:bg-blue-500 transition-all duration-500 ease shadow-lg shadow-blue-300 hover:shadow-none">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
