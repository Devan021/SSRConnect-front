'use client';
import { Share2Icon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { MouseEventHandler } from 'react';

import { TProjectBase } from '@/types/project';
import { default as handle_share } from '@/utils/handle-share';

const ProjectCard = ({ project }: { project: TProjectBase }) => {

  const handleShare: MouseEventHandler<HTMLButtonElement> = (e) => handle_share(e, { title: project.name, description: project.description }, `${process.env.APP_DOMAIN}/project/${project.teamID}`);
    
  return (
      <Link href={`/project/${project.teamID}`} className="bg-white flex flex-col rounded-md h-[22rem] w-72 border hover:border-primary/50 hover:shadow-lg transition duration-200">
          <div className="flex justify-between items-center p-2">
              <div>
                  <div className="text-sm font-bold text-primary">{project.teamID}</div>
                  <div className="text-[10px] tracking-wider">{project.location}</div>
              </div>
              <button onClick={handleShare} className="p-2 hover:bg-gray-200 rounded opacity-50">
                  <Share2Icon size={20} />
              </button>
          </div>
          <div>
              <Image
                  src={project.cover || ''}
                  alt={project.name}
                  height={500}
                  width={800}
                  className="h-[150px] w-full"
              />
          </div>
          <div className="p-2 flex flex-col justify-between flex-grow">
              <div>
                  <div className="text-lg font-semibold mb-1">
                      {project.name}
                  </div>
                  <p className="text-[10px] truncate-line-3 text-gray-500">
                      {project.description}
                  </p>
              </div>
              <button className="bg-secondary/10 text-primary/80 font-bold text-xs px-4 py-2 w-fit rounded">
                  Read more
              </button>
          </div>
      </Link>
  );
};

export default ProjectCard;