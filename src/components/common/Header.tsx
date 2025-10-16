"use client";
import { useState } from "react";

const Header = ({ onLangChange }) => {
  const [lang, setLang] = useState("ja");

  const toggleLang = () => {
    const newLang = lang === "ja" ? "en" : "ja";
    setLang(newLang);
    onLangChange(newLang);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/50 backdrop-blur-md border-b border-gray-700 flex justify-between items-center px-6 py-3">
      <h1 className="text-white text-lg font-semibold tracking-wide">
        Portfolio
      </h1>
      <button
        onClick={toggleLang}
        className="text-sm bg-gray-800 text-white border border-gray-600 px-3 py-1 rounded hover:bg-gray-700 transition"
      >
        {lang === "ja" ? "English" : "日本語"}
      </button>
    </header>
  );
};

export default Header;
