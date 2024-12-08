import React from "react";
import Image from "next/image"; // Import Image component from Next.js
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiFillPinterest, AiFillYoutube } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer className="p-6">
      {/* Gray Line on Top */}
      <hr className="w-full mx-auto" />

      <div className="flex flex-col lg:flex-row justify-between items-start mt-14">
        {/* Left Part */}
        <div className="flex flex-col items-start w-full lg:w-1/2 ml-20 mb-6 lg:mb-0">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={48} height={48} className="rounded-full" />
            <h3 className="text-lg font-semibold text-[#2C2544]">Comforty</h3>
          </div>
          <p className="mt-2 text-gray-600">Vivamus tristique odio sit amet velit semper,</p>
          <p className="text-gray-600"> eu posuere turpis interdum.</p>
          <p className="text-gray-600"> Cras egestas purus.</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-600">
            <AiFillFacebook />
            <AiOutlineTwitter />
            <AiOutlineInstagram />
            <AiFillPinterest />
            <AiFillYoutube />
          </div>
        </div>

        {/* Center Part */}
        <div className="flex flex-col lg:flex-row gap-14 w-full lg:w-1/3 mr-20 mb-6 lg:mb-0">
          {/* Left Sub-Part */}
          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-gray-400">CATEGORY</h4>
            <ul className="mt-2 text-gray-600">
              <li className="hover:text-blue-500 hover:underline hover:cursor-pointer">Sofa</li>
              <li className="hover:text-blue-500 hover:underline hover:cursor-pointer">Armchair</li>
              <li className="hover:text-blue-500 hover:underline hover:cursor-pointer">Wing Chair</li>
              <li className="hover:text-blue-500 hover:underline hover:cursor-pointer">Desk Chair</li>
              <li className="hover:text-blue-500 hover:underline hover:cursor-pointer">Wooden Chair</li>
              <li className="hover:text-blue-500 hover:underline hover:cursor-pointer">Park Bench</li>
            </ul>
          </div>

          {/* Right Sub-Part */}
          <div className="flex flex-col items-start">
            <h4 className="font-semibold text-gray-400">SUPPORT</h4>
            <ul className="mt-2 text-gray-600">
              <li className="hover:text-blue-500 hover:underline hover:cursor-pointer">Help & Support</li>
              <li className="hover:text-blue-500 hover:underline hover:cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-blue-500 hover:underline hover:cursor-pointer">Privacy Policy</li>
              <li className="hover:text-blue-500 hover:underline hover:cursor-pointer">Help</li>
            </ul>
          </div>
        </div>

        {/* Right Part */}
        <div className="flex flex-col items-start w-full lg:w-1/2 mr-14 mb-6 lg:mb-0">
          <h4 className="text-sm font-semibold text-gray-400">NEWSLETTER</h4>
          <div className="flex w-full mt-4 gap-2">
            {/* Input Field */}
            <input
              type="email"
              placeholder="Your email"
              className="p-2 text-sm border border-gray-300 rounded-l w-full sm:w-4/5"
            />
            {/* Subscribe Button */}
            <button className="bg-gray-500 rounded-lg hover:bg-gray-600 text-white p-2 w-full sm:w-1/5">
              Subscribe
            </button>
          </div>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
        </div>
      </div>

      {/* Gray Line Below */}
      <hr className="w-full mx-auto mt-8" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
        {/* Left Part */}
        <p className="text-gray-400 text-center sm:text-left">© 2024 - Comforty - Designed & Developed by <span className="text-gray-600">Zakirsoft</span></p>

        {/* Right Part - Payment Method Icons */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Image src="/paypal.png" alt="PayPal" width={40} height={40} />
          <Image src="/am.png" alt="Visa" width={32} height={32} />
          <Image src="/visa.png" alt="American Express" width={32} height={32} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
