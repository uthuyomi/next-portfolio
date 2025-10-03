"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./slide.module.scss";
import Image from "next/image";
import React from "react";
import pcOuter from "../../../public/images/works/pc-back.png";
import spOuter from "../../../public/images/works/sp-back.png";

type SlideItem = {
  data: {
    pcimg: string;
    spimg: string;
    skill: string[];
  };
};

type SlideProps = {
  dat: SlideItem;
  align?: "left" | "right";
}

const Slide = ({ data, align = "left" }: SlideProps) => {
  return (
    <div className={`${style[`slide-${align}`]} relative mt-20`}>
      <Swiper
        modules={[Navigation, Pagination]} // ← モジュールを登録
        navigation
        pagination={{ clickable: true }} // ← ドット有効化
        className="absolute top-0 w-lg aspect-[1920/1280] bg-amber-50"
      >
        <SwiperSlide className={`${style["slide-pc"]} bg-cover bg-center`}>
          <Image
            className={style.slideOuter}
            src={pcOuter}
            alt="背景画像"
            width={100}
            height={100}
          />
          <div className={style.slideInner}>
            <Image
              src={data.pcimg}
              alt="pc画像"
              width={1920}
              height={1280}
              unoptimized
            />
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
            <Image
              src={data.spimg}
              alt="pc画像"
              width={1920}
              height={1280}
              unoptimized
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        className={`${style["slideText"]} absolute top-0 w-lg aspect-[1920/1280] text-white border-white border`}
      >
        <ul className="flex flex-wrap h-full items-center content-center">
          <li className="p-1">スキルセット</li>
          {data.skill.map((item, i) => (
            <li key={i} className="p-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slide;
