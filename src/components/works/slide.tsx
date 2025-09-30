"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import React from "react";

type slideProps = {
  slide: {
    pcimg: string[]
    spimg: string[]
  }
}

const slide = ({slide}:slideProps) => {
  return (
    <Swiper className="w-sm h-80 bg-amber-50 ">
      {slide.map((item, i) => (
        <SwiperSlide key={i} className="bg-[url('/images/works/pc-back.png')] bg-cover bg-center">
          <Image src={item.pcimg} alt="pc画像" width={100} height={100} />
        </SwiperSlide>
      ))}
      {slide.map((item, i) => (
      <SwiperSlide className="bg-[url('/images/works/sp-back.png')] bg-cover bg-center">
        <Image src={item.spimg} alt="pc画像" width={100} height={100} />
      </SwiperSlide>
    </Swiper>
  );
};

export default slide;
