'use client';

import Image from 'next/image';
import React from 'react';

const Hero = () => {
  const stats = [
    {
      title: 'Years',
      value: '14',
    },
    {
      title: 'Projects',
      value: '1035',
    },
    {
      title: 'Students',
      value: '5686',
    },
    {
      title: 'Hours',
      value: '429,896',
    },
  ];

  return (
      <div
          className="w-full h-[80vh] md:h-screen grid md:grid-rows-[1fr_10rem]"
          id="home"
      >
          <div className="w-full min-h-[50vh] md:h-full relative">
              <Image
                  src="/images/hero-section.jpeg"
                  alt="Picture of the author"
                  layout="fill"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div
                  className="
        flex flex-col justify-center items-center
        absolute inset-0
        bg-gradient-to-t from-black via-transparent to-transparent
        "
              >
                  <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                      <div className="flex flex-col items-center text-center mt-16 lg:mt-0 mb-16 sm:text-center sm:mb-0">
                          <a href="/" className="mb-6 sm:mx-auto">
                              <div className="items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400 hidden lg:block">
                                  <svg
                                      className="w-10 h-10 text-deep-purple-900"
                                      stroke="currentColor"
                                      viewBox="0 0 52 52"
                                  >
                                      <polygon
                                          strokeWidth="3"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fill="none"
                                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                                      />
                                  </svg>
                              </div>
                          </a>
                          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                              <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                                  <span className="relative inline-block">
                                      <svg
                                          viewBox="0 0 52 24"
                                          fill="currentColor"
                                          className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                      >
                                          <defs>
                                              <pattern
                                                  id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                                                  x="0"
                                                  y="0"
                                                  width=".135"
                                                  height=".30"
                                              >
                                                  <circle cx="1" cy="1" r=".7" />
                                              </pattern>
                                          </defs>
                                          <rect
                                              fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                                              width="52"
                                              height="24"
                                          />
                                      </svg>
                                      <span className="relative">Student</span>
                                  </span>
                                  {' '}
                                  Social Responsibility
                              </h2>
                              <p className="text-base text-indigo-100 md:text-lg">
                                  Ignite Global Impact through Student Social Responsibility –
                                  Be the Change.
                              </p>
                          </div>
                          <p
                              onClick={() => {
                                document
                                  ?.getElementById('about')
                                  ?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="cursor-pointer inline-flex items-center justify-center h-10 px-6 mr-6 font-normal tracking-wide text-gray-200 transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-[rgb(0,0,0,0.2)] focus:shadow-outline focus:outline-none border border-gray-100 hover:border-teal-accent-400"
                          >
                              More Info
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="w-full bg-[#af0c3e] flex justify-center">
              <div className="w-full max-w-6xl px-4 grid grid-cols-2 md:flex md:items-center md:justify-between">
                  {stats.map((stat, index) => (
                      <div
                          className="flex flex-col justify-center items-center w-[calc(50% - 10px)]"
                          key={index}
                      >
                          <p className="text-xl md:text-4xl font-bold text-white relative">
                              {stat.value}
                              <span className="text-lg md:text-2xl absolute -top-2 -right-4">
                                  +
                              </span>
                          </p>
                          <p className="text-sm md:text-xl text-white">{stat.title}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default Hero;
