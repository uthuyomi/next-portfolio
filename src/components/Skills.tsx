import React from 'react'
import Image from 'next/image';
import data from '../data/data.json';

const Skills = () => {
  const base = data.skills;
  return (
    <section className=" py-16 flex flex-col items-center">
      <h2 className="text-white text-2xl font-semibold mb-2 border-b border-white pb-1 mb-10">
        {base.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl w-full">
        {base.items.map((item, i) => (
          <div key={i} className="flex items-start space-x-4">
            <div className="bg-white flex items-center justify-center w-20 h-20 rounded">
              <Image
                className="block"
                src={item.icon}
                alt={item.title}
                width={100}
                height={100}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className=" text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills