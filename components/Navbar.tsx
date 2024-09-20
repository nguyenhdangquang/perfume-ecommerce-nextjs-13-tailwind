import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { logo } from "../assets";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 w-full mx-auto px-4 sticky top-0 bg-accentBG text-white z-50">
      <Link href="/">
        <Image src={logo} className="" alt="logo"/>
      </Link>
      <ul className="hidden md:flex">
        <Link href="/">
          <li className="p-4 cursor-pointer hover-underline-animation text-lg  text-accentColor ">
            HOME
          </li>
        </Link>
        <Link href="/shop">
          <li className="p-4 cursor-pointer hover-underline-animation text-lg  text-accentColor ">
            SHOP
          </li>
        </Link>
        <Link href="/recipes">
          <li className="p-4 cursor-pointer text-accentColor hover:border-accentColor hover:border-b-2">
            RECIPES
          </li>
        </Link>
        <Link href="/about-us">
          <li className="p-4 cursor-pointer hover-underline-animation text-lg  text-accentColor ">
            ABOUT
          </li>
        </Link>
        <Link href="/blog">
          <li className="p-4 cursor-pointer hover-underline-animation text-lg  text-accentColor ">
            BLOG
          </li>
        </Link>
      </ul>
      <div onClick={handleNav} className="md:hidden flex items-center gap-5">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 text-white w-[50%] h-full border-r border-r-accentColor bg-accentBG ease-in-out duration-500 z-50 p-10"
            : "ease-in-out duration-500 fixed top-0 left-[-100%] h-full z-50 p-10"
        }
      >
        <Link href="/">
          <Image src={logo} className="mb-5 underline underline-offset-1" alt="logo"/>
        </Link>
        <Link href="/">
          <li className="p-4 cursor-pointer text-accentColor hover:border-accentColor hover:border-b-2">
            HOME
          </li>
        </Link>
        <Link href="/shop">
          <li className="p-4 cursor-pointer text-accentColor hover:border-accentColor hover:border-b-2">
            SHOP
          </li>
        </Link>
        <Link href="/recipes">
          <li className="p-4 cursor-pointer text-accentColor hover:border-accentColor hover:border-b-2">
            RECIPES
          </li>
        </Link>
        <Link href="/about-us">
          <li className="p-4 cursor-pointer text-accentColor hover:border-accentColor hover:border-b-2">
            ABOUT
          </li>
        </Link>
        <Link href="/blog">
          <li className="p-4 cursor-pointer text-accentColor hover:border-accentColor hover:border-b-2">
            BLOG
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
