import React from "react";
import Image from "next/image"; // Importing the Image component from Next.js

const Category: React.FC = () => {
  return (
    <div className="p-10 ml-10">
      {/* Heading */}
      <div className="flex flex-col items-start mb-10 ">
        <h1 className="text-3xl font-semibold text-black">Top Categories</h1>
      </div>

      {/* Grid for Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Image 1 */}
        <div className="flex flex-col items-center hover:cursor-pointer">
          <Image
            src="/img6.png"
            alt="Image 1"
            width={400} // You can adjust the width as needed
            height={300} // You can adjust the height as needed
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center hover:cursor-pointer">
          <Image
            src="/img7.png"
            alt="Image 2"
            width={400}
            height={300}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center hover:cursor-pointer">
          <Image
            src="/img8.png"
            alt="Image 3"
            width={400}
            height={300}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        {/* Image 4 */}
        <div className="flex flex-col items-center hover:cursor-pointer">
          <Image
            src="/img9.png"
            alt="Image 4"
            width={400}
            height={300}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
