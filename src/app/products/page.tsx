import React from "react";
import CustomButton from "@/components/button"; // Import the custom button component
import Image from "next/image"; // Import Image from next/image

// CardPage Component
const CardPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 md:px-8">
      {/* Main Card */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg w-full max-w-6xl">
        {/* Left Side: Image */}
        <div className="md:w-1/2">
          <Image
            src="/pic.png" // Replace with your image path
            alt="Product"
            width={500}  // Set the width of the image
            height={500} // Set the height of the image
            className="w-full h-full object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Library Stool Chair
          </h2>

          {/* Price */}
          <p className="text-xl sm:text-2xl text-gray-700 font-semibold mb-4">$20.00 USD</p>

          {/* Description */}
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>

          {/* Button */}
          <button className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// PageLayout Component
const PageLayout: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 md:p-10">
      {/* Heading with "View All" link */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-black">Featured Products</h1>
        <a href="#view-all" className="text-blue-500 font-semibold hover:underline">
          View All
        </a>
      </div>

      {/* Grid for Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Image 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img2.png"
            alt="Image 1"
            width={500}  // Set the width of the image
            height={500} // Set the height of the image
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton /> {/* Custom Button */}
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img3.png"
            alt="Image 2"
            width={500}  // Set the width of the image
            height={500} // Set the height of the image
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton /> {/* Custom Button */}
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img4.png"
            alt="Image 3"
            width={500}  // Set the width of the image
            height={500} // Set the height of the image
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton /> {/* Custom Button */}
            </div>
          </div>
        </div>

        {/* Image 4 */}
        <div className="flex flex-col items-center">
          <Image
            src="/img5.png"
            alt="Image 4"
            width={500}  // Set the width of the image
            height={500} // Set the height of the image
            className="w-full h-full object-cover rounded-lg mb-4"
          />
          <div className="flex justify-between w-full mb-2">
            <div className="flex flex-col text-left">
              <p className="text-gray-700">Library Stool Chair</p>
              <p className="text-gray-600"><b>$20</b></p>
            </div>
            <div className="flex justify-center items-center">
              <CustomButton /> {/* Custom Button */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Parent Component to Display Both
const CombinedPage = () => {
  return (
    <div>
      <CardPage />  {/* CardPage displayed first */}
      <PageLayout />  {/* PageLayout displayed below */}
    </div>
  );
};

export default CombinedPage;
