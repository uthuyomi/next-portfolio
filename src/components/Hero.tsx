import React from 'react'
import Image from 'next/image';
import img from '../../public/images/Ellipse 1.png';

const Hero = () => {
  return (
    <section
      className="bg-[#1e293b] py-12 flex flex-col items-center justify-center"
    >
      <h2 className="text-white text-2xl font-semibold mb-2 border-b border-white pb-1">
        About
      </h2>
      <div className="flex flex-col md:flex-row items-center mt-6 max-w-2xl w-full px-4">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
          <Image
            src={ img}
            alt="安崎 海星"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-white text-xl font-bold mb-2">安崎 海星</h3>
          <p className="text-gray-200 mb-4 text-sm leading-relaxed">
            ここに自己紹介文が入ります。ここに自己紹介文が入ります。
            <br />
            ここに自己紹介文が入ります。ここに自己紹介文が入ります。
          </p>
          <div className="flex space-x-6 mt-2">
            <a
              href="#"
              aria-label="X"
              className="text-white hover:text-blue-400 text-3xl"
            >
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.53 6.47a.75.75 0 0 0-1.06 0l-4.47 4.47-4.47-4.47a.75.75 0 1 0-1.06 1.06l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.06 1.06l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.06-1.06l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.06z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-pink-400 text-3xl"
            >
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm4.25 3.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zm0 1.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero