import Link from "next/link";

const Order = () => {
  return (
    <div className="w-full h-full py-3 lg:px-[100px] px-5 bg-gray-100">
      <div className="p-4 border border-gray-200 bg-white rounded-md">
        <div className="flex flex-col justify-center items-center w-full py-3">
          <h3 className="font-semibold text-2xl uppercase text-gray-600">
            Invoice
          </h3>
          <span className="lg:font-medium font-normal text-gray-400">
            PRD-001/0010092022/2231/203820182
          </span>
        </div>
        <div className="mt-10 mb-5 py-3 border-b border-gray-500 flex flex-col items-start">
          <h3 className="font-medium text-gray-500">Ade Yusuf</h3>
          <small className="font-base text-gray-500">
            JL. Hahahihihuhuhehehoho, Kec. Cuy, 39403.
          </small>
          <small className="text-gray-500 italic">Indonesia</small>
        </div>
        <div className="my-2 flex justify-between">
          <small className="font-base text-gray-500">Order ID</small>
          <h3 className="font-medium text-gray-700">
            PRD-001/0010/72392/20382
          </h3>
        </div>
        <div className="my-2 flex justify-between">
          <small className="font-base text-gray-500">Date Transaction</small>
          <h3 className="lg:font-medium text-gray-700 font-normal lg:text-base text-sm">
            19-09-2022:15:28:00
          </h3>
        </div>
        <div className="my-2 flex justify-between">
          <small className="font-base text-gray-500">Product</small>
          <h3 className="lg:font-medium text-gray-700 font-normal lg:text-base text-sm">
            The Best Product In The Moon
          </h3>
        </div>
        <div className="my-2 flex justify-between">
          <small className="font-base text-gray-500">Quantity</small>
          <h3 className="lg:font-medium text-gray-700 font-normal lg:text-base text-sm">
            1pcs
          </h3>
        </div>
        <div className="my-2 flex justify-between">
          <small className="font-base text-gray-500">Price</small>
          <h3 className="lg:font-medium text-gray-700 font-normal lg:text-base text-sm">
            Rp.300.000
          </h3>
        </div>
        <div className="my-2 flex justify-between">
          <small className="font-base text-gray-500">Payment Method</small>
          <h3 className="lg:font-medium text-gray-700 font-normal lg:text-base text-sm">
            Transfer Bank
          </h3>
        </div>
        <div className="my-2 flex justify-between">
          <small className="font-base text-gray-500">Payment Cost</small>
          <h3 className="lg:font-medium text-gray-700 font-normal lg:text-base text-sm">
            +Rp.2.500
          </h3>
        </div>
        <div className="my-2 flex justify-between">
          <small className="font-base text-gray-500">Payment Status</small>
          <h3 className="font-medium text-red-500 italic">Not Paid</h3>
        </div>
        <div className="my-2 flex justify-between">
          <small className="font-base text-gray-500">Shipping</small>
          <h3 className="lg:font-medium text-gray-700 font-normal lg:text-base text-sm">
            Regular - JME
          </h3>
        </div>
        <div className="my-2 flex justify-between">
          <small className="font-base text-gray-500">Shipping Cost</small>
          <h3 className="lg:font-medium text-gray-700 font-normal lg:text-base text-sm">
            +Rp.10.000
          </h3>
        </div>
        <div className="my-2 flex justify-between">
          <small className="font-base text-gray-500">Total</small>
          <h3 className="lg:font-medium text-gray-700 font-normal lg:text-base text-sm">
            Rp.312.500
          </h3>
        </div>
      </div>
      <div className="w-full flex justify-end mt-10">
        <Link href="/">
          <button className="px-4 py-2 outline-none border-none bg-red-500 text-white cursor-pointer hover:bg-red-700 transition-all duration-500 ease-in">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Order;
