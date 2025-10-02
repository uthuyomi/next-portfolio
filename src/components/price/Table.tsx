import React from 'react';

type tableProps = {
    title: string;
    header: string[];
    rows: string[][];
};

const table = ({data}: tableProps) => {
  return (
    <>
      <h3 className="text-white text-2xl font-semibold mb-2 pt-7 pb-5">
        {data.title}
      </h3>
      <table className="w-2xl border border-black bg-blue-100">
        <thead>
          <tr>
            {data.header.map((item, i) => (
              <th
                key={i}
                className="border border-black px-4 py-2 bg-blue-200 font-semibold text-gray-800"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((item, i) => (
            <tr key={i}>
              {item.map((cell, j) => (
                <td
                  key={j}
                  className="border border-black px-4 py-2 text-gray-900 bg-blue-100"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default table