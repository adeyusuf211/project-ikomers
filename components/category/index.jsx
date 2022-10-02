import Category from "../data/categories.json";

const Categories = () => {
  return (
    <>
      <div className="h-20 flex items-center gap-5 justify-between mb-10 overflow-x-auto w-full">
        {Category.map((categories, i) => (
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            key={i}
          >
            <img src={categories.icon} alt="icons" />
            <h1 className="font-semibold lg:text-base text-sm" key={i}>
              {categories.category}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
