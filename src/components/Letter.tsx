import React from "react";
import Image from "next/image"; // Import Image component from Next.js

const Page5 = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Top Section */}
      <section
        id="subscribe"
        className="flex justify-center items-center text-center text-white font-bold w-full mt-[5%]"
      >
        <div className="w-full max-w-4xl">
          <span className="text-black">
            <h1 className="text-4xl mb-12">Or Subscribe To The Newsletter</h1>
          </span>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full sm:w-2/3 px-4 py-2 border-0 border-b-2 border-black focus:ring-0 focus:outline-none"
            />
            {/* Button */}
            <button className="px-6 py-2 border-0 border-b-2 border-black bg-transparent text-black hover:text-red-500 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <div className="p-10">
        {/* Heading */}
        <div className="flex flex-col items-start mb-10 ml-5 mr-5">
          <h1 className="text-3xl font-semibold text-center text-black">
            Follow Products And Discounts On Instagram
          </h1>
        </div>

        {/* Grid for Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Example Images */}
          {Array(4) // Updated to 4 images
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={`/img${index + 1}.png`} // Update image paths accordingly
                  alt={`Product ${index + 1}`}
                  width={300} // Specify width
                  height={300} // Specify height
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />
                <div className="flex justify-between w-full mb-2">
                  <div className="flex flex-col text-left"></div>
                  <div className="flex justify-center items-center"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page5;
