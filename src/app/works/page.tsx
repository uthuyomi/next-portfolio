import React from "react";
import Hero from "@/components/Hero";
import Slide from "@/components/works/Slide";
import data from "@/data/worksdata.json";

export default function Home() {
  const base = data;
  return (
    <main>
      <Hero />
      <div className="bg-[#1e293b] py-12 flex flex-col items-center">
        <Slide data={base.slide01} />
        <Slide data={base.slide02} />
      </div>
    </main>
  );
}
