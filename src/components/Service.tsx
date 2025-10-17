import React from "react";
import data from "../data/data.json";

const Service = () => {
  const base = data.ja.service;

  return (
    <section
      className="w-full py-12 flex flex-col items-center mb-20`"
    >
      <h2 className="text-white text-2xl font-semibold mb-8">{base.title}</h2>

      {/* ✅ カード3枚横並び（モバイル1列、タブレット以上3列） */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full px-6">
        {base.items.map((item, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-gray-700 bg-gray-800/70 p-5 hover:border-teal-400 transition-colors"
          >
            {/* ✅ 白い画像プレースホルダー */}
            <div className="mb-4">
              <div className="w-full aspect-[4/3] rounded-xl bg-white/95 shadow-sm ring-1 ring-white/40" />
            </div>

            {/* ✅ タイトルと説明 */}
            <h3 className="text-lg font-semibold text-teal-400 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* ✅ アクセントライン（hover時に出る下線） */}
            <div className="mt-4 h-px w-0 bg-teal-400 transition-all duration-300 group-hover:w-1/2" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
