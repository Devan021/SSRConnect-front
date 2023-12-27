"use client";
import { capitalize } from "@/utils/common";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProjectDetails = () => {
  const [project, setProject] = useState<any>(null);
  const [projectTeam, setProjectTeam] = useState<any>(null);
  const { project_id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const res = await axios.get(
        `https://ssramritapuri.azurewebsites.net/project/${project_id}`
      );
      setProject(res?.data?.project);
      setProjectTeam(res?.data?.team);
    };
    fetchProject();
  }, [project_id]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? project?.img?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === project?.img?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-40">
      <div className="w-full max-w-6xl mx-auto px-4 overflow-y-scroll">
        <p className="text-xl text-gray-900 lg:text-3xl text-center font-medium">
          {project?.name}
        </p>
        {/* divider */}
        <div className="border-b border-gray-300 mt-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-[15rem_1fr] gap-10 py-5">
          <div>
            <div className="flex flex-col items-start mb-2">
              <p className="text-base text-gray-900 mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                {project?.category?.map((tag: string, index: number) => (
                  <span
                    className="text-sm text-[#af0c3e] px-0 py-2"
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
            <div className="flex flex-col items-start mb-2">
              <p className="text-base text-gray-900 mb-2">Year</p>
              <div className="flex flex-wrap gap-2">
                <p className="text-sm text-[#af0c3e] px-0 py-2">
                  {project?.year}
                </p>
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
            <div className="flex flex-col items-start mb-2">
              <p className="text-base text-gray-900 mb-2">Mentor</p>
              <div className="flex flex-wrap gap-2">
                <p className="text-sm text-[#af0c3e] px-0 py-2">
                  {capitalize(project?.mentor)}
                </p>
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
          </div>
          <div className="w-full flex flex-col items-start">
            {project?.img?.length > 0 && (
              <div className="h-[30vh] md:h-[70vh] w-full m-auto mb-12 py-4 relative group">
                <div
                  style={{
                    backgroundImage: `url(${project?.img[currentIndex]})`,
                  }}
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
                  {project?.img?.map((_: string, slideIndex: number) => (
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
                        stroke={
                          slideIndex === currentIndex ? "#af0c3e" : "#000"
                        }
                        fill={slideIndex === currentIndex ? "#af0c3e" : "#000"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                          strokeWidth="0"
                          fill={
                            slideIndex === currentIndex ? "#af0c3e" : "#000"
                          }
                        ></path>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <p className="text-base text-gray-900 mb-4">Description</p>
            <p className="text-sm text-gray-500">{project?.description}</p>
            <p className="text-base text-gray-900 mt-4 mb-2">Team</p>
            <div className="flex flex-col gap-2">
              {projectTeam?.map((member: any, index: number) => (
                <span className="text-sm text-[#af0c3e] px-0 py-2" key={index}>
                  {member.name} ({member.roll})
                </span>
              ))}
            </div>
            <p className="text-base text-gray-900 mt-4 mb-2">Resources</p>
            <div className="flex flex-wrap gap-2">
              {project?.youtubeLink && (
                <a
                  href={project?.youtubeLink}
                  target="_blank"
                  className="text-sm text-white text-center px-2 py-2 bg-[#af0c3e]/100 rounded shadow hover:shadow-lg transition-all duration-300 ease-linear"
                >
                  Youtube
                </a>
              )}
              <a
                href={`https://ssramritapuri.blob.core.windows.net/data/ppt/${project_id}.pptx`}
                target="_blank"
                className="text-sm text-white text-center px-2 py-2 bg-[#af0c3e]/100 rounded shadow hover:shadow-lg transition-all duration-300 ease-linear"
              >
                Project Presentation
              </a>
              <a
                href={`https://ssramritapuri.blob.core.windows.net/data/reports/${project_id}.pdf`}
                target="_blank"
                className="text-sm text-white text-center px-2 py-2 bg-[#af0c3e]/100 rounded shadow hover:shadow-lg transition-all duration-300 ease-linear"
              >
                Project Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
