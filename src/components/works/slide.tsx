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

type slideProps = {
  data: {
    pcimg: string;
    spimg: string;
    skill: string[];
  };
};

const Slide = ({ data }: slideProps) => {
  return (
    <>
    <Swiper
      modules={[Navigation, Pagination]} // ← モジュールを登録
      navigation
      pagination={{ clickable: true }} // ← ドット有効化
      className="w-sm aspect-[1920/1280] bg-amber-50 mt-7"
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
      <div>
        <ul>
          {data.skill.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      </>
  );
};

export default Slide;
