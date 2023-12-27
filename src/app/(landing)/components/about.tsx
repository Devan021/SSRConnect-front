'use client';
import React, { useState } from 'react';

const About = () => {
  const slides = [
    {
      url: '/images/corousel-1.webp',
    },
    {
      url: '/images/corousel-2.webp',
    },
    {
      url: '/images/corousel-3.webp',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
      <section className="w-full max-w-6xl mx-auto px-4 pt-0" id="about">
          {/* <div className="md:flex md:items-end md:justify-between">
        <div className="w-full">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            About
          </h2>
          <p className="mt-4 w-full leading-relaxed text-gray-700">
            Giving back to the society whatever little we can, this is the small
            thought that led to this massive community service program that we
            call SSR (Student Social Responsibility). The aim of this student
            driven program is nothing but the well-being of the society through
            various projects. Being able to interact with people and bring about
            solutions for the various problems in their daily life is something
            that the students of Amrita have mastered at this young age. The
            program teaches the students how to be socially responsible as
            citizens. The main idea, however, is to inspire - inspire the youth
            to take this up as an example and bring about a change in their own
            way!
          </p>
        </div>
      </div> */}
          <div>
              <div className="h-[50vh] md:h-[100vh] w-full m-auto py-4 relative group">
                  <div
                      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                      className="w-full h-full rounded-xl bg-center bg-cover duration-500"
                  ></div>
                  <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-left"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          onClick={prevSlide}
                      >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M15 6l-6 6l6 6"></path>
                      </svg>
                  </div>
                  <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-right"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          onClick={nextSlide}
                      >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M9 6l6 6l-6 6"></path>
                      </svg>
                  </div>
                  <div className="flex top-4 justify-center py-2">
                      {slides.map((slide, slideIndex) => (
                          <div
                              key={slideIndex}
                              onClick={() => goToSlide(slideIndex)}
                              className="text-2xl cursor-pointer"
                          >
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-point-filled"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke={slideIndex === currentIndex ? '#af0c3e' : '#000'}
                                  fill={slideIndex === currentIndex ? '#af0c3e' : '#000'}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                              >
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                  <path
                                      d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                                      strokeWidth="0"
                                      fill={slideIndex === currentIndex ? '#af0c3e' : '#000'}
                                  ></path>
                              </svg>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>
  );
};

export default About;
