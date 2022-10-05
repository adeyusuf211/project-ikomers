import Link from "next/link";

const Register = () => {
  return (
    <>
      <div className="w-full h-full lg:flex lg:justify-center lg:items-center">
        <div className="p-5 block">
          <img src="../images/register.svg" alt="login" />
          <div className="block my-10">
            <h3 className="font-bold text-gray-800 text-3xl">Sign Up</h3>
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
              <div className="flex my-5 bg-gray-200 p-5 gap-3 rounded-xl">
                <img src="../images/icons/pen.svg" alt="gambar" />
                <input
                  type="text"
                  className="w-full text-gray-500 outline-none bg-transparent"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="flex my-5 bg-gray-200 p-5 gap-3 rounded-xl">
                <img src="../images/icons/phone.svg" alt="gambar" />
                <input
                  type="password"
                  className="w-full text-gray-500 outline-none bg-transparent"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="flex gap-3 my-5">
                <div className="flex bg-gray-200 p-5 gap-3 rounded-xl">
                  <img src="../images/icons/key.svg" alt="gambar" />
                  <input
                    type="password"
                    className="w-full text-gray-500 outline-none bg-transparent"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="flex bg-gray-200 p-5 gap-3 rounded-xl">
                  <img src="../images/icons/repeat.svg" alt="gambar" />
                  <input
                    type="password"
                    className="w-full text-gray-500 outline-none bg-transparent"
                    placeholder="Repeat Password"
                    required
                  />
                </div>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                soluta.
              </p>
              <button className="p-5 w-full bg-blue-600 text-white font-semibold rounded-xl my-5 text-xl shadow-lg shadow-blue-400 hover:shadow-none transition-all duration-300 ease-linear">
                Sign Up
              </button>
              <h3 className="font-semibold text-gray-800 text-center">
                have account?{" "}
                <Link href="/auth">
                  <a className="text-blue-600">Login</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
