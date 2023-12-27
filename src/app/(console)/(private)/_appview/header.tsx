import React from 'react';
import Link from 'next/link';

import UserDropdown from './user-dropdown';

const Header = () => {

  return (
      <header className="transition-all duration-300 ease-in-out fixed w-full z-50 h-[80px] border-b bg-white">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
              <Link href="/dashboard" className="flex title-font font-semibold items-center text-primary mb-4 md:mb-0">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-10 h-10 text-white p-2 bg-primary rounded-full"
                      viewBox="0 0 24 24"
                  >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="ml-3 text-xl">SSR Connect</span>
              </Link>
              {/*<nav className="md:ml-auto flex gap-6 flex-wrap items-center text-base justify-center mr-6 text-color">*/}
              {/*    {MENU_ITEMS.map((item) => (*/}
              {/*        <Link*/}
              {/*            key={item.name}*/}
              {/*            href={item.href}*/}
              {/*            className="hover:text-primary"*/}
              {/*        >*/}
              {/*            {item.name}*/}
              {/*        </Link>*/}
              {/*    ))}*/}
              {/*</nav>*/}
              <div>
                  <UserDropdown />
              </div>
          </div>
      </header>
  );
};

export default Header;
