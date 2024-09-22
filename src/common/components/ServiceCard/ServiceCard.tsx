import React from 'react'
import { serviceCard } from "@config/constants";

const ServiceCard = () => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-5 sm:px-10 lg:px-44'>
        {serviceCard.service_list.map((item, index) => (
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

export default ServiceCard;
