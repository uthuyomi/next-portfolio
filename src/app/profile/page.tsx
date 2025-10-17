"use client";
import React, { useState } from "react";
import Particle from "@/components/common/Particles";
import Header from "@/components/common/Header";
import profileData from "@/data/profile.json"; // ✅ import名を修正
import Image from "next/image";

const Page = ({ lang = "ja" }: { lang?: "ja" | "en" }) => {
  const [currentLang, setCurrentLang] = useState(lang);
  const data = profileData[currentLang]; // ✅ dataの二重定義を修正

  return (
    <>
      <Header onLangChange={setCurrentLang} />
      <Particle />

      <main className="relative z-20 pt-30 pl-5 pr-5">
        {/* Hero */}
        <section className="py-20 flex flex-col items-center text-center">
          <div className="w-40 h-40 mb-6">
            <Image
              className="w-full h-full object-cover rounded-full border-4 shadow-lg"
              src={data.hero.image}
              alt={data.hero.name}
              width={100}
              height={100}
            />
          </div>
          <h1 className="text-white text-4xl font-bold mb-4">
            {data.hero.name}
          </h1>
          <p className="text-gray-300 text-lg mb-2">{data.hero.role}</p>
          <p className="text-gray-400 text-sm max-w-md">
            {data.hero.description}
          </p>
        </section>

        {/* Skills */}
        <section className="py-16 max-w-4xl mx-auto px-6">
          <h2 className="text-white text-2xl font-semibold border-b border-white pb-1 mb-8 text-center">
            {data.skills.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-200">
            {data.skills.categories.map((cat, i) => (
              <div key={i}>
                <h3 className="font-bold mb-2 text-white">{cat.name}</h3>
                <p>{cat.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Works */}
        <section className="py-16 flex flex-col items-center">
          <h2 className="text-white text-2xl font-semibold border-b border-white pb-1 mb-8">
            {data.works.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl px-6">
            {data.works.projects.map((p, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-white font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{p.description}</p>
                <a
                  href={p.linkUrl}
                  target="_blank"
                  className="text-blue-400 text-sm hover:underline"
                >
                  {p.linkText}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 text-center max-w-3xl mx-auto px-6">
          <h2 className="text-white text-2xl font-semibold border-b border-white pb-1 mb-8">
            {data.vision.title}
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {data.vision.paragraph1}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {data.vision.paragraph2}
          </p>
        </section>
      </main>
    </>
  );
};

export default Page;
