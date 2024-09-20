import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import {
  FaStar,
} from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { IoPrintOutline } from "react-icons/io5";

import { GiEncirclement } from "react-icons/gi";

import { bottle5 } from "../assets";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NextBreads from "../components/NextBreads";
import {SinglePerfume, useGlobalContext} from "../context/GlobalContext";
import { useRouter } from 'next/router'

const SingleProduct = () => {
  const router = useRouter()
  const { state } = useGlobalContext();

  const recipe = useMemo<SinglePerfume>(() => {
    if (!router.query.id) return state.perfumeData[0];
    return state.perfumeData.find(ele => ele.id.toString() === router.query.id.toString())
  }, [router.query.id, state.perfumeData])

  const print = () => {
    window.print();
  }
  return (
    <>
      <div className="bg-[#100805] p-5 lg:p-10 lg:px-20 xl:px-40">
      <NextBreads/>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 lg:mt-12">
          <div className="flex flex-col gap-4 mr-6">
            <p className="text-2xl text-white">{recipe.title}</p>
            <p className="text-[#AA3855] text-xl">{`$${recipe.price}`}</p>
            <p className="text-white font-light">
              Availability:
              <span className="ml-4 text-green-600 text-sm"> In Stock</span>
            </p>
            <div className="w-14 text-white bg-green-900 rounded-full items-center p-1 flex justify-center gap-1">
              <p className="">4.0</p>
              <FaStar />
            </div>
            <p className="border border-slate-400"></p>
            <p className="text-accentColor text-2xl font-bold">
              Product Recipe
            </p>
            <div className="text-white flex gap-3">
              <p className="">Name:</p>
              <p className="text-sm text-gray-600">{recipe.title}</p>
            </div>
            <div className="text-white flex gap-3">
              <p className="">Desc:</p>
              <p className="text-justify text-sm text-gray-600">
                {recipe.desc}
              </p>
            </div>
            <div className="text-white flex gap-3 border-b-2 border-color-gray pb-8">
              <AiOutlineClockCircle className="text-white text-4xl"/>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-justify text-xs text-white-600 font-bold">
                    PREP
                  </p>
                  <p className="text-justify text-sm text-white-600">
                    10 mins
                  </p>
                </div>
                <div>
                  <p className="text-justify text-xs text-white-600 font-bold">
                    BAKE
                  </p>
                  <p className="text-justify text-sm text-white-600">
                    30 mins
                  </p>
                </div>
                <div>
                  <p className="text-justify text-xs text-white-600 font-bold">
                    TOTAL
                  </p>
                  <p className="text-justify text-sm text-white-600">
                    40 mins
                  </p>
                </div>
              </div>
            </div>
            <div className="text-white flex gap-3">
              <GiEncirclement className="text-white text-4xl"/>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-justify text-xs text-white-600 font-bold">
                    YIELD
                  </p>
                  <p className="text-sm text-white-600">
                    1 loaf, 12 generous servings
                  </p>
                </div>
                <div>
                  <button className='btn btn-style2-medium xs:ml-7 w-full flex items-center'><AiOutlinePlus className="text-white text-2xl mr-2"/><span>SAVE RECIPE</span></button>
                </div>
                <div>
                  <button className='btn btn-style2-medium xs:ml-7 w-full flex items-center' onClick={print}><IoPrintOutline className="text-white text-2xl mr-2"/><span>PRINT</span></button>
                </div>
              </div>
            </div>
          </div>
          <Image
              src={recipe.image}
              alt="product"
          />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
