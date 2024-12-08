'use client';

import React from "react";
import CustomButton from "./button"; // Import the custom button component
import Image from "next/image"; // Import Image component from Next.js

const PageLayout: React.FC = () => {
  return (
    <div className="p-10">
      {/* Heading */}
      <div className="flex flex-col items-start mb-10 ml-5 mr-5">
        <h1 className="text-3xl font-semibold text-black">Featured Products</h1>
      </div>

      {/* Grid for Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img2.png"
            alt="Image 1"
            width={400} // Set your image width here
            height={400} // Set your image height here
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton /> {/* Replacing the shopping cart icon with the custom button */}
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img3.png"
            alt="Image 2"
            width={400}
            height={400}
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
            src="/img4.png"
            alt="Image 3"
            width={400}
            height={400}
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
            src="/img5.png"
            alt="Image 4"
            width={400}
            height={400}
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
            src="/pic1.png"
            alt="Image 5"
            width={400}
            height={400}
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
            src="/pic2.png"
            alt="Image 6"
            width={400}
            height={400}
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

        {/* Image 7 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img14.png"
            alt="Image 7"
            width={400}
            height={400}
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

        {/* Image 8 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img13.png"
            alt="Image 8"
            width={400}
            height={400}
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
    </div>
  );
};

export default PageLayout;
