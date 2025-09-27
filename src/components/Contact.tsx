import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#1e293b] py-12 flex flex-col items-center"
    >
      <h2 className="text-white text-2xl font-semibold mb-2 border-b border-white pb-1">
        Contact
      </h2>
      <form className="flex flex-col items-center w-full max-w-md mt-8 space-y-4">
        <div className="w-full">
          <label className="block text-white text-sm mb-1">名前</label>
          <input
            type="text"
            className="w-full bg-gray-300 rounded px-3 py-2 outline-none"
          />
        </div>
        <div className="w-full">
          <label className="block text-white text-sm mb-1">フリガナ</label>
          <input
            type="text"
            className="w-full bg-gray-300 rounded px-3 py-2 outline-none"
          />
        </div>
        <div className="w-full">
          <label className="block text-white text-sm mb-1">
            メールアドレス
          </label>
          <input
            type="email"
            className="w-full bg-gray-300 rounded px-3 py-2 outline-none"
          />
        </div>
        <div className="w-full">
          <label className="block text-white text-sm mb-1">
            お問い合わせ内容
          </label>
          <textarea
            rows={5}
            className="w-full bg-gray-300 rounded px-3 py-2 outline-none resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-300 text-black px-6 py-1 rounded mt-2 hover:bg-gray-400 transition"
        >
          送信
        </button>
      </form>
    </section>
  );
}

export default Contact