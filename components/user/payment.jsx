const Payment = () => {
  return (
    <div className="block">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-700">Rekening Bank</h3>
        <button className="px-3 py-1 bg-green-600 text-white rounded-lg">
          Add
        </button>
      </div>
      <div className="my-5">
        <div className="flex gap-3 items-center">
          <img
            src="../../images/design.jpg"
            alt="gambar"
            className="lg:w-20 w-16 lg:h-20 h-16 object-cover position-center"
          />
          <div className="block">
            <h3 className="font-medium text-gray-400">Bank Manja</h3>
            <h3 className="font-medium text-gray-700">928920482</h3>
            <h3 className="font-medium text-gray-700 lg:text-base text-sm">
              A.N John Doe
            </h3>
          </div>
          <button className="ml-auto px-3 py-1 rounded-lg border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in">
            Delete
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-700">E-wallet</h3>
        <button className="px-3 py-1 bg-green-600 text-white rounded-lg">
          Add
        </button>
      </div>
      <div className="my-5">
        <div className="flex gap-3 items-center">
          <img
            src="../../images/art.jpg"
            alt="gambar"
            className="lg:w-20 w-16 lg:h-20 h-16 object-cover position-center"
          />
          <div className="block">
            <h3 className="font-medium text-gray-400">LinkDoank</h3>
            <h3 className="font-medium text-gray-700">123456789</h3>
            <h3 className="font-medium text-gray-700 lg:text-base text-sm">
              A.N John Doe
            </h3>
          </div>
          <button className="ml-auto px-3 py-1 rounded-lg border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in">
            Delete
          </button>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <img
            src="../../images/technology.jpg"
            alt="gambar"
            className="lg:w-20 w-16 lg:h-20 h-16 object-cover position-center"
          />
          <div className="block">
            <h3 className="font-medium text-gray-400">Dani</h3>
            <h3 className="font-medium text-gray-700">123456789</h3>
            <h3 className="font-medium text-gray-700 lg:text-base text-sm">
              A.N John Doe
            </h3>
          </div>
          <button className="ml-auto px-3 py-1 rounded-lg border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in">
            Delete
          </button>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <img
            src="../../images/nature.jpg"
            alt="gambar"
            className="lg:w-20 w-16 lg:h-20 h-16 object-cover position-center"
          />
          <div className="block">
            <h3 className="font-medium text-gray-400">Ovooo</h3>
            <h3 className="font-medium text-gray-700">123456789</h3>
            <h3 className="font-medium text-gray-700 lg:text-base text-sm">
              A.N John Doe
            </h3>
          </div>
          <button className="ml-auto px-3 py-1 rounded-lg border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
