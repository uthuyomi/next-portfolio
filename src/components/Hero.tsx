import React from 'react'
import Image from 'next/image';
import style from './Hero.module.scss';

type SocialLink = {
  label: string;
  url: string;
};

type AboutData = {
  title: string;
  image: string;
  name: string;
  description: string[];
  social: SocialLink[];
};

type HeroProps = {
  data: AboutData;
};

const Hero = ({ data }: HeroProps ) => {
  return (
    <section className={`${style.Hero} flex flex-col items-center py-12 pt-40`}>
      <h2 className="text-white text-2xl font-semibold mb-2 border-b border-white pb-1">
        {data.title}
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 max-w-2xl w-full px-4">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
          <Image
            src={data.image}
            alt={data.name}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-white text-xl font-bold mb-2">{data.name}</h3>
          <p className="text-gray-200 mb-2 text-sm leading-relaxed">
            {data.description.map((item, i) => (
              <span key={i}>
                {item}
                <br />
              </span>
            ))}
          </p>
          <p className="text-gray-200 mb-4 text-sm leading-relaxed"></p>
          <div className="flex space-x-6 mt-2">
            {data.social.map((item, i) => (
              <a
                key={i}
                href="#"
                aria-label={item.label}
                className="bg-white rounded-full p-2 hover:text-blue-400 text-3xl"
              >
                <Image src={item.url} alt={item.label} width={32} height={32} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero