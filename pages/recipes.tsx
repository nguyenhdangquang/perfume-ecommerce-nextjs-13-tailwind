import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {  BsGridFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import NextBreads from "../components/NextBreads";
import {useGlobalContext} from "../context/GlobalContext";

const Recipes = () => {
  const { state } = useGlobalContext();
  const [grid, setGrid] = useState(true);

  return (
    <>
      <div className="bg-[#100805] xs:p-5 p-20">
        <NextBreads/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pl-60">
          <div className="col-span-3 mt-7">
            <div className="lg:order-last col-span-3">
              <div className="mb-4 font-bold text-[#777]  h-12 p-1 px-1 lg:px-3 justify-between flex items-center rounded">
                <div className="flex gap-3 cursor-pointer text-lg">
                  <BsGridFill
                    className={grid ? "text-accentColor" : ""}
                    onClick={() => setGrid(true)}
                  />
                  <FaBars
                    className={grid ? "" : "text-accentColor"}
                    onClick={() => setGrid(false)}
                  />
                </div>
              </div>
              <div
                className={`${
                  grid
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-7"
                    : "mt-7 flex flex-col gap-5"
                }`}
              >
                {state.perfumeData?.map((item, index) => {
                  return grid ? (
                    <Link href={`/single-product?id=${item.id}`} key={index}>
                      <div className="rounded">
                        <div className="relative">
                          <div className="relative flex justify-center group overflow-hidden">
                            <Image
                              src={item.image}
                              alt="product"
                              className="h-[315px] w-full block group-hover:hidden transition-all ease-in-out delay-150 object-cover rounded rounded-b-none"
                            />
                            <Image
                              src={item.altImage}
                              alt="product"
                              className="h-[315px] w-full transition-all ease-in-out delay-150 hidden group-hover:block object-cover rounded rounded-b-none"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <Link href={`/single-product?id=${item.id}`} key={index}>
                      <div className="rounded flex flex-col lg:flex-row gap-5">
                        <div className="relative w-full lg:min-w-[315px] ">
                          <p className="absolute top-0 left-0 mt-5 pl-2 bg-accentlightBG rounded-r-full w-14 text-white z-50">
                            {item.discount}
                          </p>
                          <div className="relative flex justify-center group overflow-hidden">
                            <Image
                              src={item.image}
                              alt="product"
                              className="h-[315px] w-full lg:w-[315px] block group-hover:hidden transition-all ease-in-out delay-150 object-cover rounded rounded-b-none"
                            />
                            <Image
                              src={item.altImage}
                              alt="product"
                              className="h-[315px] w-full lg:w-[315px] transition-all ease-in-out delay-150 hidden group-hover:block object-cover rounded rounded-b-none"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <p className="text-[#777]">{item.title}</p>
                          <p className="text-[#777]">${item.price}</p>
                          <p className="text-[#777]">{item.desc}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipes;
