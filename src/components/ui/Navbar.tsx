import React from "react";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./Dropdown";
import { RiArrowDownSLine } from "@remixicon/react";
const Navbar = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/aboutUs" },
    { name: <div className='flex'><span>Services</span><RiArrowDownSLine /></div>, url: "/services" },
    { name: "Gallery", url: "/gallery" },
    { name: "Blogs", url: "/blogs" },
    { name: "Contact Us", url: "/contactUs" },
  ];
  return (
    <div>
      <div className="flex justify-between  items-center font-bold">
        <div>
        <Link href="/">
          <Image src="/Fritz.png" alt="logo" width={100} height={100} />
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
        <Link href="/bookService">Book a Service</Link>
        </div>

      </div>
      <DropdownMenu/>
    </div>
  );
};

export default Navbar;
