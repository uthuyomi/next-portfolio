"use client";
import { Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import React from 'react'
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-[#1e293b] py-12 flex flex-col items-center">
        <Swiper className="w-sm h-80 bg-amber-50 ">
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}
