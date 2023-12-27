import React from "react";

const Themes = () => {
  const themes = [
    "Health and Wellbeing",
    "Awareness Campaigns",
    "Indian History and Heritage",
    "Amrita Talks on Various Topics",
    "Financial Literacy",
    "21st Century Values/Civic Sense",
    "Student Mentorship",
    "Student Clubs",
    "Women Empowerment",
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 pt-20" id="features">
      <div className="md:flex md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            SSR Themes
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-gray-700">
            There are multiple themes that we have been working on which are
            considered as the pillars of our projects.
          </p>
        </div>
      </div>
      <div className="w-full mt-8 flex flex-wrap gap-4">
        {themes.map((theme: string, index: number) => (
          <div
            className="flex flex-wrap gap-2 w-max px-2 py-2 md:px-8 md:py-8 bg-white rounded shadow-sm hover:shadow cursor-pointer"
            key={index}
          >
            <span className="text-sm text-[#af0c3e] px-0 py-2">{theme}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Themes;
