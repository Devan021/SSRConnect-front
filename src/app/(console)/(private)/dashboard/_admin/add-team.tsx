'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { ChevronRightIcon } from 'lucide-react';

import InputField from '@/components/InputField';
import Button from '@/components/button';
import UserPicker from '@/components/user-picker';

const AddTeamForm = ({ handleClose: close }: { handleClose: () => void }) => {
    
  const [data, setData] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddTeam = (e: any) => {
    e.preventDefault();
    return;
    fetch('/api/create/team/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if(res?.id) {
          toast.success('Team created successfully');
          setData(null);
          close();
        } else toast.error(res?.error?.message || 'Something went wrong');
      })
      .catch((error) => {
        console.error(error?.code);
      });
  };
    
  return (
      <div>
          <form onSubmit={handleAddTeam}>
              <div className="text-2xl font-bold text-gray-900">Add Team</div>
              <div className="mt-8 flex flex-col gap-4">
                  <InputField
                      required
                      label="Team ID"
                      value={data?.teamID}
                      onChange={(e) => setData({ ...data, teamID: e.target.value })}
                  />
                  <div className="w-full">
                      <div className="font-bold text-gray-900">
                          Mentor
                          <span className="text-red-700 font-normal ml-0.5 text-sm">*</span>
                      </div>
                      <button
                          type="button"
                          className="flex justify-between items-center gap-2 border bg-gray-100/50 hover:bg-gray-100 text-gray-900 font-bold py-4 w-full rounded-xl px-4"
                          onClick={handleOpen}
                      >
                          <div>Add Mentor</div>
                          <ChevronRightIcon size={24} />
                      </button>
                  </div>
                  <div className="w-full">
                      <div className="font-bold text-gray-900">
                          Team Leader
                          <span className="text-red-700 font-normal ml-0.5 text-sm">*</span>
                      </div>
                      <button
                          type="button"
                          className="flex justify-between items-center gap-2 border bg-gray-100/50 hover:bg-gray-100 text-gray-900 font-bold py-4 w-full rounded-xl px-4"
                          onClick={handleOpen}
                      >
                          <div>Add Team Leader</div>
                          <ChevronRightIcon size={24} />
                      </button>
                  </div>
                  <div className="w-full">
                      <div className="font-bold text-gray-900">
                          Team Members
                          <span className="text-red-700 font-normal ml-0.5 text-sm">*</span>
                      </div>
                      <button
                          type="button"
                          className="flex justify-between items-center gap-2 border bg-gray-100/50 hover:bg-gray-100 text-gray-900 font-bold py-4 w-full rounded-xl px-4"
                          onClick={handleOpen}
                      >
                          <div>Add Member 1</div>
                          <ChevronRightIcon size={24} />
                      </button>
                  </div>
                  <Button variant="primary" type="submit" className="mt-2">
                      Create Team
                  </Button>
              </div>
          </form>
          <UserPicker open={open} setOpen={setOpen} setData={setData} data={data} type="MENTOR" />
      </div>
  );
};

export default AddTeamForm;