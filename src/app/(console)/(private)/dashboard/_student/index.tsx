'use client';

import NoTeam from './no-team';
import TeamDetails from './team-details';
import ProposalSubmission from './proposal-submission';
import ProposalAccepted from './proposal-accepted';

import { PROPOSAL_STATUS, TEAM_STATUS } from '@/app/(console)/types';

const StudentDashboard = () => {

  const team = {
    id: 1,
    teamID: 'AM242021',
    mentor: {
      id: 12,
      uid: 'M342',
      name: 'John Doe',
      email: 'johndoe@mail.com',
    },
    members: [
      {
        id: 1,
        uid: 'AM.EN.U4CSE21103',
        name: 'Abhiram Krishna',
        email: 'amenu4cse21103@am.students.amrita.edu',
      },
      {
        id: 2,
        uid: 'AM.EN.U4CSE21104',
        name: 'John Doe',
        email: 'amenu4cse21104@am.students.amrita.edu',
      },
      {
        id: 1,
        uid: 'AM.EN.U4CSE21103',
        name: 'Abhiram Krishna',
        email: 'amenu4cse21103@am.students.amrita.edu',
      },
      {
        id: 2,
        uid: 'AM.EN.U4CSE21104',
        name: 'John Doe',
        email: 'amenu4cse21104@am.students.amrita.edu',
      },
      {
        id: 1,
        uid: 'AM.EN.U4CSE21103',
        name: 'Abhiram Krishna',
        email: 'amenu4cse21103@am.students.amrita.edu',
      },
      {
        id: 2,
        uid: 'AM.EN.U4CSE21104',
        name: 'John Doe',
        email: 'amenu4cse21104@am.students.amrita.edu',
      },
    ],
    project: null,
    proposals: [
      // {
      //   id: 0,
      //   title: 'Clean Water Initiative',
      //   description: 'A proposal to implement clean water solutions in underprivileged communities.',
      //   status: PROPOSAL_STATUS.REJECTED,
      //   timestamp: '2021-09-01T00:00:00.000Z',
      // },
      {
        id: 1,
        title: 'Digital Literacy Program',
        description: 'A proposal to provide digital literacy education to adults in rural areas.',
        status: PROPOSAL_STATUS.ACCEPTED,
        timestamp: '2021-09-01T00:00:00.000Z',
      },
      // {
      //   id: 2,
      //   title: 'Sustainable Agriculture Practices',
      //   description: 'A proposal to train farmers in sustainable agriculture practices to combat climate change.',
      //   status: PROPOSAL_STATUS.SUBMITTED,
      //   timestamp: '2021-09-01T00:00:00.000Z',
      // },
      // {
      //   id: 3,
      //   title: 'Mental Health Awareness Campaign',
      //   description: 'A proposal to run a mental health awareness campaign in schools and colleges.',
      //   status: PROPOSAL_STATUS.SUBMITTED,
      //   timestamp: '2021-09-01T00:00:00.000Z',
      // },
      // {
      //   id: 4,
      //   title: 'Community Recycling Program',
      //   description: 'A proposal to implement a community-wide recycling program to reduce waste.',
      //   status: PROPOSAL_STATUS.SUBMITTED,
      //   timestamp: '2021-09-01T00:00:00.000Z',
      // },
    ],
    stats: {
      proposals: 2,
      members: 0,
      status: TEAM_STATUS.PROPOSAL_ACCEPTED,
    },
  };

  // const [proposals, setProposals] = useState([]);
  //
  // useEffect(() => {
  //   const fetchedProposals = [
  //
  //   ];
  //   setProposals(fetchedProposals);
  // }, []);

  const renderState = () => {
    switch (team.stats.status) {
      case TEAM_STATUS.PROPOSAL_SUBMISSION:
        return <ProposalSubmission team={team} />;
      case TEAM_STATUS.PROPOSAL_ACCEPTED:
        return <ProposalAccepted team={team} />;
      default:
        return (
            <div>
                Team Status:
                {team.stats.status}
            </div>
        );
    }
  };
  
  return (
      <div className="p-5 flex-grow flex flex-col gap-4">
          {team ?
              <div className="grid grid-cols-3 gap-4 flex-grow">
                  <div className="col-span-2 w-full h-full bg-white rounded-xl">
                      {renderState()}
                  </div>
                  <TeamDetails team={team} />
              </div>
            : <NoTeam />}
      </div>
  );
};

export default StudentDashboard;