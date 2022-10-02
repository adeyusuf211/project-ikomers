import Link from "next/link";
import { useRouter } from "next/router";

const MyOrder = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full p-4 bg-gray-100 flex gap-5 lg:px-[100px] px-10 py-10">
      <div className="block w-[30%] h-full bg-white p-4">
        <div className="flex gap-3">
          <img
            src="../../images/art.jpg"
            alt="gambar"
            className="rounded-full w-16 h-16 object-cover object-center"
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-gray-700 mb-1">Your Name</h3>
            <small className="py-1 px-3 rounded-full bg-gray-400 text-white">
              Silver Member
            </small>
          </div>
        </div>
        <div className="py-5">
          <div className="relative my-3">
            <h3 className="font-medium text-gray-700">My Account</h3>
            <Link href="/user">
              <div className="flex gap-3 items-center mt-2 cursor-pointer">
                <img src="../../images/icons/badge.svg" alt="icon" />
                <span className="font-base text-gray-500">Profile</span>
              </div>
            </Link>
            <Link href="/user/payment">
              <div className="flex gap-3 items-center mt-2 cursor-pointer">
                <img src="../../images/icons/payment.svg" alt="icon" />
                <span className="font-base text-gray-500">Payments</span>
              </div>
            </Link>
            <div className="flex gap-3 items-center mt-2">
              <img src="../../images/icons/settings.svg" alt="icon" />
              <span className="font-base text-gray-500">Settings</span>
            </div>
          </div>
          <div className="relative my-3">
            <h3 className="font-medium text-gray-700">Order</h3>
            <Link href="/order/myorder">
              <div className="flex gap-3 items-center mt-2 cursor-pointer">
                <img src="../../images/icons/list.svg" alt="icon" />
                <span className="font-base text-gray-500">My Order</span>
              </div>
            </Link>
            <div className="flex gap-3 items-center mt-2">
              <img src="../../images/icons/paid.svg" alt="icon" />
              <span className="font-base text-gray-500">Not Paid</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full py-4 bg-white">
        <div className="flex">
          <Link href="/user">
            <div
              className={
                router.asPath == "/user"
                  ? "py-3 px-6 border-blue-500 border-b-2 cursor-pointer"
                  : "py-3 px-6 cursor-pointer"
              }
            >
              <h3
                className={
                  router.asPath == "/user"
                    ? "font-medium text-blue-500"
                    : "font-medium text-gray-400 hover:text-gray-700"
                }
              >
                All
              </h3>
            </div>
          </Link>
          <Link href="/user/address">
            <div
              className={
                router.asPath == "/user/address"
                  ? "py-3 px-6 border-blue-500 border-b-2 cursor-pointer"
                  : "py-3 px-6 cursor-pointer"
              }
            >
              <h3
                className={
                  router.asPath == "/user/address"
                    ? "font-medium text-blue-500"
                    : "font-medium text-gray-400 hover:text-gray-700"
                }
              >
                Not Paid
              </h3>
            </div>
          </Link>
          <Link href="/user/payment">
            <div
              className={
                router.asPath == "/user/payment"
                  ? "py-3 px-6 border-blue-500 border-b-2 cursor-pointer"
                  : "py-3 px-6 cursor-pointer"
              }
            >
              <h3
                className={
                  router.asPath == "/user/payment"
                    ? "font-medium text-blue-500"
                    : "font-medium text-gray-400 hover:text-gray-700"
                }
              >
                Completed
              </h3>
            </div>
          </Link>
          <Link href="/user/payment">
            <div
              className={
                router.asPath == "/user/payment"
                  ? "py-3 px-6 border-blue-500 border-b-2 cursor-pointer"
                  : "py-3 px-6 cursor-pointer"
              }
            >
              <h3
                className={
                  router.asPath == "/user/payment"
                    ? "font-medium text-blue-500"
                    : "font-medium text-gray-400 hover:text-gray-700"
                }
              >
                Canceled
              </h3>
            </div>
          </Link>
        </div>
        {/* <div className="p-8">
            {router.asPath == "/user" ? <Profile /> : ""}
            {router.asPath == "/user/address" ? <Address /> : ""}
            {router.asPath == "/user/payment" ? <Payment /> : ""}
          </div> */}
      </div>
    </div>
  );
};

export default MyOrder;
