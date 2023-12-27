'use client';
import { BackpackIcon, GraduationCapIcon } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

import InputField from '@/components/InputField';
import VisualPicker from '@/components/visual-picker';
import Button from '@/components/button';

const AddUserForm = ({ handleClose }: { handleClose: () => void }) => {
    
  const [userType, setUserType] = useState<string>('STUDENT');
  const [data, setData] = useState<any>(null);
  
  const handleAddUser = (e: any) => {
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/create/user/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: userType,
        ...data,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if(res?.id) {
          toast.success('User added successfully');
          setData(null);
          handleClose();
        } else toast.error(res?.error?.message || 'Something went wrong');
      })
      .catch((error) => {
        console.error(error?.code);
      });
  };
    
  return (
      <form onSubmit={handleAddUser}>
          <div className="text-2xl font-bold text-gray-900">Add User</div>
          <div className="mt-8 flex flex-col gap-4">
              <VisualPicker
                  label="User Type"
                  options={[
                    {
                      label: 'Student',
                      value: 'STUDENT',
                      icon: <BackpackIcon size={40} />,
                    },
                    {
                      label: 'Mentor',
                      value: 'MENTOR',
                      icon: <GraduationCapIcon size={48} />,
                    },
                  ]}
                  value={userType}
                  onChange={(value) => setUserType(value)}
              />
              <InputField
                  required
                  label="Name"
                  value={data?.name}
                  onChange={(e:any) => setData({ ...data, name: e.target.value })}
              />
              <InputField
                  required
                  label="Email"
                  type="email"
                  value={data?.email}
                  onChange={(e:any) => setData({ ...data, email: e.target.value })}
              />
              {userType === 'STUDENT' && (
                  <InputField 
                      className="duration-200 transform transition" 
                      label="Team ID" 
                      value={data?.teamId}
                      onChange={(e: any) => setData({ ...data, teamId: e.target.value })}
                  />
              )}
              <Button variant="primary" type="submit" className="mt-2">
                  Add User
              </Button>
          </div>
      </form>
  );
};

export default AddUserForm;