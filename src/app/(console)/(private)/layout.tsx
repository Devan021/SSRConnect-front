import React from 'react';

import AppView from './_appview';

const AppPrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <AppView>
          <div className="w-full container mx-auto flex flex-col flex-grow">
              { children }
          </div>
      </AppView>
  );
};

export default AppPrivateLayout;