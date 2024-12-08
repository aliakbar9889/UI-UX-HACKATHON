import React from "react";
import Image from "next/image"; // Importing the Image component from Next.js

const ImageGallery: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between items-center space-x-8 p-6 ml-5 mr-5">
      <Image 
        src="/logo1.png" 
        alt="Image 1" 
        width={48} // Set the width (e.g., 48px)
        height={48} // Set the height (e.g., 48px)
        className="object-cover rounded-md mb-4 md:mb-0" 
      />
      <Image 
        src="/logo2.png" 
        alt="Image 2" 
        width={48} 
        height={48} 
        className="object-cover rounded-md mb-4 md:mb-0" 
      />
      <Image 
        src="/logo3.png" 
        alt="Image 3" 
        width={48} 
        height={48} 
        className="object-cover rounded-md mb-4 md:mb-0" 
      />
      <Image 
        src="/logo4.png" 
        alt="Image 4" 
        width={48} 
        height={48} 
        className="object-cover rounded-md mb-4 md:mb-0" 
      />
      <Image 
        src="/logo5.png" 
        alt="Image 5" 
        width={48} 
        height={48} 
        className="object-cover rounded-md mb-4 md:mb-0" 
      />
      <Image 
        src="/logo6.png" 
        alt="Image 6" 
        width={48} 
        height={48} 
        className="object-cover rounded-md mb-4 md:mb-0" 
      />
      <Image 
        src="/logo7.png" 
        alt="Image 7" 
        width={48} 
        height={48} 
        className="object-cover rounded-md mb-4 md:mb-0" 
      />
    </div>
  );
};

export default ImageGallery;
