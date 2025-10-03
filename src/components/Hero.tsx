import React from 'react'
import Image from 'next/image';
import data from '../data/data.json';

const Hero = () => {
  const base = data.about;
  return (
    <section className=" py-12 flex flex-col items-center">
      <h2 className="text-white text-2xl font-semibold mb-2 border-b border-white pb-1">
        {base.title}
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 max-w-2xl w-full px-4">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
          <Image
            src={base.image}
            alt={base.name}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-white text-xl font-bold mb-2">{base.name}</h3>
          <p className="text-gray-200 mb-2 text-sm leading-relaxed">
            {base.description.map((item, i) => (
              <span key={i}>
                {item}
                <br />
              </span>
            ))}
          </p>
          <p className="text-gray-200 mb-4 text-sm leading-relaxed"></p>
          <div className="flex space-x-6 mt-2">
            {base.social.map((item, i) => (
              <a
                key={i}
                href="#"
                aria-label={item.label}
                className="bg-white rounded-full p-2 hover:text-blue-400 text-3xl"
              >
                <Image
                  src={item.url}
                  alt={item.label}
                  width={32}
                  height={32}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero