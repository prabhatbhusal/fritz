"use client";

import { useState } from "react";
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

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center cursor-pointer px-4 text-gray-700 hover:bg-gray-100 rounded-md"
        onMouseEnter={() => setIsOpen(true)}
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
          className="flex flex-col absolute mt-4 w-280 bg-white border border-gray-200 rounded-md shadow-lg z-100 left-[-500px]"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => {
            setIsOpen(false);
            setSelectedCategory(null);
          }}
        >
          <div className="flex flex-row">
            <div className="relative p-5 h-120 w-full lg:w-[35%] rounded overflow-hidden">
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
            <div className="w-[75%] px-10">
              <div className="p-5 grid grid-cols-2 text-2xl mt-10 gap-5 sm:text-xl cursor-pointer font-bold border-1 bg-indigo-200 rounded-sm">
                {getCurrentLinks().map((link, idx) => (
                  <div
                    key={idx}
                    className="hover:text-indigo-500 mt-5 flex font-bold text-[17px] sm:text-md hover:underline gap-2"
                  >
                    <span className="bg-gray-300 rounded p-1">{link.img}</span>
                    {link.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="w-full p-10 text-white bg-indigo-900 rounded-2xl flex items-center justify-between">
              <h1 className="text-3xl">
                <b>Let's talk </b>Explore Our Business Calling
              </h1>
              <Link
                className="mt-4 bg-red-500 text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition inline-block"
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