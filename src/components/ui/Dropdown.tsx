"use client";

import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
        onClick={toggleDropdown}
      >
        <span>Services</span>
        <RiArrowDownSLine
          className={`ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className=" flex flex-col absolute mt-2 w-280 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className='flex flex-row'>
          <div className="w-[25%]">
            <h1 className="font-bold text-3xl">Services</h1>
            <div>
              <h1 className="font-bold text-2xl">Residential{'>'}</h1>
              <h1 className="font-bold text-2xl">Commercial {'>'}</h1>
            </div>
          </div>
          <div className="w-[75%]">
            <h1 className="font-bold text-2xl">Services</h1>
          </div>

          </div>
          <div>hello</div>
        </div>
      )}
    </div>
  );
};
export default DropdownMenu;
