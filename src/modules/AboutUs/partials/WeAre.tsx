import React from 'react';
import { About_data } from '../config/constant';

const WeAre = () => {
  const { we_Are_data } = About_data;

  return (
    <div className="container mx-auto py-12 px-4">
  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:m-16">
  
        <div>
          <h2 className="text-2xl text-center lg:text-start font-bold mb-4">{we_Are_data.title}</h2>
          <p className="text-xl text-justify text-gray-700 mb-4">
            {we_Are_data.des1}
          </p>
          <p className="text-base text-justify text-gray-500 mb-4">
            {we_Are_data.des2}
          </p>
          <p className="text-base text-justify text-gray-500">
            {we_Are_data.des3}
          </p>
        </div>


        <div className="flex justify-center">
          <img
            src={we_Are_data.img.src}
            alt="Who we are"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default WeAre;
