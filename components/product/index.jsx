import Link from "next/link";
import { useState, useEffect } from "react";

const Product = () => {
  const [showModal, setShowModal]     = useState(false);
  const [likes, setLikes]             = useState(false);
  const [loading, setLoading]         = useState(false);
  const [countLike, setCountLike]     = useState(500);
  const [search, setSearch]           = useState('');
  const [product, setProduct]         = useState([]);
  const [categories, setCategories]   = useState([]);

  const searchProduct = async () => {
    setLoading(true);
    const api   = await fetch(`https://dummyjson.com/products/search?q=${search}`);
    const data  = await api.json();
    setProduct(data.products);
    setLoading(false);
  }

  const filterByCategory = async (category) => {
    setLoading(true);
    const api   = await fetch(`https://dummyjson.com/products/category/${category}`)
    const data  = await api.json();
    setProduct(data.products);
    setLoading(false);
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products)
        setLoading(false)
      });
  }, []);

  return (
    <>
      <div className="px-5 lg:px-[150px] py-5 bg-gray-100">
        <div className="w-full h-full lg:px-[150px] px-5 flex lg:justify-center gap-5 lg:overflow-y-hidden overflow-y-auto hidden-scrollbar">
            {categories.map((category, i) => (
                <div 
                    className="flex flex-col items-center justify-center gap-1 cursor-pointer text-center" 
                    onClick={() => filterByCategory(category)}
                    key={i}>
                    <div className="w-14 h-14 rounded-full bg-gray-300 flex justify-center items-center">
                        <img src="../images/icons/calendar.svg" alt="gambar" />
                    </div>
                    <h3 className="font-medium text-gray-600 text-sm p-3">{ category }</h3>
                </div>
            ))}
        </div>
        <div className="flex justify-between gap-3 p-5 rounded-xl bg-white mb-5">
          <input
            type="text"
            className="w-full bg-transparent outline-none"
            placeholder="search product..."
            onInput={(e) => setSearch(e.target.value)}
          />
          <button
            className="outline-none bg-none"
            onClick={() => searchProduct()}
          >
            <img src="../images/icons/search.svg" alt="gambar" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-800 lg:text-2xl">
            Our best product
          </h3>
          <div className="flex gap-3 items-center">
            <h3 className="font-bold text-gray-800">{product.length}</h3>
            <button
              className="p-2 border border-gray-800 rounded-md relative"
              onClick={() => setShowModal(!showModal)}
            >
              <img src="../images/icons/filter.svg" alt="icons" />
              {showModal ? (
                <div className="flex flex-col absolute right-0 top-full w-[200px] p-3 bg-white z-10 rounded-md shadow-lg border border-gray-300 transition-all duration-500 ease-in mt-3">
                  <a className="mr-3 mt-1 text-left hover:text-blue-600 transition-all duration-300 ease-in cursor-pointer">
                    Latest Product
                  </a>
                  <a className="mr-3 mt-1 text-left hover:text-blue-600 transition-all duration-300 ease-in cursor-pointer">
                    Popular Product
                  </a>
                </div>
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
        {loading ? ( <h3 className="font-semibold text-gray-500 text-center"> Loading... </h3> ) : ''}
        {product.length == 0 ? ( <h1 className="text-center font-bold text-gray-500 text-3xl">Product Not Found</h1> ) : ""}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-5">
          {loading ? "" : (
            product.map((hasil) => (
              <Link href={"/product/" + hasil.id} key={hasil.id}>
                <div
                  className="relative border border-gray-300 cursor-pointer hover:shadow-lg hover:shadow-gray-300 transition-all duration-300 ease-linear"
                  key={hasil.id}
                >
                  <div className="relative">
                    <img
                      src={hasil.images[0]}
                      alt={hasil.title}
                      className="w-full h-48 object-cover object-center"
                    />
                    <small className="absolute top-3 left-3 text-gray-300 text-[10px] bg-black py-1 px-2 shadow-md">
                      {hasil.category}
                    </small>
                  </div>
                  <div className="lg:p-5 p-3">
                    <span className="text-sm text-gray-600">{hasil.title}</span>
                    <h3 className="font-bold text-md lg:text-xl text-gray-800">
                      Rp {parseInt(hasil.price * 15000).toLocaleString("id-ID")}
                    </h3>
                    <div className="flex justify-between items-center mt-3">
                      <a href="#" className="text-blue-500 font-semibold text-sm">
                        Add to cart
                      </a>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <img
                          src={
                            likes
                              ? "../images/icons/love-pink-fill.svg"
                              : "../images/icons/love.svg"
                          }
                          alt="icon"
                          className="w-4"
                          onClick={() => setLikes(!likes)}
                        />
                        <span className="font-medium text-gray-700 text-sm">
                          {!likes ? countLike : countLike + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        <div className="my-5 flex gap-3 bg-blue-200 p-5 rounded-lg lg:my-10">
          <div className="block w-full lg:py-5 text-center">
            <h3 className="text-blue-600 text-lg lg:text-4xl font-bold lg:mb-2">
              Get discount up to 70% for all furniture
            </h3>
            <button className="px-4 py-2 font-medium bg-blue-500 text-blue-100 mt-2 shadow-lg shadow-blue-300 hover:shadow-none transition-all duration-500 ease-linear">
              Get Now
            </button>
          </div>
        </div>
        <div className="block lg:mb-0 mb-5">
          <h3 className="font-semibold text-gray-800 mb-5 lg:text-2xl">
            Latest Viewed
          </h3>
          <div className="lg:overflow-x-hidden overflow-y-auto flex lg:flex-wrap lg:justify-between gap-3">
            <div className="relative shrink-0 lg:w-60 w-52 h-fit">
              <div className="relative">
                <img
                  src="../images/furniture1.webp"
                  alt="product"
                  className="rounded-2xl w-full h-full"
                />
                <span className="absolute top-3 left-3 text-gray-700 text-sm">
                  Furniture
                </span>
              </div>
              <div className="py-5 px-2">
                <span className="text-sm text-gray-600">campuranstore</span>
                <h3 className="font-bold text-xl text-gray-800">Rp.200.000</h3>
                <div className="flex justify-between items-center mt-3">
                  <a href="#" className="text-blue-500 font-semibold text-sm">
                    Add to cart
                  </a>
                  <div className="flex items-center gap-1">
                    <img
                      src="../images/icons/love.svg"
                      alt="icon"
                      className="w-4"
                    />
                    <span className="font-medium text-gray-700 text-sm">
                      500
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 lg:w-60 w-52 h-fit">
              <div className="relative">
                <img
                  src="../images/furniture2.webp"
                  alt="product"
                  className="rounded-2xl w-full h-full"
                />
                <span className="absolute top-3 left-3 text-gray-700 text-sm">
                  Furniture
                </span>
              </div>
              <div className="py-5 px-2">
                <span className="text-sm text-gray-600">campuranstore</span>
                <h3 className="font-bold text-xl text-gray-800">Rp.500.000</h3>
                <div className="flex justify-between items-center mt-3">
                  <a href="#" className="text-blue-500 font-semibold text-sm">
                    Add to cart
                  </a>
                  <div className="flex items-center gap-1">
                    <img
                      src="../images/icons/love.svg"
                      alt="icon"
                      className="w-4"
                    />
                    <span className="font-medium text-gray-700 text-sm">
                      400
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 lg:w-60 w-52 h-fit">
              <div className="relative">
                <img
                  src="../images/furniture4.webp"
                  alt="product"
                  className="rounded-2xl w-full h-full"
                />
                <span className="absolute top-3 left-3 text-gray-700 text-sm">
                  Furniture
                </span>
              </div>
              <div className="py-5 px-2">
                <span className="text-sm text-gray-600">campuranstore</span>
                <h3 className="font-bold text-xl text-gray-800">Rp.400.000</h3>
                <div className="flex justify-between items-center mt-3">
                  <a href="#" className="text-blue-500 font-semibold text-sm">
                    Add to cart
                  </a>
                  <div className="flex items-center gap-1">
                    <img
                      src="../images/icons/love.svg"
                      alt="icon"
                      className="w-4"
                    />
                    <span className="font-medium text-gray-700 text-sm">
                      700
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 lg:w-60 w-52 h-fit">
              <div className="relative">
                <img
                  src="../images/furniture3.webp"
                  alt="product"
                  className="rounded-2xl w-full h-full"
                />
                <span className="absolute top-3 left-3 text-gray-700 text-sm">
                  Furniture
                </span>
              </div>
              <div className="py-5 px-2">
                <span className="text-sm text-gray-600">campuranstore</span>
                <h3 className="font-bold text-xl text-gray-800">Rp.400.000</h3>
                <div className="flex justify-between items-center mt-3">
                  <a href="#" className="text-blue-500 font-semibold text-sm">
                    Add to cart
                  </a>
                  <div className="flex items-center gap-1">
                    <img
                      src="../images/icons/love.svg"
                      alt="icon"
                      className="w-4"
                    />
                    <span className="font-medium text-gray-700 text-sm">
                      700
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
