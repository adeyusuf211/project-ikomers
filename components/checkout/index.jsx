import Button from '../button';

const Checkout = () => {
  return (
    <>
      <div className="w-full h-full px-5 py-5 lg:px-[150px] bg-gray-100 lg:mb-0 mb-20">
        <div className="block mb-5">
          <h3 className="font-bold text-gray-800 text-xl">John Doe</h3>
          <span className="text-gray-600 text-md">
            Jl. Haha, kecamatan Hihi, Kabupaten Hoho, Provinsi Hehe, Negara
            Huhu. No. 666.
          </span>
        </div>
        <div className="block bg-white p-5">
          <div className="flex gap-3 relative">
            <img
              src="../images/banner.webp"
              alt="gambar"
              className="w-20 h-20 object-center object-cover"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl text-gray-800">
                Lorem ipsum dolor sit amet.
              </h3>
              <small className="text-gray-400 font-medium">
                1 pcs x Rp.300.000
              </small>
            </div>
          </div>
          <hr className="w-full border-2 border-dashed border-green-600 my-5" />
          <div className="block my-5">
            <div className="flex justify-between my-3">
              <h3 className="font-semibold text-xl text-gray-800">Shipping</h3>
              <a href="#" className="text-md text-blue-500">
                Change
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src="../images/jne.webp"
                alt="gambar"
                className="w-20 h-fit object-fit object-cover"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-md text-gray-800">
                  Regular - Rp.10.000
                </h3>
                <small className="text-gray-600">Est Time: 1 - 3 Days</small>
              </div>
            </div>
          </div>
          <div className="block my-5">
            <div className="flex justify-between my-3">
              <h3 className="font-semibold text-xl text-gray-800">Payment</h3>
              <a href="#" className="text-md text-blue-500">
                Change
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src="../images/visa.webp"
                alt="gambar"
                className="w-20 h-20 object-fit object-cover"
              />
              <h3 className="font-bold text-md text-gray-800">+Rp.2.500</h3>
            </div>
          </div>
        </div>
        <div className="block mb-5 bg-white p-5">
          <div className="flex justify-between my-1">
            <h3 className="text-md font-medium text-gray-500">Product:</h3>
            <h3 className="text-sm font-medium text-gray-700">
              Lorem ipsum dolor sit amet.
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
            <h3 className="text-md font-medium text-gray-500">Tax:</h3>
            <h3 className="text-md font-medium text-gray-700">Rp.3.000</h3>
          </div>
          <hr className="w-full h-2 my-2 border-gray-700" />
          <div className="flex justify-between my-1">
            <h3 className="text-md font-semibold text-gray-700">Total:</h3>
            <h3 className="text-md font-semibold text-gray-700">Rp.315.500</h3>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white p-5">
          <h3 className="text-xl font-semibold text-gray-80">Rp.315.500</h3>
          <Button
            title="Order"
            bgColor="bg-red-500"
            shadow="shadow-red-300"
            textColor="text-white"
            link="/order"
          />
        </div>
      </div>
    </>
  );
};

export default Checkout;
