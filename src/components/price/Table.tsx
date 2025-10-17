"use client";
import React from "react";

type TableData = {
  title: string;
  header: string[];
  rows: string[][];
};

type TableProps = {
  data: TableData;
};

const Table = ({ data }: TableProps) => {
  return (
    <section className="w-full bg-gray-900 py-12 flex flex-col items-center mb-20 px-4">
      {/* タイトル */}
      <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-wide border-b border-gray-600 pb-2 mb-10">
        {data.title}
      </h3>

      {/* テーブルラッパー */}
      <div className="overflow-x-auto w-full max-w-4xl rounded-xl border border-gray-700 shadow-md shadow-teal-400/10 bg-gray-800/70">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-700/60 text-teal-400 text-sm uppercase tracking-wider">
              {data.header.map((item, i) => (
                <th
                  key={i}
                  className="px-6 py-3 border-b border-gray-600 text-left"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-gray-800/60" : "bg-gray-900/40"
                } hover:bg-gray-700/50 transition-colors`}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="px-6 py-3 text-gray-200 text-sm border-b border-gray-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
