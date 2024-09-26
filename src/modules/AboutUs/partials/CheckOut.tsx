import React from 'react';
import { About_data } from '../config/constant';

const CheckOut = () => {
  const checkout_data = About_data.checkout_data; // Assuming this exists in your data

  return (
    <div className='container bg-blue-50 py-14 w-full mt-8'>
      <div className='grid grid-cols-1  md:grid-cols-2  md:px-0'>

        <div className=''>
          <h1 className='text-lg font-semibold '>
            Check out what our clients are saying about us:
          </h1>
        </div>
        <div>
          <p className='text-gray-700'>
            {checkout_data.description}
          </p>
          <p className='font-semibold mt-4'>
            {checkout_data.name}
          </p>
          <p className='text-gray-500'>
            {checkout_data.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
