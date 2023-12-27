'use client';
import React, { FormEvent } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

import Button from '@/components/button';

const Login = () => {

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const target = e.currentTarget as HTMLFormElement;
    const data = {
      username: (target.elements.namedItem('email') as HTMLInputElement).value,
      password: (target.elements.namedItem('password') as HTMLInputElement).value,
    };

    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if(res.ok) {
          toast.success('Logged in successfully. Please wait...');
          window.location.href = '/dashboard';
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        toast.error(error?.message);
      });
  };
    
  return (
      <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md min-w-[330px] md:min-w-[400px] xl:p-0 shadow-lg border">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight text-left tracking-tight text-gray-900 md:text-2xl">
                  Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6 mt-4" onSubmit={handleLogin}>
                  <div className="flex flex-col items-start">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                      <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder="name@xxx.amrita.edu"
                          required
                      />
                      <div className="text-xs font-semibold text-gray-400 mt-2">
                          use
                          <span className="font-monospace bg-gray-200 py-0.5 px-2 mx-1 text-gray-600 rounded">.amrita.edu</span>
                          mail
                      </div>
                  </div>
                  <div className="flex flex-col items-start">
                      <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                      <div className="flex items-center justify-end mt-1 w-full">
                          <a href="#" className="text-sm font-medium text-primary hover:underline">Forgot password?</a>
                      </div>
                  </div>
                  <Button
                      type="submit"
                      isLoading={isLoading}
                      variant="primary"
                      className="w-full"
                  >
                      Login
                  </Button>
                  <p className="text-sm font-light text-gray-500">
                      Don’t have an account yet?
                      {' '}
                      <Link href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  );
};

export default Login;