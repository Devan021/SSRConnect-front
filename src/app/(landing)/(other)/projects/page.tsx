// "use client";
// import { capitalize } from "@/utils/common";
// import axios from "axios";
// import Image from "next/image";
// import { useEffect, useState } from "react";
//
// const Projects = () => {
//   const [projects, setProjects] = useState<any>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   useEffect(() => {
//     const fetchprojects = async () => {
//       const { data } = await axios.get(
//         "https://ssramritapuri.azurewebsites.net/projects/"
//       );
//       setProjects(data);
//     };
//     fetchprojects();
//   }, []);
//
//   return (
//     <div className="min-h-screen bg-gray-50 py-20">
//       <div className="w-full max-w-6xl mx-auto px-4">
//         <div className="space-y-2 pb-8 pt-6 md:space-y-5">
//           <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
//             Projects
//           </h1>
//           <p className="text-lg leading-7 text-gray-500">
//             We have been working on a lot of projects which have impacted the
//             society in a positive way. Some of them are listed below
//           </p>
//         </div>
//         <div className="md:grid md:grid-cols-[15rem_1fr] md:gap-2">
//           <div className="h-max px-5 py-14 rounded hidden md:block">
//             <p className="text-lg font-bold leading-9 tracking-tight text-gray-900 sm:text-xl sm:leading-10 md:text-xl md:leading-14 mb-8">
//               All Tags
//             </p>
//             <div className="flex flex-col">
//               {/* group all the projects and create a map with tag and number of projects */}
//               {Array.from(
//                 new Set(
//                   projects
//                     ?.flat()
//                     ?.map((post: any) =>
//                       post.category
//                         .split(",")
//                         .map((tag: string) =>
//                           tag.toLowerCase().replace(/^\s+/, "")
//                         )
//                     )
//                     ?.flat()
//                 )
//               )?.map((tag: any, index: number) => (
//                 <p
//                   className="flex justify-between items-center cursor-pointer text-gray-600 hover:text-[#af0c3e] mb-2"
//                   key={index}
//                 >
//                   <span>
//                     {tag
//                       .split(" ")
//                       .map(
//                         (word: string) =>
//                           word.charAt(0).toUpperCase() +
//                           word.slice(1).toLowerCase()
//                       )
//                       .join(" ")}
//                   </span>
//                   <span>
//                     {
//                       projects.flat().filter((post: any) =>
//                         post?.category
//                           ?.split(",")
//                           ?.map((tag: string) => tag.toLowerCase())
//                           .includes(tag)
//                       ).length
//                     }
//                   </span>
//                 </p>
//               ))}
//             </div>
//             <p className="text-lg font-bold leading-9 tracking-tight text-gray-900 sm:text-xl sm:leading-10 md:text-xl md:leading-14 my-8">
//               Years
//             </p>
//             <div className="flex flex-col">
//               {Array.from(
//                 new Set(projects?.flat()?.map((post: any) => post.year))
//               )?.map((year: any, index: number) => (
//                 <p
//                   className="flex justify-between items-center cursor-pointer text-gray-600 hover:text-[#af0c3e] mb-2"
//                   key={index}
//                 >
//                   <span>{year}</span>
//                   <span>
//                     {
//                       projects
//                         ?.flat()
//                         .map((proj: any) => proj.year.toString())
//                         .filter((year: string) => year === year).length
//                     }
//                   </span>
//                 </p>
//               ))}
//             </div>
//           </div>
//           <ul className="md:border-l md:border-slate-200 md:pl-4">
//             {!projects.length && "No projects found."}
//             {projects[currentPage]?.map((proj: any) => {
//               const { projectId, year, name, description, category } = proj;
//               return (
//                 <li
//                   key={projectId}
//                   className="rounded-md my-4 py-4 bg-white shadow-sm hover:shadow px-4 cursor-pointer"
//                 >
//                   <article>
//                     <div className="space-y-2 xl:grid grid-cols-1 xl:grid-cols-4 lg:items-baseline lg:space-y-0">
//                       {/* <div className="relative w-full h-full rounded-md overflow-hidden lg:col-span-1">
//                         <Image
//                           src={"/images/feature-img-1.webp"}
//                           alt="Logo"
//                           layout="fill"
//                         />
//                       </div> */}
//                       <div className="space-y-5 lg:col-span-3 px-4">
//                         <div>
//                           <div>
//                             <p className="prose text-base leading-7 text-gray-500 pb-2 m-0">
//                               {year}
//                             </p>
//                             <h2 className="text-2xl font-bold leading-8 tracking-tight">
//                               <p className="text-gray-900">
//                                 {name
//                                   .split(" ")
//                                   .map(
//                                     (word: string) =>
//                                       word.charAt(0).toUpperCase() +
//                                       word.slice(1).toLowerCase()
//                                   )
//                                   .join(" ")}
//                               </p>
//                             </h2>
//                             <div className="flex flex-wrap mt-2">
//                               {category?.split(",")?.map((tag: string) => (
//                                 <span
//                                   key={tag}
//                                   className="inline-flex items-center px-3 py-0.5 rounded text-sm font-medium leading-5 bg-primary-100 text-[#af0c3e] bg-slate-200 mr-2 mb-2"
//                                 >
//                                   {tag
//                                     .split(" ")
//                                     .map(
//                                       (word: string) =>
//                                         word.charAt(0).toUpperCase() +
//                                         word.slice(1).toLowerCase()
//                                     )
//                                     .join(" ")}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                           <div className="prose max-w-none text-gray-500">
//                             {description.slice(0, 70)}...
//                           </div>
//                         </div>
//                         <div className="text-base font-medium leading-6">
//                           <a
//                             href={`/projects/${projectId}`}
//                             className="text-gray-500 hover:text-gray-600"
//                             aria-label={`Read "${name}"`}
//                           >
//                             Read more &rarr;
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </article>
//                 </li>
//               );
//             })}
//             <div className="flex items-center justify-center py-10 lg:px-0">
//               <div className="w-full  flex items-center justify-between border-t border-gray-200">
//                 <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
//                   <svg
//                     width="14"
//                     height="8"
//                     viewBox="0 0 14 8"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M1.1665 4H12.8332"
//                       stroke="currentColor"
//                       strokeWidth="1.25"
//                       strokeLinecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M1.1665 4L4.49984 7.33333"
//                       stroke="currentColor"
//                       strokeWidth="1.25"
//                       strokeLinecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M1.1665 4.00002L4.49984 0.666687"
//                       stroke="currentColor"
//                       strokeWidth="1.25"
//                       strokeLinecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                   <p className="text-sm ml-3 font-medium leading-none ">
//                     Previous
//                   </p>
//                 </div>
//                 <div className="sm:flex hidden">
//                   {
//                     // create an array with length equal to number of pages
//                     Array.from(Array(projects.length).keys()).map(
//                       (number, index) => (
//                         <p
//                           key={index}
//                           className={`text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2 ${
//                             currentPage === number && "text-indigo-700"
//                           }`}
//                           onClick={() => setCurrentPage(number)}
//                         >
//                           {number + 1}
//                         </p>
//                       )
//                     )
//                   }
//                 </div>
//                 <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
//                   <p className="text-sm font-medium leading-none mr-3">Next</p>
//                   <svg
//                     width="14"
//                     height="8"
//                     viewBox="0 0 14 8"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M1.1665 4H12.8332"
//                       stroke="currentColor"
//                       strokeWidth="1.25"
//                       strokeLinecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M9.5 7.33333L12.8333 4"
//                       stroke="currentColor"
//                       strokeWidth="1.25"
//                       strokeLinecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M9.5 0.666687L12.8333 4.00002"
//                       stroke="currentColor"
//                       strokeWidth="1.25"
//                       strokeLinecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Projects;

const Projects = () => {
  return <div>Projkcyt</div>;
};

export default Projects;