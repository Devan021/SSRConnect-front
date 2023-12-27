'use client';
import { XIcon } from 'lucide-react';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Uppy from '@uppy/core';
import DragDrop from '@uppy/drag-drop';

import InputField from '@/components/InputField';
import Button from '@/components/button';


import '@uppy/core/dist/style.min.css';
import '@uppy/drag-drop/dist/style.min.css';

type Inputs = {
  title: string
  proposal: File
  description?: string
};

const CreateProjectPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(errors);

  useEffect(() => {
    new Uppy().use(DragDrop, { target: '#drag-drop' });
  }, []);
  
  return (
      <div className="p-5 flex-grow flex items-center justify-center flex-col gap-4">
          <div className="bg-white max-w-[600px] md:min-w-[400px] rounded-lg pt-6 pb-4 px-4">
              <div className="pb-4 mb-4 border-b flex justify-between items-center">
                  <h1 className="text-2xl text-primary font-bold">Submit Proposal</h1>
                  <button className="pr-4">
                      <XIcon />
                  </button>
              </div>
              <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit(onSubmit)}>
                  <InputField
                      required
                      label="Title"
                      handler={{ ...register('title', { required: true }) }}
                  />
                  <div className="flex flex-col gap-2">
                      <label htmlFor="description" className="text-sm flex justify-between -mb-1 font-medium text-gray-700">
                          Description
                          <span className="text-xs text-gray-400">0/1000</span>
                      </label>
                      <textarea
                          id="description"
                          maxLength={1000}
                          rows={3}
                          className="border border-gray-300 rounded-lg p-2 bg-gray-50"
                          {...register('description', { maxLength: 1000 })}
                      />
                  </div>
                  <div className="flex flex-col gap-2">
                      <label htmlFor="attachment" className="text-sm font-medium text-gray-700">
                          Proposal
                          <span className="text-red-700">*</span>
                          <span className="text-xs ml-2 text-gray-400">(PDF Only)</span>
                      </label>
                      <div id="drag-drop" />
                      {/*<input*/}
                      {/*    required*/}
                      {/*    type="file"*/}
                      {/*    id="attachment"*/}
                      {/*    {...register('proposal', { required: true })}*/}
                      {/*    accept="application/pdf"*/}
                      {/*    className="border bg-gray-50 border-gray-300 rounded-lg p-2"*/}
                      {/*/>*/}
                  </div>
                  <div className="flex justify-end">
                      <Button type="submit" variant="primary">
                          Submit Proposal
                      </Button>
                  </div>
              </form>
          </div>
      </div>
  );
};

export default CreateProjectPage;