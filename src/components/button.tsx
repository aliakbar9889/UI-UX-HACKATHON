import React from 'react';

const CustomButton: React.FC = () => {
  return (
    <button className="bg-[#029FAE] py-2 px-3 text-white rounded-md hover:bg-[#027C86] transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#fff] mr-2"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 6h15l-1.5 9h-13z"></path>
        <circle cx="9" cy="20" r="1"></circle>
        <circle cx="18" cy="20" r="1"></circle>
      </svg>
    </button>
  );
};

export default CustomButton;
