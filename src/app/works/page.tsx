import React from "react";
import Hero from "@/components/Hero";
import SlideL from "@/components/works/Slide-left";
import SlideR from "@/components/works/Slide-right";
import data from "@/data/worksdata.json";

export default function Home() {
  const base = data;
  return (
    <main>
      <Hero />
      <div className="bg-[#1e293b] py-12 flex flex-col items-center -mt-20">
        <SlideL data={base.slide01} />
        <SlideR data={base.slide02} />
        <SlideL data={base.slide03} />
        <SlideR data={base.slide04} />
        <SlideL data={base.slide05} />
        <SlideR data={base.slide06} />
      </div>
    </main>
  );
}
