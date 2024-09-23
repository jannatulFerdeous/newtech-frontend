import React from 'react';
import { GetTouch_data } from '../../../shared/config/constants';

const GetTouch = () => {
  const { title, description, button } = GetTouch_data;

  return (
    <div className="container bg-blue-50 py-14  w-full items-center mt-8 ">
      <div className="grid grid-cols-2 mx-24 items-center gap-28  ">
        <div className="ml-44">
          <h2 className="text-sm font-semibold text-gray-600 mb-2">{title}</h2>
          <p className="text-2xl md:text-3xl text-gray-900 mt-4">
            {description}
          </p>
        </div>
        <div className=" text-center">
          <button className="bg-blue-900  hover:bg-primary text-white px-7 py-4  font-medium">
            {button.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
