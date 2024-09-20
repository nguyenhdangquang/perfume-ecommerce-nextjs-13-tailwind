import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { banner1 } from "../assets";
import Image from "next/image";
import Link from "next/link";
import { Slider } from "@material-ui/core";
import NextBreads from "../components/NextBreads";
import {useGlobalContext} from "../context/GlobalContext";

const Shop = () => {
  const { state } = useGlobalContext();
  const [grid, setGrid] = useState(true);

  const [value, setValue] = useState<{ min: number, max: number}>({ min: 0, max: 700 });

  const rangeSelector = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue({ ...value, min: newValue[0], max: newValue[1] });
  };

  const [filterData, setFilterData] = useState(state.perfumeData);

  useEffect(() => {
    const result = state.perfumeData.filter((res) => {
      return res.price >= value.min && res.price <= value.max;
    });

    setFilterData(result);
  }, [value, state.perfumeData]);

  return (
    <>
      <div className="bg-[#100805] xs:p-5 p-20">
        <NextBreads/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
          <div className="order-last lg:order-first ">
            <div className="border border-[#777] p-3 lg:mt-40 rounded">
              <div>
                <p className="text-accentColor text-lg my-3">Price</p>
                <Slider
                  value={[value.min, value.max]}
                  min={0}
                  max={700}
                  onChange={rangeSelector}
                  valueLabelDisplay="auto"
                  style={{
                    color: "#AA3855",
                  }}
                />
                <div className="flex  justify-between my-5">
                  <input
                    type={"number"}
                    value={value.min}
                    onChange={(e) => {
                      setValue({ ...value, min: e.target.value as number });
                    }}
                    className="w-[90px] bg-transparent border border-white p-5 text-gray-600 px-2 py-1"
                    min={0}
                    max={700}
                  />
                  <p className="text-gray-600 mt-3">To</p>
                  <input
                    type={"number"}
                    value={value.max}
                    onChange={(e) => {
                      setValue({ ...value, max: e.target.value as number });
                    }}
                    className="w-[90px] bg-transparent border border-white p-5 text-gray-600 px-2 py-1"
                    min={0}
                    max={700}
                  />
                </div>
              </div>
              <p className="border border-t-0 border-[#777]"></p>
              <div className="mt-5 flex flex-col gap-2 items-center justify-center">
                <Image src={state.perfumeData[3].image} alt="sample-product"/>
                <p className="text-white text-xl">AQUA PERFUME</p>
                <Link
                  href={`/single-product?id=${state.perfumeData[3].id}`}
                  className="text-[#AA3855] underline"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-3 mt-7">
            <Image src={banner1} alt="banner"/>

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
                {filterData.map((item, index) => {
                  return grid ? (
                    <Link href={`/single-product?id=${item.id}`} key={index}>
                      <div className="rounded">
                        <div className="relative">
                          <p className="absolute top-0 left-0 mt-5 pl-2 bg-accentlightBG rounded-r-full w-14 text-white z-50">
                            {item.discount}
                          </p>
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
                          <p className="text-[#777]">${item.price}</p>
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
                          <p className="text-[#777]">${item.price}</p>
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

export default Shop;
