"use client";

import Image from "next/image";
import { PiOvenBold } from "react-icons/pi";
import { RiGasStationFill, RiHome3Fill, RiHotelLine } from "@remixicon/react";
import { GiWashingMachine } from "react-icons/gi";
import { BiFridge } from "react-icons/bi";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import Icon from "@mdi/react";
import { mdiDishwasher } from "@mdi/js";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Airplay, LocateFixed } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdSevereCold } from "react-icons/md";

const page = () => {


  const links = [
    {
      title: "Dishwasher Repair & Service",
      img: <Icon path={mdiDishwasher} color="white" size={1} />,
    },
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
      title: "Oven Repair & Service",
      img: <PiOvenBold size={22} color="white" />,
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
      title: "Ice Maker Repair & Service",
      img: <MdOutlineCoffeeMaker color="white" size={22} />,
    },
    {
      title: <Link href='/GetFeatures'> All features {'>>'} </Link>,
      img: <MdOutlineCoffeeMaker color="white" size={22} />,
    },
  ];

  const texts = [
    {
      title: "Dishwasher Repair & Service",
      img: "/dish.png",
      content1:
        "FITZ'S Appliance Repair offers expert dishwasher repair service to help you maintain a clean and hassle-free kitchen. From poor drainage to strange noises and ineffective cleaning, our technicians can quickly identify and resolve any problem. We understand the importance of a working dishwasher and are dedicated to restoring its efficiency.",
      content2:
        "Don’t let a malfunctioning dishwasher disrupt your daily routine. Whether it’s a minor issue or a significant breakdown, we’re here to repair your dishwasher promptly. With our reliable service, you can trust us to extend the life of your appliance and bring convenience back to your kitchen.",
    },
    {
      title: "Freezer Repair & Service",
      img: "/freeze.png",
      content1:
        "FITZ'S Appliance Repair offers expert freezer repair service to help you maintain a clean and hassle-free kitchen. From poor drainage to strange noises and ineffective cleaning, our technicians can quickly identify and resolve any problem. We understand the importance of a working dishwasher and are dedicated to restoring its efficiency.",
      content2:
        "A malfunctioning freezer with temperature inconsistency can quickly spoil a freezer full of food, which is why this kitchen appliance repair should never be ignored.",
    },
    {
      title: "Gas Dryer Repair & Service",
      img: "/gas.png",
      content1:
        "Our teams of service professionals provide reliable repairs, flexible scheduling, and upfront pricing with no surprises. We have over 30 years of experience, so whether you need a major repair or a dryer vent cleaning, your appliance is in good hands.",
      content2:
        "Don’t let a malfunctioning dishwasher disrupt your daily routine. Whether it’s a minor issue or a significant breakdown, we’re here to repair your dryer promptly. With our reliable service, you can trust us to extend the life of your appliance and bring convenience back to your kitchen.",
    },
    {
      title: "Ice Machine Repair & Service",
      img: "/dish.png",
      content1:
        "FITZ'S Appliance Repair offers expert ice machine repair service to help you maintain a clean and hassle-free kitchen. From poor drainage to strange noises and ineffective cleaning, our technicians can quickly identify and resolve any problem. We understand the importance of a working dishwasher and are dedicated to restoring its efficiency.",
      content2:
        "Don’t let a malfunctioning dishwasher disrupt your daily routine. Whether it’s a minor issue or a significant breakdown, we’re here to repair your dishwasher promptly. With our reliable service, you can trust us to extend the life of your appliance and bring convenience back to your kitchen.",
    },
    {
      title: "Oven Repair & Service",
      img: "/dish.png",
      content1:
        "FITZ'S Appliance Repair offers expert ice machine repair service to help you maintain a clean and hassle-free kitchen. From poor drainage to strange noises and ineffective cleaning, our technicians can quickly identify and resolve any problem. We understand the importance of a working dishwasher and are dedicated to restoring its efficiency.",
      content2:
        "Don’t let a malfunctioning dishwasher disrupt your daily routine. Whether it’s a minor issue or a significant breakdown, we’re here to repair your dishwasher promptly. With our reliable service, you can trust us to extend the life of your appliance and bring convenience back to your kitchen.",
    },
    {
      title: "Refrigerator Repair & Service",
      img: "/dish.png",
      content1:
        "FITZ'S Appliance Repair offers expert ice machine repair service to help you maintain a clean and hassle-free kitchen. From poor drainage to strange noises and ineffective cleaning, our technicians can quickly identify and resolve any problem. We understand the importance of a working dishwasher and are dedicated to restoring its efficiency.",
      content2:
        "Don’t let a malfunctioning dishwasher disrupt your daily routine. Whether it’s a minor issue or a significant breakdown, we’re here to repair your dishwasher promptly. With our reliable service, you can trust us to extend the life of your appliance and bring convenience back to your kitchen.",
    },
    {
      title: "Washing Machine Repair & Service",
      img: "/dish.png",
      content1:
        "FITZ'S Appliance Repair offers expert ice machine repair service to help you maintain a clean and hassle-free kitchen. From poor drainage to strange noises and ineffective cleaning, our technicians can quickly identify and resolve any problem. We understand the importance of a working dishwasher and are dedicated to restoring its efficiency.",
      content2:
        "Don’t let a malfunctioning dishwasher disrupt your daily routine. Whether it’s a minor issue or a significant breakdown, we’re here to repair your dishwasher promptly. With our reliable service, you can trust us to extend the life of your appliance and bring convenience back to your kitchen.",
    },
    {
      title: "Ice Maker Repair & Service",
      img: "/dish.png",
      content1:
        "FITZ'S Appliance Repair offers expert ice machine repair service to help you maintain a clean and hassle-free kitchen. From poor drainage to strange noises and ineffective cleaning, our technicians can quickly identify and resolve any problem. We understand the importance of a working dishwasher and are dedicated to restoring its efficiency.",
      content2:
        "Don’t let a malfunctioning dishwasher disrupt your daily routine. Whether it’s a minor issue or a significant breakdown, we’re here to repair your dishwasher promptly. With our reliable service, you can trust us to extend the life of your appliance and bring convenience back to your kitchen.",
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 mx-auto max-w-[1400px] py-50 px-4 w-full">
        <div className="relative p-5 h-170 w-full lg:w-[25%] bg-indigo-100 rounded overflow-hidden">
          <div className="px-2">
            <h1 className="text-2xl sm:text-3xl text-slate-900 font-bold">Services</h1>
            <p className="text-sm sm:text-base">Check Availability For The Service</p>
            <form>
              <button className="absolute top-24 sm:top-21.5 left-8" type="button">
                <LocateFixed color="gray" />
              </button>
              <input
                type="text"
                className="py-3 px-10 bg-white rounded-4xl w-full sm:w-auto"
                placeholder="Enter Your Zip Code"

              />
              <Button
                variant="destructive"
                className="absolute top-24 sm:top-20.5 left-56 sm:left-56 rounded-full"
              >
                LOCATE
              </Button>
              
            </form>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg sm:text-xl cursor-pointer font-bold border-1 bg-indigo-200 rounded-sm px-5 mt-5">
                <span className='bg-indigo-500  rounded p-1'><RiHome3Fill color='white'/> </span>Residential
                </AccordionTrigger>
                <div className="px-5">
                  {links.map((link, idx) => (
                    <AccordionContent
                      key={idx}
                      className="hover:text-indigo-500 flex font-medium text-sm sm:text-md hover:underline gap-2"
                    >
                      <span className="bg-gray-300 rounded p-1">{link.img}</span>
                      {link.title}
                    </AccordionContent>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">

                  </div>
                </div>
              </AccordionItem>
              <AccordionItem value='item-2' >
              <AccordionTrigger className="text-lg sm:text-xl cursor-pointer font-bold border-1 bg-indigo-200 rounded-sm px-5 mt-5">
              <RiHotelLine />
              Commercial
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[75%]">
          <div className="flex items-center">
            <div className="relative w-full h-[200px] sm:h-[300px] flex items-center justify-start">
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Image
                  src="/image.png"
                  alt="Appliance Repair Service"
                  layout="fill"
                  objectFit="cover"
                  className="z-0"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
              </div>

              {/* Content */}
              <div className="relative z-20 max-w-lg p-4 sm:p-6 text-white">
                <h1 className="text-2xl sm:text-3xl font-bold">Residential Services</h1>
                <p className="text-base sm:text-lg mt-2">
                  Comprehensive Appliance Repair Services Covering Miami-Dade and Monroe Counties for ALL Major Appliances
                </p>
                <Link
                  className="mt-4 bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition inline-block"
                  href="/appointment"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full pt-5">
            <div></div>
          </div>

          <hr className="h-1 w-full my-4" />

          <div className="mt-10 flex flex-col gap-4">
            {texts.map((link, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:odd:flex-row md:even:flex-row-reverse gap-7 md:gap-10 "
              >
                <div className="flex-1 flex flex-col min-h-0">
                  <h1 className="text-slate-900 text-2xl sm:text-3xl font-bold">
                    {link.title}
                  </h1>
                  <div className="flex flex-col gap-5">
                    <p className="text-sm sm:text-base">{link.content1}</p>
                    <p className="text-sm sm:text-base">{link.content2}</p>
                  </div>
                  <Link
                    href=""
                    className="text-white hover:underline mt-2 bg-slate-600 w-40 flex items-center justify-center p-3 rounded-full"
                  >
                    Read More
                  </Link>
                </div>

                <div className="flex-1 relative h-[200px] sm:h-[300px] md:h-[400px] min-h-[200px]">
                  <Image
                    src={link.img}
                    alt={link.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;