import Link from "next/link";

const SideNav = () => {
    return (
      <>
        <div className="bg-white p-5 flex flex-col gap-2 lg:w-[30%] w-full h-full">
            <Link href="/user/profile">
                <a className="font-semibold text-gray-800">My Account</a>
            </Link>
            <Link href="/user/order">
                <a className="font-semibold text-gray-800">My Order</a>
            </Link>
            <Link href="/user/notification">
                <a className="font-semibold text-gray-800">Notification</a>
            </Link>
            <Link href="/user/voucher">
                <a className="font-semibold text-gray-800">My Voucher</a>
            </Link>
        </div>
      </>
    );
}

export default SideNav;