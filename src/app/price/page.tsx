"use client";

import { useState } from "react";
import Header from "@/components/common/Header";
import Particle from "@/components/common/Particles";
import Table from "@/components/price/Table";
import pricedata from "@/data/pricedata.json"; // ✅ JSONの命名を一致させる
import Hero from "@/components/Hero";

// Tableコンポーネントの型を明示
interface TableProps {
  title: string;
  header: string[];
  rows: string[][];
}

// 言語別データ構造
interface PriceData {
  [key: string]: Record<string, TableProps>;
}

export default function Home({ lang = "ja" }: { lang?: "ja" | "en" }) {
  const [currentLang, setCurrentLang] = useState<"ja" | "en">(lang);

  // ✅ JSONから言語ごとのデータを取得
  const data: PriceData = pricedata as PriceData;
  const priceTables = data[currentLang];

  return (
    <>
      <Header onLangChange={setCurrentLang} />
      <Particle />
      <main className="relative z-20 pl-5 pr-5">
        <div className="py-12 flex flex-col items-center gap-10">
          {/* ✅ 各テーブルを順に描画 */}
          {Object.entries(priceTables).map(([key, table]) => (
            <Table key={key} data={table} />
          ))}
        </div>
      </main>
    </>
  );
}
