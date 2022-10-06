const ProductDetail = () => {
  return (
    <>
      <div className="w-full h-full px-5 lg:px-[150px] mb-20">
        <div className="lg:flex lg:gap-10 block">
          <img src="../images/furniture3.jpg" alt="gambar" className="flex object-cover object-center rounded-xl lg:rounded-none" />
          <div className="block my-5">
            <span className="text-sm text-blue-600 font-semibold">
              <a href="#">Product</a> / <a href="#">Furniture</a>
            </span>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-2xl">Night Lamp Yellow</h3>
              <img src="../images/icons/love-pink-fill.svg" alt="icons" className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <div className="flex gap-3 items-center">
                <img src="../images/icons/store.svg" alt="gambar" className="w-4 h-4" />
                <span className="font-semibold text-gray-600">CampuranStore</span>
              </div>
              <div className="flex gap-3 items-center">
                <img src="../images/icons/star.svg" alt="gambar" className="w-4 h-4" />
                <span className="font-semibold text-gray-600">4.7</span>
                <span className="font-semibold text-blue-600">3021 Reviews</span>
              </div>
              <div className="flex gap-3 items-center">
                <img src="../images/icons/like-thumb.svg" alt="gambar" className="w-4 h-4" />
                <span className="font-semibold text-gray-600">92%</span>
                <span className="font-semibold text-blue-600">2900 Likes</span>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="font-bold text-xl">Product Info</h3>
              <div className="flex gap-3 my-3">
                <h3 className="font-semibold w-[30%]">Stock:</h3>
                <h3 className="font-bold">320</h3>
              </div>
              <div className="flex gap-3 my-3">
                <h3 className="font-semibold w-[30%]">Color: </h3>
                <h3 className="font-bold">Yellow</h3>
              </div>
              <div className="flex gap-3 my-3">
                <h3 className="font-semibold w-[30%]">Size: </h3>
                <h3 className="font-bold">Big</h3>
              </div>
              <div className="flex gap-3 my-3">
                <h3 className="font-semibold w-[30%]">Status: </h3>
                <h3 className="font-bold bg-green-300 px-3 py-1 text-green-700">Ready Stock</h3>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="font-bold text-xl">Product Detail</h3>
              <h4 className="font-medium text-gray-500 mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione ut cumque similique perferendis, quas ullam!</h4>
            </div>
            <div className="mt-10 flex justify-between items-center p-3 bg-gray-300">
              <h3 className="font-bold text-xl">Rp.300.000</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-700 text-white font-semibold">Buy Now</button>
                <button className="p-2 bg-green-500">
                  <img src="../images/icons/cart.svg" alt="icons" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default ProductDetail;
