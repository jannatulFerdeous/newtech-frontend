import React from 'react'
import { home_data } from "../config/constants";

const Our_Service = () => {
  const { our_service } = home_data;

  return (
    <div className='container mx-auto bg-[#f0f7ff] py-10 sm:py-20'>
      {/* Header Section */}
      <div className='text-center'>
        <h1 className="font-primary text-2xl sm:text-4xl font-bold">{our_service.title}</h1>
        <p className='mt-2 text-sm sm:text-lg text-gray-600'>{our_service.description}</p>
      </div>

      {/* Button Section */}
      <div className='text-right px-5 sm:px-20 lg:px-44 mt-5'>
        <button className='font-semibold text-blue-600'>{our_service.button.text}</button>
      </div>

      {/* Services Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-5 sm:px-10 lg:px-44'>
        {our_service.service_list.map((item, index) => (
          <div key={index} className="bg-white shadow-md p-5 rounded-md text-center">
            <img 
              src={item.image.src} 
              alt={item.title} 
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 object-contain"
            />
            <h2 className="text-sm sm:text-lg font-semibold">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Our_Service;
