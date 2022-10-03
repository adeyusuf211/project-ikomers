const Navbar = () => {
    return (
        <div className="flex justify-between items-center lg:px-[150px] px-10 py-10 relative">
            <h3 className="font-semibold uppercase">ikomers</h3>
            <ul className="flex gap-10 lg:relative fixed bottom-0 right-0 w-full text-gray-600 justify-center items-center lg:bg-none bg-white lg:py-0 py-5">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Blogs</a>
                </li>
            </ul>
            <div className="flex items-center">
                <a href="#" className="p-2">
                    <img src="../images/icons/search.svg" alt="gambar" />
                </a>
                <a href="#" className="p-2">
                    <img src="../images/icons/cart.svg" alt="gambar" />
                </a>
                <a href="#" className="p-2">
                    <img src="../images/icons/user.svg" alt="gambar" />
                </a>
            </div>
        </div>
    )
}

export default Navbar;