import Link from "next/link";

const Order = () => {
  return (
    <>
      <div className="w-full h-full bg-gray-100 py-5 px-5 lg:px-[150px]">
        <div className="block mb-5 bg-white p-5">
          <div className="flex flex-col justify-center items-center gap-2 w-full mb-5">
            <h3 className="font-bold text-gray-800 text-lg uppercase">INVOICE</h3>
            <span className="text-sm text-gray-500 uppercase">PRD001/08102022/03839395/KCSUVN02</span>
          </div>
          <div className="flex justify-between my-1">
            <h3 className="text-md font-medium text-gray-500">Transaction ID:</h3>
            <h3 className="text-md font-medium text-gray-700">
              03829V928K92
            </h3>
          </div>
          <div className="flex justify-between my-1">
            <h3 className="text-md font-medium text-gray-500">Product:</h3>
            <h3 className="text-md font-medium text-gray-700">
              Lorem ipsum dolor.
            </h3>
          </div>
          <div className="flex justify-between my-1">
            <h3 className="text-md font-medium text-gray-500">Price:</h3>
            <h3 className="text-md font-medium text-gray-700">Rp.300.000</h3>
          </div>
          <div className="flex justify-between my-1">
            <h3 className="text-md font-medium text-gray-500">Quantity:</h3>
            <h3 className="text-md font-medium text-gray-700">1 pcs</h3>
          </div>
          <div className="flex justify-between my-1">
            <h3 className="text-md font-medium text-gray-500">Shipping:</h3>
            <h3 className="text-md font-medium text-gray-700">Rp.10.000</h3>
          </div>
          <div className="flex justify-between my-1">
            <h3 className="text-md font-medium text-gray-500">Payment:</h3>
            <h3 className="text-md font-medium text-gray-700">Rp.2.500</h3>
          </div>
          <div className="flex justify-between my-1">
            <h3 className="text-md font-medium text-gray-500">Payment Status:</h3>
            <h3 className="text-md font-medium text-red-700 italic">Not Paid</h3>
          </div>
          <div className="flex justify-between my-1">
            <h3 className="text-md font-medium text-gray-500">Tax:</h3>
            <h3 className="text-md font-medium text-gray-700">Rp.3.000</h3>
          </div>
          <hr className="w-full h-2 my-2 border-gray-700" />
          <div className="flex justify-between my-1">
            <h3 className="text-md font-semibold text-gray-700">Total:</h3>
            <h3 className="text-md font-semibold text-gray-700">Rp.315.500</h3>
          </div>
        </div>

        <div className="flex justify-end py-3 mb-10">
          <Link href="/">
            <button className="px-6 py-2 bg-red-500 text-white font-semibold shadow-lg shadow-red-300 hover:shadow-none transition-all duration-300 ease-linear">Back To Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Order;
