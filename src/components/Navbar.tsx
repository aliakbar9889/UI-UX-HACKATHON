'use client'; // Add this line at the top of your file to mark it as a client-side component

import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineExclamationCircle, AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image"; // Import Image component from Next.js

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full mx-auto text-white">
      {/* First Div (Top Section) */}
      <div className="bg-[#2C2544] flex justify-between items-center p-2">
        {/* Left Part */}
        <div className="flex items-center gap-2 ml-20 text-gray-400 text-sm">
          <AiOutlineCheck className="text-gray-400" />
          <p>Free Shipping On All Orders Over $50</p>
        </div>

        {/* Right Part (Visible only on larger screens) */}
        <div className="hidden sm:flex items-center gap-6 text-gray-400 text-sm mr-10">
          <p>Eng <span className="inline-block rotate-180">^</span></p>
          <p><Link className="hover:cursor-pointer" href="/faq">Faqs</Link></p>
          <div className="flex items-center gap-1">
            <AiOutlineExclamationCircle className="text-gray-400" />
            <p><Link className="hover:cursor-pointer" href="">Need Help</Link></p>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center mr-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <AiOutlineMenu className="text-white text-2xl" />
        </div>
      </div>

      {/* Second Div (Logo and Cart) */}
      <div className="w-full flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4">
        {/* Left Part */}
        <div className="flex items-center gap-4">
          {/* Using Next.js Image Component */}
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={40} 
            height={40} 
            className="rounded-full ml-20" 
          />
          <h3 className="font-semibold text-[#3b3357] text-2xl">Comforty</h3>
        </div>

        {/* Right Part */}
        <div className="hidden sm:flex items-center gap-4 text-sm mr-10">
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-100">
            <AiOutlineShoppingCart />
            <span>Cart</span>
            <div className="bg-[#2C2544] text-white rounded-full w-5 h-5 flex justify-center items-center ">
              2
            </div>
          </button>
        </div>
      </div>

      {/* Third Div (Nav Links) */}
      <div className="hidden sm:flex justify-between items-center text-gray-600 mt-4 ml-20">
        {/* Left Part */}
        <div className="flex gap-6">
          <span className="hover:text-blue-700 hover:cursor-pointer"><Link href="/">Home</Link></span>
          <span className="hover:text-blue-700 hover:cursor-pointer"><Link href="/shop">Shop</Link></span>
          <span className="hover:text-blue-700 hover:cursor-pointer"><Link href="/products">Products</Link></span>
          <span className="hover:text-blue-700 hover:cursor-pointer">Pages</span>
          <span className="hover:text-blue-700 hover:cursor-pointer"><Link href="/about">About</Link></span>
        </div>

        {/* Right Part */}
        <p className="mr-10">
          Contact: <b>(808) 555-0111</b>
        </p>
      </div>

      {/* Mobile View Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-100 p-4">
          <div className="flex flex-col gap-4 text-black">
            <Link href="/" className="hover:text-blue-700 ">Home</Link>
            <Link href="/shop" className="hover:text-blue-700">Shop</Link>
            <Link href="/products" className="hover:text-blue-700">Products</Link>
            <Link href="/pages" className="hover:text-blue-700">Pages</Link>
            <Link href="/about" className="hover:text-blue-700">About</Link>
          </div>
        </div>
      )}

      {/* Grey Line Below */}
      <hr className="border-t border-gray-300 mt-4" />
    </nav>
  );
};

export default Navbar;
