import Link from "next/link";
import { useRouter } from "next/router";

const ProfileNav = () => {
    const router = useRouter();

    return (
      <>
        <div className="flex gap-3 lg:overflow-x-hidden overflow-x-auto hidden-scrollbar">
          <Link href="/user/profile">
            <div
              className={`py-2 mr-10 ${
                router.asPath == "/user/profile"
                  ? "border-b-2 border-blue-600"
                  : ""
              } cursor-pointer`}
            >
              <h3
                className={`font-semibold text-md ${
                  router.asPath == "/user/profile"
                    ? "text-blue-600"
                    : "text-gray-500"
                }`}
              >
                Profile
              </h3>
            </div>
          </Link>
          <Link href="/user/profile/payment">
            <div
              className={`py-2 mr-10 ${
                router.asPath == "/user/profile/payment"
                  ? "border-b-2 border-blue-600"
                  : ""
              } cursor-pointer`}
            >
              <h3
                className={`font-semibold text-md ${
                  router.asPath == "/user/profile/payment"
                    ? "text-blue-500"
                    : "text-gray-500"
                }  cursor-pointer`}
              >
                Payment
              </h3>
            </div>
          </Link>
          <Link href="/user/profile/address">
            <div
              className={`py-2 mr-10 ${
                router.asPath == "/user/profile/address"
                  ? "border-b-2 border-blue-600"
                  : ""
              } cursor-pointer`}
            >
              <h3
                className={`font-semibold text-md ${
                  router.asPath == "/user/profile/address"
                    ? "text-blue-500"
                    : "text-gray-500"
                }  cursor-pointer`}
              >
                Address
              </h3>
            </div>
          </Link>
          <Link href="/user/profile/password">
            <div
              className={`py-2 mr-10 ${
                router.asPath == "/user/profile/password"
                  ? "border-b-2 border-blue-600"
                  : ""
              } cursor-pointer`}
            >
              <h3
                className={`font-semibold text-md ${
                  router.asPath == "/user/profile/password"
                    ? "text-blue-500"
                    : "text-gray-500"
                }  cursor-pointer`}
              >
                Password
              </h3>
            </div>
          </Link>
        </div>
      </>
    );
}

export default ProfileNav;