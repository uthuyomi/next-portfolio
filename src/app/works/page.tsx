import React from "react";
import Hero from "@/components/Hero";
import Slide, {SlideItem} from "@/components/works/Slide";
import data from "@/data/worksdata.json";
import Particle from "@/components/common/Particles";

export default function Home() {
  const works: Record<string, SlideItem> = data;
  return (
    <>
      <Particle />
      <main className="relative z-20 pl-5 pr-5">
        <div className="py-12 flex flex-col items-center -mt-20">
          {Object.entries(works).map(([key, item], i) => (
            <Slide
              key={key}
              data={item}
              align={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </main>
    </>
  );
}
