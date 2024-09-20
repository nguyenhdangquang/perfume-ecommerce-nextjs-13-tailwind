import React, { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight, FaRegStar } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {useGlobalContext} from "../../context/GlobalContext";

const HomeFeatures = () => {
  const { state } = useGlobalContext()
  const [filterData, setFilterData] = useState(state.perfumeFeatureData);

  const handleFilter = useCallback((param) => {
    setFilterData(state.perfumeFeatureData?.filter((res) => {
      return res[param] === true;
    }))
  }, [state.perfumeFeatureData])

  return (
    <>
      <div className="flex xs:flex-col lg:flex-row justify-between ">
        <p className="text-white text-3xl font-semibold">Featured Products</p>
        <Link href="/shop" className="btn btn-style2-medium xs:hidden lg:block">
          <div className="flex xs:py-2 text-white">
            <span>View ALL</span>
            <FiArrowUpRight />
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 py-5 items-center justify-center">
        <div className="">
          <button
            onClick={() => handleFilter("best_seller")}
            className="flex items-center  py-4 gap-5 text-white font-light hover:text-[#AA3855] text-lg"
          >
            <p className="">BEST SELLER</p>
            <FaArrowRight />
          </button>
          <button
            onClick={() => handleFilter("new_products")}
            className="flex items-center  py-4 gap-5 text-white font-light  hover:text-[#AA3855] text-lg"
          >
            <p className="">NEW PRODUCTS</p>
            <FaArrowRight />
          </button>
          <button
            onClick={() => handleFilter("top_rating")}
            className="flex items-center  py-4 gap-5 text-white font-light  hover:text-[#AA3855] text-lg"
          >
            <p className="">TOP RATING</p>
            <FaArrowRight />
          </button>
          <button
            onClick={() => handleFilter("featured_item")}
            className="flex items-center  py-4 gap-5 text-white font-light  hover:text-[#AA3855] text-lg"
          >
            <p className="">FEATURED ITEM</p>
            <FaArrowRight />
          </button>
        </div>
        {/* swiper */}
        <div className="lg:col-span-3">
          <Swiper
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {filterData?.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="rounded">
                    <div className="relative">
                      <p className="absolute top-0 left-0 mt-5 pl-2 bg-accentlightBG rounded-r-full w-14 text-white z-50">
                        {item.discount}
                      </p>
                      <div className="relative flex justify-center group overflow-hidden">
                        <Image
                          src={item.image}
                          alt=""
                          className="h-[315px] w-full block group-hover:hidden transition-all ease-in-out delay-150 object-cover rounded rounded-b-none"
                        />
                        <Image
                          src={item.altImage}
                          alt=""
                          className="h-[315px] w-full transition-all ease-in-out delay-150 hidden group-hover:block object-cover rounded rounded-b-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row gap-1 items-center justify-center mt-2">
                        {[...new Array(Math.floor(Number(item.rating)))].map(
                          (_, idx) => {
                            return (
                              <FaRegStar className="text-yellow-600 mt-3" key={idx}/>
                            );
                          }
                        )}
                      </div>
                      <p className="text-[#777] text-center">{item.title}</p>
                      <p className="text-[#777] text-center">${item.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <Link
          href="/shop"
          className="btn btn-style2-medium lg:hidden xs:block mt-5"
        >
          <div className="flex xs:py-2 text-white">
            <span>View ALL</span>
            <FiArrowUpRight />
          </div>
        </Link>
      </div>
      <div className="border border-b-0  border-[#777] mt-10 "></div>
    </>
  );
};

export default HomeFeatures;
