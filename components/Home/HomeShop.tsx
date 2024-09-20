import React from "react";
import {
  artical1,
  artical2,
  artical3,
  customer1,
  customer2,
  customer3,
  round,
} from "../../assets";
import Image from "next/image";
import Link from "next/link";
import {
  FaPlay,
} from "react-icons/fa";
import {
  FiArrowUpRight,
  FiCreditCard,
  FiDollarSign,
  FiFeather,
} from "react-icons/fi";
import { RiDoubleQuotesR } from "react-icons/ri";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HomeFeatures from "./HomeFeatures";

const HomeShop = () => {
  return (
    <>
      <div className="bg-[#100509] commonPadding">
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 lg:gap-20 py-20">
          <div className="flex justify-center items-center">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <FaPlay className="absolute text-[#AA3855]" />
              <Image
                src={round}
                className="h-full w-full block object-contain animate-spin"
                alt="round"
              />
            </div>
          </div>
          <div className="">
            <p className="text-[#777] text-justify">
              Scentronix is a tech company devoted to developing technology solutions and services for scent products and experiences. Our technology is focused on perfumes, raw materials, aromas, ambient scents as well as new formats. We have created the technology to run the Algorithmic Perfumery experience, including the scents produced by the platform. Scentronix also provides product research, design, and development services concerning perfumes.
              We would love to work with you to design aromas and perfumes that meet your needs.
            </p>
          </div>
        </div>

        <HomeFeatures />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-14 gap-10">
          <div className="flex flex-col gap-5 items-center justify-center">
            <div className="rounded-full  border border-[#AA3855] text-[#AA3855] hover:text-white hover:bg-[#AA3855] p-5 h-20 w-20">
              <FiDollarSign className="text-4xl " />
            </div>
            <p className="text-white">The best price</p>
            <p className="text-[#777] text-center  text-lg">
              The best price we provide is in accordance with the quality and
              quantity of digital we provide.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <div className="rounded-full  border border-[#AA3855] text-[#AA3855] hover:text-white hover:bg-[#AA3855] p-5 h-20 w-20">
              <FiFeather className="text-4xl " />
            </div>
            <p className="text-white">Unique style</p>
            <p className="text-[#777] text-center  text-lg">
              A unique and different styles from other art products gives a
              luxurious and minimalist impression.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <div className="rounded-full  border border-[#AA3855] text-[#AA3855] hover:text-white hover:bg-[#AA3855] p-5 h-20 w-20">
              <FiCreditCard className="text-4xl " />
            </div>
            <p className="text-white">Premium quality</p>
            <p className="text-[#777] text-center  text-lg">
              Premium quality that makes art products more elegant and more
              durable when you use it.
            </p>
          </div>
        </div>

        {/* happy customer say */}
        <div className="bg-[#080204]">
          <p className="text-4xl text-white text-center font-semibold py-10">
            Happy Customer Say
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
            <div className="flex flex-col gap-3 border border-[#777]  p-7">
              <RiDoubleQuotesR className="text-[#AA3855] text-5xl" />
              <p className="text-[#777] text-justify">
                I wish there were more than 5 stars i was well recommended and
                would definitely recommend anyone wanting products.
              </p>
              <div className="flex gap-3 ">
                <Image src={customer1} className="rounded-full" alt="rounder"/>
                <div className="flex flex-col mt-2">
                  <p className="text-[#AA3855] font-light">Robert Smith</p>
                  <p className="text-white">Designer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 border border-[#777] p-7">
              <RiDoubleQuotesR className="text-[#AA3855] text-5xl" />
              <p className="text-[#777] text-justify">
                I wish there were more than 5 stars i was well recommended and
                would definitely recommend anyone wanting products.
              </p>
              <div className="flex gap-3 ">
                <Image src={customer2} className="rounded-full" alt="rounder"/>
                <div className="flex flex-col mt-2">
                  <p className="text-[#AA3855] font-light">David Smith</p>
                  <p className="text-white">Artist</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 border border-[#777] p-7">
              <RiDoubleQuotesR className="text-[#AA3855] text-5xl" />
              <p className="text-[#777] text-justify">
                I wish there were more than 5 stars i was well recommended and
                would definitely recommend anyone wanting products.
              </p>
              <div className="flex gap-3 ">
                <Image src={customer3} className="rounded-full" alt="rounder"/>
                <div className="flex flex-col mt-2">
                  <p className="text-[#AA3855] font-light">David jones</p>
                  <p className="text-white">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Articals & news */}
        <div className="flex xs:flex-col lg:flex-row justify-between xs:pb-0 py-20">
          <p className="text-white text-3xl font-semibold">Blog & news</p>
          <Link
            href="/single-recipe"
            className="btn btn-style2-medium lg:block xs:hidden mt-5"
          >
            <div className="flex xs:py-2 text-white">
              <span>View ALL</span>
              <FiArrowUpRight />
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10">
          <div className="flex flex-col gap-3">
            <Image src={artical1} alt="artical"/>
            <p className="text-[#777] font-light">
              There comes a moment during wimbledon when, inevitably, the
              heavens open much banter stops.
            </p>
            <Link
              href="/single-recipe"
              className="btn btn-style2-medium w-48 "
            >
              <div className="flex  text-white">
                <span>read more</span>
                <FiArrowUpRight />
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Image src={artical2} alt="artical"/>
            <p className="text-[#777] font-light">
              There comes a moment during wimbledon when, inevitably, the
              heavens open much banter stops.
            </p>
            <Link
              href="/single-recipe"
              className="btn btn-style2-medium w-48 "
            >
              <div className="flex  text-white">
                <span>read more</span>
                <FiArrowUpRight />
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Image src={artical3} alt="artical"/>
            <p className="text-[#777] font-light">
              There comes a moment during wimbledon when, inevitably, the
              heavens open much banter stops.
            </p>
            <Link
              href="/single-recipe"
              className="btn btn-style2-medium w-48 "
            >
              <div className="flex  text-white">
                <span>read more</span>
                <FiArrowUpRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeShop;
