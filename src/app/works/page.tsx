import React from 'react';
import Hero from "@/components/Hero";
import Slide from "@/components/works/slide";
import data from "@/data/worksdata.json";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-[#1e293b] py-12 flex flex-col items-center">
        <Slide data={data.slide01} />
      </div>
    </main>
  );
}
