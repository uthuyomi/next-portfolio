"use client";
import React, { useState } from "react";
import Particle from "@/components/common/Particles";
import Header from "@/components/common/Header";
import profileData from "@/data/profile.json";
import Image from "next/image";

const Page = ({ lang = "ja" }: { lang?: "ja" | "en" }) => {
  const [currentLang, setCurrentLang] = useState(lang);
  const data = profileData[currentLang];

  return (
    <>
      <Header onLangChange={setCurrentLang} />
      <Particle />

      <main className="relative z-20 pt-32 px-6 text-gray-200">
        {/* ========== Hero ========== */}
        <section className="flex flex-col items-center text-center py-20">
          <div className="w-40 h-40 mb-6 rounded-full overflow-hidden ring-4 ring-teal-400/30 shadow-lg shadow-teal-500/20">
            <Image
              src={data.hero.image}
              alt={data.hero.name}
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-wide">
            {data.hero.name}
          </h1>
          <p className="text-teal-400 text-lg font-medium mb-3">
            {data.hero.role}
          </p>
          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            {data.hero.description}
          </p>
        </section>

        {/* ========== Skills ========== */}
        <section className="py-16 max-w-4xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-wide border-b border-gray-600 inline-block pb-2 mb-12">
            {data.skills.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {data.skills.categories.map((cat, i) => (
              <div
                key={i}
                className="bg-gray-800/70 border border-gray-700 rounded-2xl p-6 hover:border-teal-400 transition-all shadow-md shadow-teal-400/10"
              >
                <h3 className="text-teal-400 font-semibold text-lg mb-2">
                  {cat.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                  {cat.items}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== Works ========== */}
        <section className="py-16 flex flex-col items-center">
          <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-wide border-b border-gray-600 pb-2 mb-12">
            {data.works.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
            {data.works.projects.map((p, i) => (
              <div
                key={i}
                className="bg-gray-800/70 border border-gray-700 rounded-2xl p-6 hover:border-teal-400 transition-colors shadow-md shadow-teal-400/10"
              >
                <h3 className="text-teal-400 font-semibold text-lg mb-2">
                  {p.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <a
                  href={p.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal-400 hover:underline"
                >
                  {p.linkText}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ========== Vision ========== */}
        <section className="py-16 text-center max-w-3xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-wide border-b border-gray-600 inline-block pb-2 mb-10">
            {data.vision.title}
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
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
