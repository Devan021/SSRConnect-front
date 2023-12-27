import Link from 'next/link';
import Image from 'next/image';
import { DownloadIcon, ExternalLinkIcon, Share2Icon } from 'lucide-react';
import React from 'react';
import { format } from 'date-fns';

import TeamSidebar from './team';

import PDFViewer from '@/components/pdf-viewer';
import getRole from '@/components/get-role';

const ProjectPage = ({ params }: { params: { id: string } }) => {

  const _ = getRole();
  const id = params.id.toUpperCase();

  const project = {
    id,
    cover: 'https://images.unsplash.com/photo-1694687530306-e334f8ffa84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2575&q=80',
    title: 'AMRITA SeRVe 101 VILLAGE INTERNSHIP PROGRAM',
    description: 'Portray the importance of the Indian villages and understand the value they add to the country.',
    location: 'Malcopon, South Goa',
    content: '# Food Waste Reduction Initiative\n This proposal aims to address the issue of food waste in our community. By creating a platform that connects restaurants, grocery stores, and households with excess food to food banks and shelters, we can significantly reduce the amount of food that goes to waste while also helping to alleviate hunger.',
    report: 'proposal/attachment/proposal.pdf',
    link: 'https://www.example.com/proposal',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    state: 'IN_PROGRESS',
    remarks: null,
    remark_updated_at: null,
    gallery: 'https://i.pravatar.cc/300',
    team: {
      id: 1,
      teamID: '21AM2021',
      mentor: {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com',
        uid: 'M123',
        avatarURL: 'https://i.pravatar.cc/300',
        avatarID: null,
      },
      members: [
        {
          id: 1,
          name: 'Member 1',
          email: 'member1@example.com',
          uid: 'M1234567A',
          avatarURL: 'https://i.pravatar.cc/300',
          avatarID: null,
        },
        {
          id: 2,
          name: 'Member 2',
          email: 'member2@example.com',
          uid: 'M2345678B',
          avatarURL: 'https://i.pravatar.cc/300',
          avatarID: null,
        },
      ],

    },
  };

  return (
      <div className="p-5 flex-grow flex flex-col gap-4">
          <div className="bg-white rounded-lg p-4">
              <div className="relative">
                  <Image src={project.cover} alt={project.title} width={800} height={400} className="rounded-lg h-[40rem] w-full object-cover" />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 flex items-center justify-center flex-col">
                      <div className="flex gap-2 items-center">
                          <div className="text-center text-gray-200 text-xs">
                              Submitted
                              {' '}
                              {format(new Date(project.created_at), 'do LLLL, Y')}
                          </div>
                          <div className="border-r border-gray-200 h-3" />
                          <div className="flex justify-center items-center text-xs text-gray-300">
                              project #
                              {project.id}
                          </div>
                      </div>
                      <div className="text-center text-3xl font-bold mb-2">{project.title}</div>
                      <div className="text-center text-sm max-w-[600px] mx-auto mb-8">{project.description}</div>
                  </div>
              </div>
              <hr />
              <div className="grid grid-cols-4 gap-4 mt-8">
                  <div className="col-span-3">
                      <div className="mb-4 flex justify-between items-center">
                          <Link
                              download
                              href={project.report}
                              className="bg-slate-100 hover:bg-slate-200 font-bold p-4 text-primary rounded-lg inline-flex items-center gap-4"
                          >
                              <Image src="/assets/PDF_file.svg" alt="PDF icon" width={30} height={30} />
                              <div className="flex gap-2">
                                  Download PDF
                                  <DownloadIcon size={20} />
                              </div>
                          </Link>
                          <div className="flex gap-2">
                              <button className="text-primary bg-slate-100 hover:bg-slate-200 h-12 w-12 flex items-center justify-center rounded-lg">
                                  <Share2Icon />
                              </button>
                              <Link
                                  target="_blank"
                                  href={project.link}
                                  className="text-primary bg-slate-100 hover:bg-slate-200 h-12 w-12 flex items-center justify-center rounded-lg mr-4"
                              >
                                  <ExternalLinkIcon />
                              </Link>
                          </div>
                      </div>
                      <PDFViewer />
                  </div>
                  <div className="col-span-1 h-auto">
                      <div className="flex">
                          {/*<Link*/}
                          {/*    target="_blank"*/}
                          {/*    href={project.attachment}*/}
                          {/*    className="bg-slate-50 hover:bg-blue-100 font-bold p-4 text-primary rounded inline-flex items-center gap-4"*/}
                          {/*>*/}
                          {/*    <Image src="/assets/PDF_file.svg" alt="PDF icon" width={30} height={30} />*/}
                          {/*    <div className="flex gap-2">*/}
                          {/*        Open PDF*/}
                          {/*        <ExternalLinkIcon size={20} />*/}
                          {/*    </div>*/}
                          {/*</Link>*/}
                      </div>
                      <TeamSidebar team={project.team} />
                  </div>
              </div>
          </div>
      </div>
  );
};

export default ProjectPage;