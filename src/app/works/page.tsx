import React from "react";
import Hero from "@/components/Hero";
import Slide, {SlideItem} from "@/components/works/Slide";
import data from "@/data/worksdata.json";

export default function Home() {
  const works: Record<string, SlideItem> = data;
  return (
    <main>
      <Hero />
      <div className="bg-[#1e293b] py-12 flex flex-col items-center -mt-20">
        {Object.entries(works).map(([key, item], i) => (
          <Slide key={key} data={item} align={ i % 2 === 0 ? "left" : "right"} />
        ))}
      </div>
    </main>
  );
}
