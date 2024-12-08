import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component

const HeroSection: React.FC = () => {
  return (
    <div className="container bg-white px-6 md:px-16 justify-between items-center mx-auto">
      {/* First Section */}
      <div className="bg-[#F5F7FA] flex flex-col md:flex-row items-center justify-center px-6 md:px-12 rounded-bl-3xl">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <p className="text-sm font-medium text-[#6C6C6C] uppercase">Welcome to Chairy</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2C2C2C] leading-tight">
            Best Furniture Collection For Your Interior.
          </h1>
          <button className="flex items-center justify-center mx-auto md:mx-0 space-x-2 w-[140px] h-[45px] bg-[#029FAE] text-white font-medium rounded-md hover:bg-[#027C86] transition duration-300">
            <span>Shop Now</span>
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            alt="Chair Image"
            loading="lazy"
            width={1200} // Specify width
            height={800} // Specify height
            className="object-contain"
            src="/img1.png" // Image path
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
