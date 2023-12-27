import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Empowering Change",
      description: `I see this project as a tool to move from selfishness to selflessness to the maximum capacity one can.It is a great feeling to witness the joy that my students feel when they were able to uplift the society through self-initiated projects. Last but not the least, as AMMA has said "Be a Giver not a Taker". This project is a fine example of that.`,
      user: "Jayakumaran A",
      role: "SSR Mentor",
      user_img: "/images/testimonials/jayakumaran-a.webp",
      rating: 5,
    },
    {
      title: "Shaping tomorrow",
      description:
        "Student Social Responsibility (SSR) is a credit-based academic program, where we inspire and mentor the youth to run real-time community projects and come up with state-of-the-art solutions in order to address social issues, thereby evolve oneself altruistically and set an example for others to follow",
      user: "Deepa H",
      role: "Faculty- L&D (Soft Skills), SSR Mentor",
      user_img: "/images/testimonials/deepa-h.webp",
      rating: 5,
    },
    {
      title: "Love and Serve",
      description: `SSR project taps into the goodness that is innate in
      each one of us, students and mentors! It is a
      wonderful initiative to translate Amma's message of
      'Love and Serve' into concrete action that benefits
      society in a small but meaningful way! It also fosters
      teamwork and enhances the organizational skills of
      students, which are valuable assets for their careers.`,
      user: "Sriram",
      role: "SSR Mentor",
      user_img: "/images/testimonials/sriram.webp",
      rating: 5,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 pt-20" id="testimonials">
      <div className="md:flex md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Read trusted testimonials
          </h2>

          <p className="mt-4 max-w-xl leading-relaxed text-gray-700">
            See what our faculty, students, and alumni have to say about their
            experience with the program.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <blockquote
            className="flex h-full flex-col rounded-md justify-between bg-white p-6 shadow-sm sm:p-8 hover:shadow transition duration-200 cursor-pointer"
            key={index}
          >
            <div>
              <div className="flex gap-0.5 text-orange-500">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <svg
                    key={index}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-black sm:text-3xl">
                  {testimonial.title}
                </p>

                <p className="mt-4 leading-relaxed text-gray-700">
                  {testimonial.description}
                </p>
              </div>
            </div>
            <footer className="mt-4 text-sm flex items-center font-medium text-gray-700 sm:mt-6">
              <div className="w-8 h-8 relative rounded-full mr-2">
                <Image
                  src={
                    testimonial.user_img ||
                    "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
                  }
                  alt={testimonial.user}
                  layout="fill"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                {testimonial.user}
                <cite className="block not-italic text-xs text-gray-400">
                  {" "}
                  {testimonial.role}{" "}
                </cite>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
