"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./Dropdown";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/ theretoUs" },
    { name: <DropdownMenu />, url: "#" },
    { name: "Gallery", url: "/gallery" },
    { name: "Blogs", url: "/blogs" },
    { name: "Contact Us", url: "/contactUs" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <div className="h-12 w-24 sm:h-16 sm:w-32 md:h-20 md:w-40">
          <Link href="/">
            <Image src="/Fritz.png" alt="logo" height={100} width={100} className="object-contain" />
          </Link>
        </div>
        <div className="hidden md:flex flex-row items-center gap-6 lg:gap-10">
          {links.map((link, idx) => (
            <div key={idx} className="flex items-center">
              <Link
                href={link.url}
                className="font-bold font-Inter text-sm lg:text-base text-gray-700 hover:text-indigo-500"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <Link
            className="bg-red-500 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-medium hover:bg-orange-600 transition text-sm md:text-base"
            href="/appointment"
          >
            Book a Service
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white border-t border-gray-200 px-4 py-4">
          {links.map((link, idx) => (
            <div key={idx} className="w-full py-2">
              <Link
                href={link.url}
                className="font-bold font-Inter text-base text-gray-700 hover:text-indigo-500 block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </div>
          ))}
          <Link
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition text-base w-full text-center"
            href="/appointment"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Service
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;