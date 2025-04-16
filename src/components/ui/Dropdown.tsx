"use client";

import { useState, useEffect } from "react";
import { PiOvenBold } from "react-icons/pi";
import { RiGasStationFill, RiHome3Fill, RiHotelFill } from "@remixicon/react";
import { GiWashingMachine } from "react-icons/gi";
import { BiFridge } from "react-icons/bi";
import { MdOutlineCoffeeMaker, MdSevereCold } from "react-icons/md";
import Icon from "@mdi/react";
import { mdiDishwasher } from "@mdi/js";
import {
  Accordion,
  AccordionItem,
} from "@/components/ui/accordion";
import { Airplay } from "lucide-react";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<"Residential" | "Commercial" | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if we're in a mobile viewport - use 768px as breakpoint to match md: in Tailwind
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const residentialLinks = [
    {
      title: "Dishwasher Repair & Service",
      img: <Icon path={mdiDishwasher} color="white" size={1} />,
    },
    {
      title: "Refrigerator Repair & Service",
      img: <BiFridge color="white" size={22} />,
    },
    {
      title: "Washing Machine Repair & Service",
      img: <GiWashingMachine color="white" size={22} />,
    },
    {
      title: "Oven Repair & Service",
      img: <PiOvenBold size={22} color="white" />,
    },
  ];

  const commercialLinks = [
    {
      title: "Freezer Repair & Service",
      img: <MdSevereCold size={22} color="white" />,
    },
    {
      title: "Gas Dryer Repair & Service",
      img: <RiGasStationFill color="white" />,
    },
    {
      title: "Ice Machine Repair & Service",
      img: <Airplay color="white" size={22} />,
    },
    {
      title: "Ice Maker Repair & Service",
      img: <MdOutlineCoffeeMaker color="white" size={22} />,
    },
  ];

  const allLinks = [
    ...residentialLinks,
    ...commercialLinks,
    {
      title: <Link href='/GetFeatures'> All features {'>>'} </Link>,
      img: <MdOutlineCoffeeMaker color="white" size={22} />,
    },
  ];

  const getCurrentLinks = () => {
    if (selectedCategory === "Residential") return residentialLinks;
    if (selectedCategory === "Commercial") return commercialLinks;
    return allLinks;
  };

  // Modified to always toggle dropdown on click, regardless of device
  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
      setSelectedCategory(null);
    }
  };

  // Handle clicks outside to close the dropdown on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const dropdown = document.getElementById('dropdown-container');

      if (dropdown && !dropdown.contains(target) && isMobile && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isOpen]);

  return (
    <div id="dropdown-container" className="relative inline-block text-left">
      <div
        className="flex items-center cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
        onClick={handleToggleDropdown}
        onMouseEnter={handleMouseEnter}
      >
        <span>Services</span>
        <RiArrowDownSLine
          className={`ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div
          className="flex flex-col absolute mt-4 w-280 justify-center bg-white border border-gray-200 rounded-md shadow-lg z-50 left-0 md:left-[-500px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col md:flex-row">
            <div className="relative p-3 h-full w-full md:w-[35%] rounded overflow-hidden">
              <div className="px-2">
                <h1 className="text-2xl p-2 sm:text-3xl text-slate-900 font-bold">Services</h1>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <div
                      className={`flex items-center p-5 text-lg sm:text-xl cursor-pointer font-bold border-1 rounded-sm px-5 mt-5 ${
                        selectedCategory === "Residential" ? "bg-indigo-100" : ""
                      }`}
                      onClick={() => setSelectedCategory("Residential")}
                    >
                      <span className="flex items-center gap-5 rounded p-1">
                        <RiHome3Fill color="gray" />
                        Residential
                      </span>
                    </div>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <div
                      className={`flex items-center p-5 text-lg sm:text-xl cursor-pointer font-bold border-1 rounded-sm px-5 mt-5 ${
                        selectedCategory === "Commercial" ? "bg-indigo-100" : ""
                      }`}
                      onClick={() => setSelectedCategory("Commercial")}
                    >
                      <span className="flex items-center gap-5 rounded p-1">
                        <RiHotelFill className="text-gray" color="gray" />
                        Commercial
                      </span>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="w-full md:w-[65%] px-4 md:px-10">
              <div className="p-3 md:p-5 grid grid-cols-1 md:grid-cols-2 text-xl md:text-2xl mt-5 md:mt-10 gap-3 md:gap-5 sm:text-xl cursor-pointer font-bold border-1 bg-indigo-200 rounded-sm">
                {getCurrentLinks().map((link, idx) => (
                  <div
                    key={idx}
                    className="hover:text-indigo-500 mt-3 md:mt-5 flex font-bold text-sm md:text-md hover:underline gap-2"
                  >
                    <span className="bg-gray-300 rounded p-1">{link.img}</span>
                    {link.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 md:p-10">
            <div className="w-full p-4 md:p-10 text-white bg-indigo-900 rounded-2xl flex flex-col md:flex-row items-center justify-between">
              <h1 className="text-xl md:text-3xl text-center md:text-left mb-4 md:mb-0">
                <b>Let's talk </b>Explore Our Business Calling
              </h1>
              <Link
                className="bg-red-500 text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition inline-block"
                href="/appointment"
              >
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;