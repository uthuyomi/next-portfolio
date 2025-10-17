"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Slide from "@/components/works/Slide";
import worksData from "@/data/worksdata.json";
import Particle from "@/components/common/Particles";

export default function WorksPage() {
  // 言語切り替えボタンだけ残す
  const [currentLang, setCurrentLang] = useState<"ja" | "en">("ja");

  return (
    <>
      <Header onLangChange={setCurrentLang} />
      <Particle />
      <main className="relative z-20 pt-30 pl-5 pr-5">
        <div className="py-12 flex flex-col items-center -mt-20">
          {Object.entries(worksData).map(([key, item], i) => (
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
