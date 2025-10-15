"use client";
import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-12 flex flex-col items-center">
      <h2 className="text-white text-2xl font-semibold mb-2 border-b border-white pb-1">
        Contact
      </h2>

      {/* 🔽 Formspreeの見た目そのまま */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-md mt-8 space-y-4"
      >
        <div className="w-full">
          <label className="block text-white text-sm mb-1">名前</label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-gray-300 rounded px-3 py-2 outline-none"
          />
        </div>

        <div className="w-full">
          <label className="block text-white text-sm mb-1">フリガナ</label>
          <input
            type="text"
            name="kana"
            className="w-full bg-gray-300 rounded px-3 py-2 outline-none"
          />
        </div>

        <div className="w-full">
          <label className="block text-white text-sm mb-1">
            メールアドレス
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-gray-300 rounded px-3 py-2 outline-none"
          />
        </div>

        <div className="w-full">
          <label className="block text-white text-sm mb-1">
            お問い合わせ内容
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full bg-gray-300 rounded px-3 py-2 outline-none resize-none"
          />
        </div>

        <p className="text-sm text-gray-400">
          ※いたずらメール防止のためにIPアドレスを取得しています。
        </p>

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-gray-300 text-black px-6 py-1 rounded mt-2 hover:bg-gray-400 transition disabled:opacity-50"
        >
          {status === "loading" ? "送信中..." : "送信"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-sm mt-2">✅ 送信が完了しました。</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-2">❌ 送信に失敗しました。</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
