'use client';
import React, { useState } from 'react';

const Mission = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    'At the core of our mission is to instill social responsibility in our students. We believe in values like compassion and empathy, empowering students to actively engage with local communities. Through student-led projects, we inspire youth to address societal challenges collaboratively. Our mission is to equip them to make a meaningful and positive impact, guiding them with lifelong values of service.',
    "We're dedicated to providing a unique learning experience, going beyond social service to promote personal and professional growth. Through our projects, students develop essential skills like teamwork, communication, and leadership. These skills are not only career assets but also empower them as responsible citizens and community leaders. Our mission is to shape well-rounded individuals.",
    "Our mission is to make a positive impact on a range of communities. We aim to serve underprivileged children, support terminally ill patients, involve students at all levels, uplift downtrodden families, and care for the elderly. By reaching out to these groups, we aim to contribute to society's well-being. Our mission is to create a better world for these beneficiaries while nurturing our students' holistic development, instilling social responsibility and a commitment to making a meaningful difference.",
  ];

  return (
      <div
          className="w-screen h-auto md:h-[50vh] border-b border-gray-200"
          id="about"
      >
          <div className="w-full h-full md:max-w-6xl m-auto flex flex-col justify-center items-center py-8 px-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Mission
              </h2>
              <p className="mt-4 w-full leading-relaxed text-gray-700 text-center py-8 max-w-3xl">
                  {slides[currentIndex]}
              </p>
              <div className="flex items-center justify-center py-4">
                  <div
                      className="py-2 px-4 cursor-pointer"
                      onClick={() => {
                        const isFirstSlide = currentIndex === 0;
                        const newIndex = isFirstSlide
                          ? slides.length - 1
                          : currentIndex - 1;
                        setCurrentIndex(newIndex);
                      }}
                  >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-arrow-narrow-left"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="gray"
                          fill="none"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                      >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M5 12l14 0"></path>
                          <path d="M5 12l4 4"></path>
                          <path d="M5 12l4 -4"></path>
                      </svg>
                  </div>
                  <div
                      className="py-2 px-4 bg-[#af0c3e] text-white rounded-full shadow-lg cursor-pointer hover:shadow-xl hover:bg-[rgb(175,12,62,0.8)] transition duration-200"
                      onClick={() => {
                        const isLastSlide = currentIndex === slides.length - 1;
                        const newIndex = isLastSlide ? 0 : currentIndex + 1;
                        setCurrentIndex(newIndex);
                      }}
                  >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-arrow-narrow-right"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                      >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M5 12l14 0"></path>
                          <path d="M15 16l4 -4"></path>
                          <path d="M15 8l4 4"></path>
                      </svg>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Mission;
