import React from "react";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./Dropdown";


const Navbar = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/aboutUs" },
    { name: <div className='flex'><span><DropdownMenu /></span></div>, url: "#" },
    { name: "Gallery", url: "/gallery" },
    { name: "Blogs", url: "/blogs" },
    { name: "Contact Us", url: "/contactUs" },
  ];
  return (
    <div>
      <div className="flex justify-between  items-center font-bold">
        <div className='h-20 w-50'>
        <Link href="/">
          <Image src="/Fritz.png" alt="logo" height={100} width={100} />
        </Link>
        </div>
        <div className='flex flex-row justify-between items-center gap-10'>
        {links.map((link,idx)=>(
          <div key={idx} className='flex flex-row justify-between'>
              <li className='list-none'>
                <Link href={link.url} className='font-bold font-Inter'>{link.name}</Link>

              </li>
        </div>))
        }
        </div>
        <div>
        <Link
                  className="mt-4 bg-red-500 text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition inline-block"
                  href="/appointment"
                >
                  Book an Service
                </Link>
        </div>

      </div>

    </div>
  );
};

export default Navbar;
