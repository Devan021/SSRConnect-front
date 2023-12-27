import { cookies } from 'next/headers';

import getUser from '../../get-user';

import StudentDashboard from './_student';
import MentorDashboard from './_mentor';

const Dashboard = async () => {

  const userCookie = cookies().get('REFRESH_TOKEN')?.value;

  if(!userCookie) throw new Error('Please login again to continue');
  const role = getUser(userCookie)?.type;

  switch (role) { 
    case 'ADMIN':
      return <StudentDashboard />;
      // return <AdminDashboard />;
    case 'MENTOR':
      return <MentorDashboard />;
    default:
      return <StudentDashboard />;
  } 
};

export default Dashboard;