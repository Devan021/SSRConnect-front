'use client';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isNavbarColored, setIsNavbarColored] = useState(false);
  const [pathName, setPathName] = useState('');

  function scrollHandler() {
    if(window?.scrollY >= 20) {
      setIsNavbarColored(true);
    } else {
      setIsNavbarColored(false);
    }
  }

  useEffect(() => {
    window?.addEventListener('scroll', scrollHandler);
    setPathName(pathname);
    return () => {
      window?.removeEventListener('scroll', scrollHandler);
    };
  }, [pathname]);

  const content = (
      <div className="lg:hidden block absolute top-0 w-full left-0 right-0 bg-[#af0c3e] transition">
          <ul className="text-center text-xl sm:px-20 py-5 text-white">
              <li
                  className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer"
                  onClick={() => {
                    setClick(false);
                    if(pathName === '/')
                      document
                        ?.getElementById('hero')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    else router.push('/');
                  }}
              >
                  Home
              </li>
              <li
                  className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer"
                  onClick={() => {
                    setClick(false);
                    if(pathName === '/')
                      document
                        ?.getElementById('about')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    else router.push('/#about');
                  }}
              >
                  About
              </li>
              <li
                  className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer"
                  onClick={() => {
                    setClick(false);
                    if(pathName === '/')
                      document
                        ?.getElementById('features')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    else router.push('/#features');
                  }}
              >
                  Features
              </li>
              <li
                  className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer"
                  onClick={() => {
                    setClick(false);
                    if(pathName === '/')
                      document
                        ?.getElementById('projects')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    else router.push('/#projects');
                  }}
              >
                  Projects
              </li>
              <li
                  className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer"
                  onClick={() => {
                    setClick(false);
                    if(pathName === '/')
                      document
                        ?.getElementById('testimonials')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    else router.push('/#testimonials');
                  }}
              >
                  Testimonials
              </li>
              <li
                  className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer"
                  onClick={() => {
                    setClick(false);
                    if(pathName === '/')
                      document
                        ?.getElementById('contact')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    else router.push('/#contact');
                  }}
              >
                  Contact
              </li>
          </ul>
      </div>
  );

  return (
      <nav
          className={`w-full max-w-[100vw] fixed top-0 h-10vh flex justify-between z-50 text-black lg:py-5 px-2 py-4
    ${
      isNavbarColored
        ? 'bg-[#af0c3e] transition-all duration-300 ease-out shadow-md backdrop-blur-lg'
        : `${pathName === '/' ? 'bg-transparent' : 'bg-[#af0c3e]'}`
    }`}
      >
          <div
              className="w-full md:mx-auto md:max-w-6xl flex items-center justify-between"
          >
              <div
                  className="flex items-center flex-1 cursor-pointer"
                  onClick={() => {
                    router.push('/');
                  }}
              >
                  <Image
                      src="/images/amrita-dark.png"
                      alt="Logo"
                      width={150}
                      height={100}
                      className="object-contain"
                  />
              </div>
              <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden bg-transparent">
                  <div className="flex-10">
                      <ul className="flex gap-8 text-[16px]">
                          <li
                              className="text-white hover:border-b-2 hover:border-[#fff] transition-all cursor-pointer"
                              onClick={() => {
                                if(pathName === '/')
                                  document
                                    ?.getElementById('hero')
                                    ?.scrollIntoView({ behavior: 'smooth' });
                                else router.push('/');
                              }}
                          >
                              Home
                          </li>
                          <li
                              className="text-white hover:border-b-2 hover:border-[#fff] transition-all cursor-pointer"
                              onClick={() => {
                                if(pathName === '/')
                                  document
                                    ?.getElementById('about')
                                    ?.scrollIntoView({ behavior: 'smooth' });
                                else router.push('/#about');
                              }}
                          >
                              About
                          </li>
                          <li
                              className="text-white hover:border-b-2 hover:border-[#fff] transition-all cursor-pointer"
                              onClick={() => {
                                if(pathName === '/')
                                  document
                                    ?.getElementById('features')
                                    ?.scrollIntoView({ behavior: 'smooth' });
                                else router.push('/#features');
                              }}
                          >
                              Features
                          </li>
                          <li
                              className="text-white hover:border-b-2 hover:border-[#fff] transition-all cursor-pointer"
                              onClick={() => {
                                if(pathName === '/')
                                  document
                                    ?.getElementById('testimonials')
                                    ?.scrollIntoView({ behavior: 'smooth' });
                                else router.push('/#testimonials');
                              }}
                          >
                              Testimonials
                          </li>
                          <li
                              className="text-white hover:border-b-2 hover:border-[#fff] transition-all cursor-pointer"
                              onClick={() => {
                                if(pathName === '/')
                                  document
                                    ?.getElementById('projects')
                                    ?.scrollIntoView({ behavior: 'smooth' });
                                else router.push('/#projects');
                              }}
                          >
                              Projects
                          </li>
                          <li
                              className="text-white hover:border-b-2 hover:border-[#fff] transition-all cursor-pointer"
                              onClick={() => {
                                if(pathName === '/')
                                  document
                                    ?.getElementById('projects')
                                    ?.scrollIntoView({ behavior: 'smooth' });
                                else router.push('/#projects');
                              }}
                          >
                              Projects
                          </li>
                          <Link
                              href="/dashboard"
                              className="text-white hover:border-b-2 hover:border-[#fff] transition-all cursor-pointer"
                          >
                              Portal
                          </Link>
                      </ul>
                  </div>
              </div>
              <div className="block md:hidden">{click && content}</div>

              <button
                  className="block sm:hidden transtion z-50"
                  onClick={handleClick}
              >
                  {click ? (
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-x"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="#fff"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M18 6l-12 12"></path>
                          <path d="M6 6l12 12"></path>
                      </svg>
                  ) : (
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-menu-2"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="#fff"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M4 6l16 0"></path>
                          <path d="M4 12l16 0"></path>
                          <path d="M4 18l16 0"></path>
                      </svg>
                  )}
              </button>
          </div>
      </nav>
  );
};

export default Navbar;
