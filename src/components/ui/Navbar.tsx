import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const links=[
    {name:'Home',url:'/'},{name:'About',url:'/aboutUs'},{name:'Services ',url:'/services'},{name:'Gallery',url:'/gallery'},{name:'Blogs',url:'/blogs'},{name:'Contact Us',url:'/contactUs'}

  ]
  return (
    <div>
        {links.map((link,idx)=>(
        <div key={idx} className=''>
        <Link href='/'><Image src='/Fritz.png' alt='logo' fill   /></Link>
        <div>
        <li><Link href={link.url}>{link.name}</Link></li>
        </div>
        <div>
          <Link href='/bookService'>Book a Service</Link>
        </div>
        </div>)
      )}


    </div>
  );
};

export default Navbar;
