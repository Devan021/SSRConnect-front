'use client';
import { LogOut } from 'lucide-react';
import { Avatar } from '@mui/material';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { useUser } from './context';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/dropdown';

const UserDropdown = () => {

  const router = useRouter();
  const user = useUser();
    
  const handleLogout = () => {
    fetch('/api/logout/')
      .then((res) => {
        if(res.ok) {
          router.push('/login');
        } else toast.error('Something went wrong');
      })
      .catch((error) => {
        console.error(error);
      });
  };
    
  return (
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <div>
                  <Avatar className="flex items-center justify-center">
                      <div>
                          {user?.name?.split(' ').map((name) => name[0].toUpperCase())}
                      </div>
                  </Avatar>
              </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 p-2">
              <div>
                  <div>
                      <div>{user?.name}</div>
                      <div className="text-xs text-gray-400/90">{user?.email}</div>
                  </div>
                  <div className="mt-2 mb-4 border-b w-full" />
                  <div>
                      <button
                          onClick={handleLogout}
                          className="w-full hover:bg-gray-100 py-2 px-2 rounded text-left flex items-center gap-4"
                      >
                          <LogOut size={18} className="rotate-180" />
                          Logout
                      </button>
                  </div>
              </div>
          </DropdownMenuContent>
      </DropdownMenu>
  );
};

export default UserDropdown;