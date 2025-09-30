"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./slide.module.scss";
import Image from "next/image";
import React from "react";
import pcOuter from "../../../public/images/works/pc-back.png";
import spOuter from "../../../public/images/works/sp-back.png";

type slideProps = {
  data: {
    pcimg: string;
    spimg: string;
  };
};

const Slide = ({ data }: slideProps) => {
  return (
    <Swiper className="w-sm aspect-[1920/1280] bg-amber-50 ">
      <SwiperSlide className={`${style["slide-pc"]} bg-cover bg-center`}>
        <Image
          className={style.slideOuter}
          src={pcOuter}
          alt="背景画像"
          width={100}
          height={100}
        />
        <div className={style.slideInner}>
          <Image src={data.pcimg} alt="pc画像" width={1920} height={1280} unoptimized/>
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${style["slide-sp"]} bg-cover bg-center`}>
        <Image
          className={style.slideOuter}
          src={spOuter}
          alt="背景画像"
          width={100}
          height={100}
        />
        <div className={style.slideInner}>
          <Image src={data.spimg} alt="pc画像" width={1920} height={1280} unoptimized/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slide;
