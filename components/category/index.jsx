import { useState, useEffect } from "react";

const Category = () => {

    const [categories, setCategories]   = useState([]);

    useEffect(() => {
      fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }, []);

    return (
        <div className="w-full h-full lg:px-[150px] px-5 flex lg:justify-center gap-5 lg:overflow-y-hidden overflow-y-auto hidden-scrollbar">
            {categories.map((category, i) => (
                <div className="flex flex-col items-center justify-center gap-1 cursor-pointer text-center" key={i}>
                    <div className="w-14 h-14 rounded-full bg-gray-300 flex justify-center items-center">
                        <img src="../images/icons/calendar.svg" alt="gambar" />
                    </div>
                    <h3 className="font-medium text-gray-600 text-sm p-3">{ category }</h3>
                </div>
            ))}
        </div>
    )
}

export default Category;