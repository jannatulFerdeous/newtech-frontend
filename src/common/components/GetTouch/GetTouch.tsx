import React from 'react';
import { GetTouch_data } from '../../../shared/config/constants';

const GetTouch = () => {
  const { title, description, button } = GetTouch_data;

  return (
    <div className="container bg-blue-50 py-12">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="ml-16">
          <h2 className="text-sm font-semibold text-gray-600 mb-2">{title}</h2>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">
            {description}
          </p>
        </div>
        <div className="mr-16">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">
            {button.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
