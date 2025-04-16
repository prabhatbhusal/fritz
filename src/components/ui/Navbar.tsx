import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const links=[
    {name:'Home',url:''},{name:'About',url:''},{name:'Services ',url:''},{name:'Gallery',url:''},{name:'Blogs',url:''},{name:'Contact Us',url:''}

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
          <Link href=''></Link>
        </div>
        </div>)
      )}


    </div>
  );
};

export default Navbar;
