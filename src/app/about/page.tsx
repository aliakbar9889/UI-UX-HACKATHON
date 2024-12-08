import React from "react";
import Image from "next/image";  // Importing Next.js Image component

const PageLayout: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      {/* Left and Right Layout */}
      <div className="flex justify-between items-center mb-16">
        {/* Left Side: Card */}
        <div className="w-full md:w-1/2 p-12 ml-16 bg-gray-500 text-white rounded-lg flex flex-col justify-between">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-16">About Us - Comforty</h2>

          {/* Paragraph */}
          <p className="text-lg mb-6">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. From elegant armchairs to cozy loungers, our carefully curated collection blends style and functionality, offering chairs that seamlessly blend style with relaxation.
          </p>

          {/* Button */}
          <button className="px-4 py-4 bg-gray-400 text-white rounded-lg hover:bg-gray-600 transition duration-300 mt-28">
            View Collection
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 p-10">
          <Image
            src="/img13.png" // Replace with your image path
            alt="Collection"
            width={500} // Specify width
            height={500} // Specify height
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Center Aligned Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">What Makes Our Brand Different</h2>
      </div>

      {/* 4 Pictures Horizontally Aligned */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">
        <Image 
          src="/pic5.png" 
          alt="Image 1" 
          width={500} 
          height={500} 
          className="w-full h-full hover:cursor-pointer object-cover rounded-lg" 
        />
        <Image 
          src="/pic6.png" 
          alt="Image 2" 
          width={500} 
          height={500} 
          className="w-full h-full object-cover hover:cursor-pointer rounded-lg" 
        />
        <Image 
          src="/pic7.png" 
          alt="Image 3" 
          width={500} 
          height={500} 
          className="w-full h-full object-cover hover:cursor-pointer rounded-lg" 
        />
        <Image 
          src="/pic8.png" 
          alt="Image 4" 
          width={500} 
          height={500} 
          className="w-full h-full object-cover hover:cursor-pointer rounded-lg" 
        />
      </div>
    </div>
  );
};

export default PageLayout;
