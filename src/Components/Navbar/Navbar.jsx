import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-gray-800 px-14 py-1 md:bg-[#ffb000]">
            <div className="container mx-auto flex items-center justify-between">
                <Link to='' className=" md:hidden text-white text-lg font-semibold">Menu</Link>


                <div className='hidden w-full md:flex space-x-4 justify-between'>
                    <div className='flex gap-3'>
                        <Link to='' className="text-white hover:text-black">HOME</Link>
                        <Link to='' className="text-white hover:text-black">PRODUCTS</Link>
                        <Link to='' className="text-white hover:text-black">PRODUCT DETAIL</Link>
                        <Link to='' className="text-white hover:text-black">CART</Link>
                        <Link to='' className="text-white hover:text-black">CHECKOUT</Link>
                        <Link to='' className="text-white hover:text-black">MY ACCOUNT</Link>
                        <div
                            className="relative"
                            onMouseEnter={toggleDropdown}
                            onMouseLeave={toggleDropdown}
                        >
                            <Link to='' className="text-white hover:text-black">MORE PAGES</Link>
                            {isDropdownOpen && (
                                <div className="absolute bg-[#ffb000] mt-0 ps-5 pe-8 rounded-md z-10">
                                    <Link to='' className="block text-black py-2">Wishlist</Link>
                                    <Link to='' className="block text-black py-2">Login & Register</Link>
                                    <Link to='' className="block text-black py-2">Contact Us</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <Link to='' className="text-white hover:text-black">USER ACCOUNT</Link>
                    </div>
                </div>

                <div className="md:hidden">
                    <button
                        className="text-white"
                        onClick={toggleMobileMenu}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <Link to='' className="text-white py-2 block">HOME</Link>
                <Link to='' className="text-white py-2 block">PRODUCTS</Link>
                <Link to='' className="text-white py-2 block">PRODUCT DETAIL</Link>
                <Link to='' className="text-white py-2 block">CART</Link>
                <Link to='' className="text-white py-2 block">CHECKOUT</Link>
                <Link to='' className="text-white py-2 block">MY ACCOUNT</Link>
                <div
                    className="relative"
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                >
                    <Link to='' className="text-white hover:text-black">MORE PAGES</Link>
                    {isDropdownOpen && (
                        <div className="absolute bg-[#ffb000] mt-0 ps-5 pe-8 rounded-md z-10">
                            <Link to='' className="block text-black py-2">Wishlist</Link>
                            <Link to='' className="block text-black py-2">Login & Register</Link>
                            <Link to='' className="block text-black py-2">Contact Us</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;