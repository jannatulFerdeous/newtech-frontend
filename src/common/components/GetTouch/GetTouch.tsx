import React from 'react';
import { GetTouch_data } from '../../../shared/config/constants';

const GetTouch = () => {
  const { title, description, button } = GetTouch_data;

  return (
    <div className="container bg-blue-50 py-14 w-full mt-8">
   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-8 lg:gap-28 mx-6 sm:mx-12 md:mx-16 lg:mx-24">
        <div className="md:ml-10 lg:ml-24 text-center md:text-left">
          <h2 className="text-sm font-semibold text-gray-600 mb-2">{title}</h2>
          <p className="text-xl sm:text-3xl md:text-4xl text-gray-900 mt-4">
            {description}
          </p>
        </div>
        <div className="text-center">
          <button className="bg-blue-900 hover:bg-primary text-white px-7 py-4 font-medium">
            {button.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
