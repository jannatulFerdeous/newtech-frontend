import React from 'react';
import { home_data } from "../config/constants";

const Work_process = () => {
    const { work_process } = home_data;

    return (
        <div className='container sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-32 py-12'>
            <div className='bg-white border-2 border-[#f0f7ff] rounded-lg p-7'>
                {/* Header Section */}
                <div className='text-center'>
                    <p className='mt-2 text-sm sm:text-lg text-gray-600'>{work_process.title1}</p>
                    <h1 className="font-primary text-2xl sm:text-4xl font-bold">{work_process.title2}</h1>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {/* Left Column (Steps 1 & 3) */}
                    <div className="space-y-8">
                        {work_process.step_list.slice(0, 2).map((item, index) => (
                            <div key={index} className="p-5 rounded-md text-justify ">
                                <h2 className="text-lg font-semibold">{item.step}</h2>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Center Column (Image) */}
                    <div className="flex justify-center mt-8 md:mt-0">
                        <img 
                            src={work_process.image.src} 
                            alt="work_process"
                            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover mt-10"  
                        />
                    </div>

                    {/* Right Column (Steps 2 & 4) */}
                    <div className="space-y-8 mt-8 md:mt-0">
                        {work_process.step_list.slice(2, 4).map((item, index) => (
                            <div key={index} className="p-5 rounded-md text-justify ">
                                <h2 className="text-lg font-semibold">{item.step}</h2>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work_process;
