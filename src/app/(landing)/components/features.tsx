import Image from "next/image";
import React from "react";

const Features = () => {
  const features = [
    {
      title: "Find a problem",
      description: "Students try to find a problem in the society",
      image: "/images/feature-img-1.webp",
    },
    {
      title: "Get the solution",
      description: "Students get the innovative solution for the problem",
      image: "/images/feature-img-2.webp",
    },
    {
      title: "Make it Live",
      description: "Put in complete effort to implement the solution",
      image: "/images/feature-img-3.webp",
    },
  ];

  const data: { [key: string]: string[] } = {
    Year: [
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    "Total No of Projects": [
      "92",
      "110",
      "118",
      "156",
      "95",
      "110",
      "98",
      "115",
      "141",
    ],
    "No of Students Involved": [
      "450",
      "542",
      "455",
      "792",
      "514",
      "576",
      "545",
      "623",
      "789",
    ],
    "Total no of Student Hours": [
      "20355",
      "37212",
      "73532",
      "63077",
      "42429",
      "70352",
      "40673",
      "15249",
      "67017",
    ],
    "No Of Staff Involved": ["4", "4", "4", "4", "4", "4", "11", "11", "14"],
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 pt-20" id="features">
      <div className="md:flex md:items-end md:justify-between">
        <div className="w-full">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            How it works?
          </h2>
          <p className="mt-4 w-full leading-relaxed text-gray-700">
            {`Students stand up for social causes like protecting nature, women empowerment,
conserving Indian cultural heritage, various awareness campaigns, health and
wellness. This time aligning the projects with Sustainable Development Program.`}
          </p>
        </div>
      </div>
      {/* Cards of features */}
      <div className="grid-cols-1 sm:grid md:grid-cols-3 md:gap-4">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="mt-6 grid grid-rows-[15rem_1fr] rounded bg-white shadow-sm hover:shadow cursor-pointer sm:shrink-0 sm:grow sm:basis-0 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={feature.image}
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="p-6 bg-white">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                  {feature.title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 ">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:flex md:items-end md:justify-between pt-20">
        <div className="w-full">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            What are we upto?
          </h2>
          <div className="w-full mx-auto mt-10">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-sm rounded">
              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      {Object.keys(data).map((key, index) => (
                        <th
                          className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"
                          key={index}
                        >
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.Year.map((year, index) => (
                      <tr className="hover:bg-gray-100" key={index}>
                        {Object.keys(data).map((key) => (
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-gray-600"
                            key={key}
                          >
                            {data[key][index]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
