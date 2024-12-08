import React from "react";
import CustomButton from "@/components/button"; // Import the custom button component
import Page5 from "@/components/Letter";
import Image from "next/image"; // Importing Image from Next.js

const PageLayout: React.FC = () => {
  return (
    <div className="p-10">
      {/* Heading */}
      <div className="flex flex-col items-start mb-10 ml-5 mr-5">
        <h1 className="text-3xl font-semibold text-black">All Products</h1>
      </div>

      {/* Grid for Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img2.png" // Image path
            alt="Image 1"
            width={500} // Specify width
            height={500} // Specify height
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton />
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img3.png" // Image path
            alt="Image 2"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton />
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img4.png" // Image path
            alt="Image 3"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton />
            </div>
          </div>
        </div>

        {/* Image 4 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img5.png" // Image path
            alt="Image 4"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton />
            </div>
          </div>
        </div>

        {/* Image 5 */}
        <div className="flex flex-col items-center">
          <Image
            src="/pic1.png" // Image path
            alt="Image 5"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton />
            </div>
          </div>
        </div>

        {/* Image 6 */}
        <div className="flex flex-col items-center">
          <Image
            src="/pic3.png" // Image path
            alt="Image 6"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton />
            </div>
          </div>
        </div>
      </div>

      {/* Page 5 */}
      <div>
        <Page5 />
      </div>
    </div>
  );
};

export default PageLayout;
