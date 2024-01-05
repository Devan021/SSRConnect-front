'use client';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

import Button from '@/components/button';
import {auth} from '@/firebase/config';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';

const RegisterPage = () => {

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  async function handleRegister(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target as HTMLFormElement;
    const body = {
      email: form.email.value,
      name: form.name.value,
      password: form.password.value,
      cpassword: form.cpassword.value,
    };

    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).then((res) => res.json()).then((res) => {
      if(res?.user?.id) {
        toast.success('Account created successfully!');
        localStorage.setItem('ssr-user', JSON.stringify({ id: res?.data?.id, email: body.email }));
        window.location.href = '/dashboard';
      } else {
        toast.error(res.message || 'Something went wrong. Please try again later.');
      }
      setIsLoading(false);
    }).catch((e) => {
      setIsLoading(false);
      toast.error('Something went wrong. Please try again later.');
      console.error(e);
    });
  }

  return (
      <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md min-w-[330px] md:min-w-[400px] xl:p-0 shadow-lg border">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight text-left tracking-tight text-gray-900 md:text-2xl">
                  Create new account
              </h1>
              <form className="space-y-4 md:space-y-6 mt-4" onSubmit={handleRegister}>
                  <div className="flex flex-col items-start">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
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
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">Name</label>
                      <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder="John Doe"
                          required
                      />
                  </div>
                  <div className="flex flex-col items-start">
                      <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                  </div>
                  <div className="flex flex-col items-start">
                      <label htmlFor="cpassword" className="block mb-2 text-sm font-medium">Confirm Password</label>
                      <input type="password" name="cpassword" id="cpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                  </div>
                  <Button
                      type="submit"
                      isLoading={isLoading}
                      className="bg-primary/90 hover:bg-primary text-white font-semibold rounded-lg px-4 py-2.5 w-full"
                  >
                      Get Started
                  </Button>
                  <p className="text-sm font-light text-gray-500">
                      Already have an account?
                      {' '}
                      <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                  </p>
              </form>
          </div>
      </div>
  );
};

export default RegisterPage;
