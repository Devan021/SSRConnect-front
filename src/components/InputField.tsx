import React from 'react';
import clsx from 'clsx';

type TInputField = {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string | null;
  labelClassName?: string | null;
  [x: string]: any;
};

const InputField = ({
  label,
  id = null,
  type = 'text',
  required = false,
  className = null,
  labelClassName = null,
  handler = null,
  ...props
}: TInputField) => {
    
  const labelProps: {
    className: string
    htmlFor?: string
  } = {
    className: clsx(['block mb-2 text-sm font-medium', labelClassName]),
  };
  
  if(id) labelProps.htmlFor = id;
    
  return (
      <div className="flex flex-col items-start">
          <label {...labelProps}>
              {label}
              {required && <span className="text-red-700">*</span>}
          </label>
          <input
              type={type}
              className={clsx([
                'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600', 
                'focus:border-primary-600 block w-full p-2.5',
                className,
              ])}
              {...handler}
              {...props}
          />
      </div>
  );
};

export default InputField;