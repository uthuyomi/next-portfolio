"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./slide.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import pcOuter from "../../../public/images/works/pc-back.png";
import spOuter from "../../../public/images/works/sp-back.png";

type SlideItem = {
  pcimg: string;
  spimg: string;
  link: string;
  skill: string[];
};

type SlideProps = {
  data: SlideItem;
  align?: "left" | "right";
};

const Slide = ({ data, align = "left" }: SlideProps) => {
  return (
    <div className={`${style[`slide-${align}`]} relative mt-20`}>
      {/* ✅ スライダー前景レイヤー */}
      <div className="relative w-full max-w-lg aspect-[1920/1280] min-h-[200px] mx-auto rounded-2xl border border-gray-700 bg-gray-800/70 shadow-lg shadow-teal-500/10 overflow-hidden z-20">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="absolute inset-0 !w-full !h-full"
        >
          {/* PCスライド */}
          <SwiperSlide className={`${style["slide-pc"]} bg-cover bg-center`}>
            <Image
              className={`${style.slideOuter} opacity-90`}
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
                className="rounded-lg border border-gray-600 shadow-md shadow-teal-400/10"
              />
            </div>
          </SwiperSlide>

          {/* SPスライド */}
          <SwiperSlide className={`${style["slide-sp"]} bg-cover bg-center`}>
            <Image
              className={`${style.slideOuter} opacity-90`}
              src={spOuter}
              alt="背景画像"
              width={100}
              height={100}
            />
            <div className={style.slideInner}>
              <Image
                src={data.spimg}
                alt="sp画像"
                width={1920}
                height={1280}
                unoptimized
                className="rounded-lg border border-gray-600 shadow-md shadow-teal-400/10"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* ✅ SkillText 背面レイヤー */}
      <div
        className={`${style["slideText"]} absolute top-0 w-lg aspect-[1920/1280] text-gray-200 z-10`}
      >
        <ul className="backdrop-blur-sm h-full bg-gray-800/60 border border-gray-700 rounded-2xl shadow-md shadow-teal-500/10 overflow-hidden">
          <li className="bg-teal-500/20 text-teal-300 font-semibold text-sm tracking-widest uppercase pt-3 pb-3 border-b border-gray-700 text-center">
            Skill Set
          </li>
          {data.skill.map((item, i) => (
            <li
              key={i}
              className="p-2 text-sm text-gray-300 border-t border-gray-700/40 hover:text-teal-400 transition-colors text-center"
            >
              {item}
            </li>
          ))}
          <li>
            <Link
              href={data.link}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/95 text-slate-900 font-medium px-6 py-2 shadow-[0_4px_12px_rgba(255,255,255,0.1)] ring-1 ring-white/40 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-[0_0_14px_rgba(0,255,255,0.25)] hover:-translate-y-[1px] active:translate-y-[1px] mt-5"
            >
              more
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Slide;
