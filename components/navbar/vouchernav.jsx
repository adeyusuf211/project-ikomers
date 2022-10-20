import Link from "next/link";
import { useRouter } from "next/router";

const VoucherNavbar = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex gap-3 lg:overflow-x-hidden overflow-x-auto hidden-scrollbar">
        <Link href="/user/voucher">
          <div
            className={`py-2 mr-10 shrink-0 ${
              router.asPath == "/user/voucher"
                ? "border-b-2 border-blue-600"
                : ""
            } cursor-pointer`}
          >
            <h3
              className={`font-semibold text-md ${
                router.asPath == "/user/voucher"
                  ? "text-blue-600"
                  : "text-gray-500"
              }`}
            >
              All
            </h3>
          </div>
        </Link>
        <Link href="/user/voucher/freeshipping">
          <div
            className={`py-2 mr-10 shrink-0 ${
              router.asPath == "/user/voucher/freeshipping"
                ? "border-b-2 border-blue-600"
                : ""
            } cursor-pointer`}
          >
            <h3
              className={`font-semibold text-md ${
                router.asPath == "/user/voucher/freeshipping"
                  ? "text-blue-500"
                  : "text-gray-500"
              }  cursor-pointer`}
            >
              Free Shipping
            </h3>
          </div>
        </Link>
        <Link href="/user/voucher/discount">
          <div
            className={`py-2 mr-10 shrink-0 ${
              router.asPath == "/user/voucher/discount"
                ? "border-b-2 border-blue-600"
                : ""
            } cursor-pointer`}
          >
            <h3
              className={`font-semibold text-md ${
                router.asPath == "/user/voucher/discount"
                  ? "text-blue-500"
                  : "text-gray-500"
              }  cursor-pointer`}
            >
              Discount
            </h3>
          </div>
        </Link>
        <Link href="/user/voucher/cashback">
          <div
            className={`py-2 mr-10 shrink-0 ${
              router.asPath == "/user/voucher/cashback"
                ? "border-b-2 border-blue-600"
                : ""
            } cursor-pointer`}
          >
            <h3
              className={`font-semibold text-md ${
                router.asPath == "/user/voucher/cashback"
                  ? "text-blue-500"
                  : "text-gray-500"
              }  cursor-pointer`}
            >
              Cashback
            </h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default VoucherNavbar;
