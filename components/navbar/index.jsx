const Navbar = () => {
    return (
        <div className="flex justify-between items-center lg:px-[150px] px-10 py-10">
            <h3 className="font-semibold uppercase">ikomers</h3>
            <ul className="flex gap-10 text-gray-600 items-center">
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
            <div className="flex items-center gap-5">
                <img src="../images/icons/search.svg" alt="gambar" />
                <img src="../images/icons/cart.svg" alt="gambar" />
                <img src="../images/icons/user.svg" alt="gambar" />
            </div>
        </div>
    )
}

export default Navbar;