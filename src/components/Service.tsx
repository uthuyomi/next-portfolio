import React from 'react'
import data from '../data/data.json'; 

const Service = () => {
  const base = data.service;
    return (
      <section
        id="service"
        className=" py-12 flex flex-col items-center"
      >
        <h2 className="text-white text-2xl font-semibold mb-8">{base.title}</h2>
        <div className="relative flex justify-center w-full max-w-4xl mx-auto">
          {/* 左カラム */}
          <div className="flex flex-col items-center space-y-12 w-1/2 pr-8">
            {base.items.map((item, i) =>
              i % 2 === 0 ? (
                <div key={i} className="w-56 flex flex-col items-start">
                  <div className="w-56 h-32 bg-gray-300 rounded mb-2" />
                  <h3 className="text-white text-base font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ) : null
            )}
          </div>
          {/* 中央の縦線と矢印 */}
          <div
            className="absolute left-1/2 top-0 flex flex-col items-center z-10"
            style={{ transform: "translateX(-50%)" }}
          >
            <div className="w-px h-[340px] bg-gray-200 opacity-40" />
            <svg
              width="32"
              height="32"
              className="mt-[-6px]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5v14M12 19l5-5M12 19l-5-5"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* 右カラム */}
          <div className="flex flex-col items-center space-y-12 w-1/2 pl-8 pt-24">
            {base.items.map((item, i) =>
              i % 2 !== 0 ? (
                <div key={i} className="w-56 flex flex-col items-start">
                  <div className="w-56 h-32 bg-gray-300 rounded mb-2" />
                  <h3 className="text-white text-base font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>
    );
}

export default Service