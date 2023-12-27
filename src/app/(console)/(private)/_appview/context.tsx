'use client';
import { createContext, useContext } from 'react';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

type TUser = {
  id: string,
  name: string,
  email: string,
  type: 'MENTOR' | 'STUDENT' | 'ADMIN',
  avatarID?: string | null,
};

type TAppContext = { user: TUser | null, };

const AppContext = createContext<TAppContext>({ user: null });

const AppContextProvider = ({ children, user }: { children: React.ReactNode, user: TUser | null }) => {

  return (
      <AppContext.Provider value={{ user }}>
          <Toaster
              position="bottom-right"
              reverseOrder={false}
              gutter={8}
              toastOptions={{
                duration: 3000,
              }}
          >
              {(t) => (
                  <button className="text-left" onClick={() => toast.remove(t.id)}>
                      <ToastBar toast={t} />
                  </button>
              )}
          </Toaster>
          {children}
      </AppContext.Provider>
  );
};

export const useUser = () => useContext(AppContext).user;

export default AppContextProvider;