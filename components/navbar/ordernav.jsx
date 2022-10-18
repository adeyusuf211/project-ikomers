import Link from "next/link";
import { useRouter } from "next/router";

const OrderNav = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex gap-3 lg:overflow-x-hidden overflow-x-auto hidden-scrollbar">
        <Link href="/user/order">
          <div
            className={`py-2 mr-10 ${
              router.asPath == "/user/order"
                ? "border-b-2 border-blue-600"
                : ""
            } cursor-pointer`}
          >
            <h3
              className={`font-semibold text-md ${
                router.asPath == "/user/order"
                  ? "text-blue-600"
                  : "text-gray-500"
              }`}
            >
              All
            </h3>
          </div>
        </Link>
        <Link href="/user/order/notpaid">
          <div
            className={`py-2 mr-10 ${
              router.asPath == "/user/order/notpaid"
                ? "border-b-2 border-blue-600"
                : ""
            } cursor-pointer`}
          >
            <h3
              className={`font-semibold text-md ${
                router.asPath == "/user/order/notpaid"
                  ? "text-blue-500"
                  : "text-gray-500"
              }  cursor-pointer`}
            >
              Not Paid
            </h3>
          </div>
        </Link>
        <Link href="/user/order/shipping">
          <div
            className={`py-2 mr-10 ${
              router.asPath == "/user/order/shipping"
                ? "border-b-2 border-blue-600"
                : ""
            } cursor-pointer`}
          >
            <h3
              className={`font-semibold text-md ${
                router.asPath == "/user/order/shipping"
                  ? "text-blue-500"
                  : "text-gray-500"
              }  cursor-pointer`}
            >
              Shipping
            </h3>
          </div>
        </Link>
        <Link href="/user/order/finished">
          <div
            className={`py-2 mr-10 ${
              router.asPath == "/user/order/finished"
                ? "border-b-2 border-blue-600"
                : ""
            } cursor-pointer`}
          >
            <h3
              className={`font-semibold text-md ${
                router.asPath == "/user/order/finished"
                  ? "text-blue-500"
                  : "text-gray-500"
              }  cursor-pointer`}
            >
              Finished
            </h3>
          </div>
        </Link>
        <Link href="/user/order/cancelled">
          <div
            className={`py-2 mr-10 ${
              router.asPath == "/user/order/cancelled"
                ? "border-b-2 border-blue-600"
                : ""
            } cursor-pointer`}
          >
            <h3
              className={`font-semibold text-md ${
                router.asPath == "/user/order/cancelled"
                  ? "text-blue-500"
                  : "text-gray-500"
              }  cursor-pointer`}
            >
              Canclelled
            </h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default OrderNav;
