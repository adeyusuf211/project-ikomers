import { useState } from "react";
import ProductList from "./product";
import Product from "../data/product.json";
import Categories from "../category";

const Products = () => {
  const [showFilter, setShowFilter] = useState(false);

  const filterProduct = (str) => {
    console.log(str);
  };

  return (
    <>
      <div className="w-full lg:px-[100px] px-10 py-10">
        <Categories />
        <div className="flex justify-between items-center mb-5 relative">
          <h1 className="font-semibold">New Product</h1>
          <button
            className="px-5 py-1 bg-green-500 text-white rounded-full shadow-lg"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter
          </button>
          {showFilter === true ? (
            <div
              className="flex flex-col absolute mt-2 right-0 top-full max-w-[200px] w-full p-3 bg-white z-10 rounded-md shadow-lg border border-gray-300 transition-all duration-500 ease-in"
              id="filterMenu"
            >
              <a
                className="ml-3 mt-1 cursor-pointer"
                onClick={() => filterProduct("popular")}
              >
                Popular
              </a>
              <a
                className="ml-3 mt-1 cursor-pointer"
                onClick={() => filterProduct("newest")}
              >
                Newest
              </a>
              <a
                className="ml-3 mt-1 cursor-pointer"
                onClick={() => filterProduct("trending")}
              >
                Trending
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <ProductList produk={Product} />
        </div>
      </div>
    </>
  );
};

export default Products;
