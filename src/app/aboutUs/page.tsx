"use client";
import React from "react";
import Image from "next/image";
import { GoGoal } from "react-icons/go";
import Link from "next/link";
import { TbBulb } from "react-icons/tb";
import { IoStar } from "react-icons/io5";

const page = () => {
  const mission = [
    {
      logo: <GoGoal className="w-16 h-16 sm:w-24 sm:h-24 text-sky-900" />,
      title: "Our Mission",
      content:
        "Our mission is to provide our clients with peace of mind, ensuring their homes are serviced by the best professionals in the industry. With FITZ’S Appliance Repair, you can rest assured that your appliances are in capable hands.",
    },
    {
      logo: <TbBulb className="w-16 h-16 sm:w-24 sm:h-24 text-sky-900" />,
      title: "Our Vision",
      content:
        "To be the most trusted appliance repair service in our community by delivering dependable solutions, unmatched expertise, and friendly customer care. We envision a future where every household and business we serve enjoys peace of mind knowing their appliances are in reliable hands.",
    },
  ];

  const cards = [
    {
      name: "Ivy M.",
      title: "Electrical Repair",
      content:
        "Etienne took very good care of my complaints in the stove and everything is working now,thankyou guys very much.",
    },
    {
      name: "Donna B.",
      title: "Refrigerator Services",
      content:
        "I have used FITZ's Appliance LLC. many times and I am always happy with their services .",
    },
    {
      name: "Ana R.",
      title: "HVAC Services",
      content: "Excellent service and repair. I will be using them again.",
    },
    {
      name: "Armando S.",
      title: "Oven and Stove Repair",
      content:
        "Excellent service. Very knowledgeable with very much experience. Explains everything in detail and very well. Highly recommended.!",
    },
    {
      name: "Molly Hall",
      title: "Washing Machine Repair",
      content:
        "Brandon did an amazing job and was incredibly helpful at explaining the issue and exactly how to fix it. I HIGHLY recommend him, I will for sure use him again in the future!",
    },
    {
      name: "Bridget Wilson",
      title: "HVAC Services",
      content:
        "My technician was polite and professional. He was very knowledgeable and gave me some good tips on maintenance. ",
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 mx-auto max-w-[1400px] py-10 w-full">
        <div className="flex flex-col w-full lg:w-[100%] gap-10">
          <div
            className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center items-center p-4 sm:p-8 rounded-xl w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/image2.png')" }}
          >
            {mission.map((link, idx) => (
              <div
                className="flex flex-col justify-center items-center flex-1"
                key={idx}
              >
                <span className="text-sky-900">{link.logo}</span>
                <h1 className="font-bold text-xl sm:text-2xl text-sky-900">{link.title}</h1>
                <p>{link.content}</p>
              </div>
            ))}
          </div>
          {/* boxes */}
          <div className="flex flex-col justify-center w-full gap-3">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-blue-500 font-bold text-md">Our Customers</h1>
              <h1 className="text-slate-900 font-bold text-3xl">
                See what our
              </h1>
              <h2 className="text-slate-900 font-bold text-3xl">
                customers are saying
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((link, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-5">
                <div className="flex flex-row flex-wrap gap-5 items-center">
                  <div className="flex justify-center">
                    <span>
                      <IoStar color="orange" size={25} />
                    </span>
                    <span className="font-bold">5.0</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="font-bold">{link.name}</h1>
                    <h2 className="text-indigo-500 underline">{link.title}</h2>
                  </div>
                </div>
                <div>
                  <p>{link.content}</p>
                </div>
                <div></div>
              </div>
            ))}
          </div>

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
                <h1 className="text-xl sm:text-2xl font-bold">
                  We Approach each endeavor with unwavering dedication, treating
                  every detail as a top priority.
                </h1>
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
        </div>
      </div>
    </>
  );
};

export default page;