import React from 'react';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

import AppContextProvider from '@/app/(console)/(private)/_appview/context';

const ConsoleLayout = ({ children }: { children: React.ReactNode }) => {
  
  const userCookie = cookies().get('REFRESH_TOKEN')?.value;
  const getUser = () => {
    if(!userCookie) return null;
    try {
      const decoded: any = jwt.decode(userCookie);
      if(!decoded) return null;
      return {
        id: decoded?.user_id,
        name: decoded?.user_name,
        email: decoded?.user_email,
        type: decoded?.user_type,
      };
    } catch (e) {
      return null;
    }
  };

  return (
      <AppContextProvider user={getUser()}>
          {children}
      </AppContextProvider>
  );
};

export default ConsoleLayout;