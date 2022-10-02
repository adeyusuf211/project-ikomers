import Link from "next/link";

const ProductList = ({ produk }) => {
  return (
    <>
      {produk.map((produk) => (
        <Link href="/product/detail" key={produk.id}>
          <div className="w-full block h-full border border-gray-300 cursor-pointer">
            <div className="w-full relative">
              <img
                src={produk.images}
                alt={produk.title}
                className="object-cover object-center h-80 w-full"
              />
              <button className="absolute px-3 py-2 top-3 left-3 bg-red-500 text-white rounded-md">
                {produk.category}
              </button>
              <div className="w-[40%] p-3 absolute bottom-0 right-0 bg-blue-400 text-white flex justify-center">
                {produk.filter}
              </div>
            </div>
            <div className="w-full p-3">
              <h3 className="text-base font-semibold text-gray-600">
                {produk.title}
              </h3>
              <div className="flex justify-between">
                <h5 className="font-normal">
                  Rp. {produk.price.toLocaleString("id-ID")}
                </h5>
                <h5
                  className={`font-normal ${
                    produk.stock <= 10 ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  Stok: {produk.stock}
                </h5>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductList;
