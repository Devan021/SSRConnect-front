'use client';

import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { UserPlusIcon, Users, XIcon } from 'lucide-react';

import AddUserForm from './add-user';
import AddTeamForm from './add-team';
const QuickActions = () => {

  const [open, setOpen] = useState<0 | 1 | 2>(0);

  const handleClose = () => setOpen(0);
    
  const QUICK_ACTIONS = [
    {
      title: 'Add User',
      icon: <UserPlusIcon />,
      action: () => setOpen(1),
    },
    {
      title: 'Add Team',
      icon: <Users />,
      action: () => setOpen(2),
    },
  ];
  
  return (
      <div className="flex flex-col items-start justify-start w-full h-full bg-white rounded-lg border p-4">
          <div className="font-bold text-gray-400/90">
              Quick Actions
          </div>
          <div className="flex mt-8 justify-evenly w-full">
              {QUICK_ACTIONS.map((action, index) => (
                  <div
                      key={index}
                      className="w-24 h-24 rounded-lg flex items-center justify-center bg-gray-100/50 shadow-lg border"
                  >
                      <button
                          className="w-full h-full flex flex-col items-center justify-center"
                          onClick={action.action}
                      >
                          {action.icon}
                          {action.title}
                      </button>
                  </div>
              ))}
          </div>
          <Drawer
              anchor="right"
              open={!!open}
              onClose={() => setOpen(0)}
          >
              <div className="min-w-56 h-full flex flex-col items-center justify-center relative">
                  <div className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer" onClick={() => setOpen(0)}>
                      <XIcon />
                  </div>
                  <div className="w-[300px] md:w-[500px] h-full p-4 md:p-8">
                      {open === 1 ? <AddUserForm handleClose={handleClose} /> : open === 2 ? <AddTeamForm handleClose={handleClose} /> : <div />}
                  </div>
              </div>
          </Drawer>
      </div>
  );
};

export default QuickActions;