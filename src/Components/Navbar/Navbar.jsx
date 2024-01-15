import { useState } from "react";

const Navbar = () => {
    // const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // const toggleMobileMenu = () => {
    //     setMobileMenuOpen(!isMobileMenuOpen);
    // };

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        // <div className='px-14 py-1 bg-[#ffb000]'>
        //     <div className='flex justify-between'>
        //         <div className='flex gap-3'>
        //             <a href="" className="text-white hover:text-black">HOME</a>
        //             <a href="" className="text-white hover:text-black">PRODUCTS</a>
        //             <a href="" className="text-white hover:text-black">PRODUCT DETAIL</a>
        //             <a href="" className="text-white hover:text-black">CART</a>
        //             <a href="" className="text-white hover:text-black">CHECKOUT</a>
        //             <a href="" className="text-white hover:text-black">MY ACCOUNT</a>
        //             <a href="" className="text-white hover:text-black">MORE PAGES</a>
        //         </div>
        //         <div>
        //             <a href="" className="text-white hover:text-black">USER ACCOUNT</a>
        //         </div>
        //     </div>
        // </div>

        <nav className="bg-gray-800 px-14 py-1 md:bg-[#ffb000]">
            <div className="container mx-auto flex items-center justify-between">
                <a href="#" className=" md:hidden text-white text-lg font-semibold">Menu</a>


                <div className='hidden w-full md:flex space-x-4 justify-between'>
                    <div className='flex gap-3'>
                        <a href="" className="text-white hover:text-black">HOME</a>
                        <a href="" className="text-white hover:text-black">PRODUCTS</a>
                        <a href="" className="text-white hover:text-black">PRODUCT DETAIL</a>
                        <a href="" className="text-white hover:text-black">CART</a>
                        <a href="" className="text-white hover:text-black">CHECKOUT</a>
                        <a href="" className="text-white hover:text-black">MY ACCOUNT</a>
                        <div
                            className="relative"
                            onMouseEnter={toggleDropdown}
                            onMouseLeave={toggleDropdown}
                        >
                            <a href="#" className="text-white hover:text-black">MORE PAGES</a>
                            {isDropdownOpen && (
                                <div className="absolute bg-[#ffb000] mt-0 ps-5 pe-8 rounded-md z-10">
                                    <a href="#" className="block text-black py-2">Wishlist</a>
                                    <a href="#" className="block text-black py-2">Login & Register</a>
                                    <a href="#" className="block text-black py-2">Contact Us</a>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <a href="" className="text-white hover:text-black">USER ACCOUNT</a>
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
                <a href="" className="text-white py-2 block">HOME</a>
                <a href="" className="text-white py-2 block">PRODUCTS</a>
                <a href="" className="text-white py-2 block">PRODUCT DETAIL</a>
                <a href="" className="text-white py-2 block">CART</a>
                <a href="" className="text-white py-2 block">CHECKOUT</a>
                <a href="" className="text-white py-2 block">MY ACCOUNT</a>
                <div
                    className="relative"
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                >
                    <a href="#" className="text-white hover:text-black">MORE PAGES</a>
                    {isDropdownOpen && (
                        <div className="absolute bg-[#ffb000] mt-0 ps-5 pe-8 rounded-md z-10">
                            <a href="#" className="block text-black py-2">Wishlist</a>
                            <a href="#" className="block text-black py-2">Login & Register</a>
                            <a href="#" className="block text-black py-2">Contact Us</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>


        // <nav className="bg-gray-800 p-4">
        //     <div className="container mx-auto flex justify-between items-center">

        //         <a href="#" className="text-white text-lg font-semibold">Your Logo</a>

        //         <div className="hidden md:flex space-x-4">
        //             <div
        //                 className="relative"
        //                 onMouseEnter={toggleDropdown}
        //                 onMouseLeave={toggleDropdown}
        //             >
        //                 <a href="#" className="text-white">Home</a>
        //                 {isDropdownOpen && (
        //                     <div className="absolute bg-gray-700 mt-2 p-2 rounded-md">
        //                         <a href="#" className="block text-white py-2">Subitem 1</a>
        //                         <a href="#" className="block text-white py-2">Subitem 2</a>
        //                         <a href="#" className="block text-white py-2">Subitem 3</a>
        //                     </div>
        //                 )}
        //             </div>
        //             <a href="#" className="text-white">About</a>
        //             <a href="#" className="text-white">Services</a>
        //             <a href="#" className="text-white">Contact</a>
        //         </div>

        //         <div className="md:hidden">
        //             <button
        //                 className="text-white"
        //                 onClick={toggleMobileMenu}
        //             >
        //                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        //                     xmlns="http://www.w3.org/2000/svg">
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        //                         d="M4 6h16M4 12h16m-7 6h7"></path>
        //                 </svg>
        //             </button>
        //         </div>
        //     </div>

        //     <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
        //         <a href="#" className="block text-white py-2">Home</a>
        //         <a href="#" className="block text-white py-2">About</a>
        //         <a href="#" className="block text-white py-2">Services</a>
        //         <a href="#" className="block text-white py-2">Contact</a>
        //     </div>
        // </nav>
    );
};

export default Navbar;