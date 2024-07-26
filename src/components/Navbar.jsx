import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import CartContext from "./CartContext";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openmenu, setopenmenu] = useState(false);
  const { cart } = useContext(CartContext); // Use context to get cart items

  return (
    <div className="bg-[#fffc] backdrop-blur-sm border-b sticky top-0">
      <div className="container mx-auto h-16 sm:max-w-full flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" className="w-40" alt="Logo" />
        </Link>
        <div className="flex space-x-8 h-full text-[#9347d8] font-medium items-center ">
          <Link
            to="/"
            className="sm:hidden hover:text-[#bf91eb] transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="sm:hidden hover:text-[#bf91eb] transition duration-300"
          >
            About Us
          </Link>
          <div
            className="relative h-full flex"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link className="sm:hidden hover:text-[#bf91eb] transition duration-300 h-full flex items-center">
              Products
            </Link>
            {dropdownOpen && (
              <div className="absolute top-10 left-0 mt-2 w-48 text-[#9347d8] bg-white shadow-lg rounded-md py-2 z-10">
                <Link
                  to="/products/handicrafts"
                  className="block px-4 py-2 hover:text-[#bf91eb] transition duration-300"
                >
                  Handicrafts
                </Link>
                <Link
                  to="/products/musical-instruments"
                  className="block px-4 py-2 hover:text-[#bf91eb] transition duration-300"
                >
                  Musical Instruments
                </Link>
                <Link
                  to="/products/paintings"
                  className="block px-4 py-2 hover:text-[#bf91eb] transition duration-300"
                >
                  Paintings
                </Link>
                <Link
                  to="/products/food-products"
                  className="block px-4 py-2 hover:text-[#bf91eb] transition duration-300"
                >
                  Food Products
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/contact"
            className="sm:hidden hover:text-[#bf91eb] transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/cart"
            className=" sm:text-lg hover:text-[#bf91eb] transition duration-300 relative"
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute top-[-6px] right-[-20px] inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
          <img
            onClick={() => setopenmenu((prev) => !prev)}
            src={openmenu ?  "/closeIcon.svg" :"/menu-svgrepo-com.svg"}
            // src="/closeIcon.svg"
            className="w-5 hidden sm:flex"
            alt=""
          />
        </div>
      </div>
      <div
        className={`container absolute top-30 border-t max-w-full sm:mx-auto h-[100vh] hidden bg-white p-6 ${
          openmenu ? "sm:flex" : "none"
        } `}
      >
        <div className="flex text-[#9347d8] flex-col gap-4">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setopenmenu((prv) => !prv)}
            className="text-xl"
          >
            About Us
          </Link>
          <Link className="text-xl">Products</Link>
          <div className="pl-6 flex flex-col gap-4">
            <Link
              to="/products/handicrafts"
              onClick={() => setopenmenu((prv) => !prv)}
              className="text-xl"
            >
              Handicrafts
            </Link>
            <Link
              to="/products/musical-instruments"
              onClick={() => setopenmenu((prv) => !prv)}
              className="text-xl"
            >
              Musical Instruments
            </Link>
            <Link
              to="/products/paintings"
              onClick={() => setopenmenu((prv) => !prv)}
              className="text-xl"
            >
              Paintings
            </Link>
            <Link
              to="/products/food-products"
              onClick={() => setopenmenu((prv) => !prv)}
              className="text-xl"
            >
              Food Products
            </Link>
          </div>
          <Link
            to="/contact"
            onClick={() => setopenmenu((prv) => !prv)}
            className="text-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;