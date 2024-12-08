import React from "react";
import CustomButton from "./button"; // Make sure the import path is correct
import Image from "next/image"; // Import Next.js Image component

const PageLayout: React.FC = () => {
  return (
    <div className="p-10">
      {/* Heading */}
      <div className="flex flex-col items-start mb-10 ml-5 mr-5">
        <h1 className="text-3xl font-semibold text-black">Featured Products</h1>
      </div>

      {/* Grid for Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img2.png" // Path to your image
            alt="Image 1"
            width={500} // Provide width for image
            height={500} // Provide height for image
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton /> {/* Custom button here */}
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img3.png" // Path to your image
            alt="Image 2"
            width={500} // Provide width for image
            height={500} // Provide height for image
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton /> {/* Custom button here */}
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img4.png" // Path to your image
            alt="Image 3"
            width={500} // Provide width for image
            height={500} // Provide height for image
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton /> {/* Custom button here */}
            </div>
          </div>
        </div>

        {/* Image 4 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img5.png" // Path to your image
            alt="Image 4"
            width={500} // Provide width for image
            height={500} // Provide height for image
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton /> {/* Custom button here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
