import Link from "next/link";
import React from "react";
import { FaCcAmex, FaFacebook, FaInstagram, FaPaypal, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { SiPhonepe } from "react-icons/si";
import { GrAmex } from "react-icons/gr";
import Image from "next/image";
import { logo } from "../assets";

const Footer = () => {
  return (
    <>
      <div className="bg-[#080204] commonPadding">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
          <div className="col-span-2 flex flex-col gap-5">
            <Image src={logo} alt="logo"/>
            <p className="text-[#777]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="flex gap-5 mt-5">
              <FiHeadphones className="text-4xl text-[#AA3855]" />
              <div className="flex flex-col  text-white">
                <p className="">Customer care:-</p>
                <p className="mt-2">(+91) 0123 456 7890</p>
              </div>
            </div>
            <div className="flex gap-6 mt-5">
            <FaFacebook className="text-3xl text-white hover:text-blue-500"/>
            <FaInstagram className="text-3xl text-white hover:text-pink-900"/>
            <FaWhatsapp className="text-3xl text-white hover:text-green-600"/>
            <FaTwitter className="text-3xl text-white hover:text-blue-300"/>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[#AA3855]">Contact us</p>
            <p className="text-[#777]">Phone: +1 234 567 890</p>
            <p className="text-[#777]">Email: info@demo.com</p>
          </div>
        </div>
      </div>
      <div className="bg-[#100509] flex justify-between items-center p-5">
        <div className="">
          <p className="text-[#777] xs:text-xs">Copyright © 2024</p>
        </div>
        <div className="flex">
          <div className="flex xs:gap-2 lg:gap-5 ">
            <FcGoogle className="h-7 w-7 rounded-md bg-white" />
            <FaPaypal className="h-7 w-7 rounded-md bg-sky-400 text-slate-900" />
            <SiPhonepe className="h-7 w-7 p-1 rounded-md bg-purple-700 text-purple-100" />
            <GrAmex className="h-7 w-7 p-1 rounded-md bg-yellow-700  text-purple-200" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
