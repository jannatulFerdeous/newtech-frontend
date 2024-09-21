"use client"; // Add this directive at the top

import React, { useState } from 'react';
import { home_data } from "../config/constants";
import { icons } from "@libs/Icons";

const Latest_Blog = () => {
    const { latest_blog } = home_data;
    const [currentIndex, setCurrentIndex] = useState(0);
    const blogsPerView = 3;

    // Handle previous slide click
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? latest_blog.card_list.length - blogsPerView : prevIndex - blogsPerView
        );
    };

    // Handle next slide click
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= latest_blog.card_list.length - blogsPerView ? 0 : prevIndex + blogsPerView
        );
    };

    // Get color for tags
    const getTagColor = (tag: string) => {
        switch (tag.toLowerCase()) {
            case 'computer':
                return 'bg-slate-200'; 
            case 'repair':
                return 'bg-slate-300'; 
            case 'maintenance':
                return 'bg-blue-200'; 
            default:
                return 'bg-blue-100';
        }
    };

    return (
        <div className='bg-[#f0f7ff]'>
            <div className="container mx-auto py-10 sm:py-20 px-4" style={{ maxWidth: '1000px' }}> 
                <h2 className="text-center ont-primary text-2xl sm:text-4xl font-bold mb-8">{latest_blog.title}</h2>
                
                <div className="relative flex items-center">
                    {/* Left Arrow */}
                    <div
                        className="absolute left-0 p-2 cursor-pointer bg-slate-400 text-white hover:text-black z-10 md:left-[-40px] lg:left-[-60px]"
                        onClick={handlePrevClick}
                    >
                        {icons.leftArrow}
                    </div>

                    {/* Blog Cards Slider */}
                    <div className="w-full overflow-hidden">
                        <div
                            className="flex gap-4 transition-transform duration-500 ease-in-out"
                            style={{ 
                                transform: `translateX(-${currentIndex * (100 / blogsPerView)}%)`, 
                                display: 'flex'
                            }}
                        >
                            {latest_blog.card_list.map((blog, index) => (
                                <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
                                    <div className="overflow-hidden h-full">
                                        <img src={blog.image.src} alt={blog.caption} className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold">{blog.caption}</h3>
                                            <p className="text-gray-600 mt-2">{blog.description}</p>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {blog.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className={`text-xs rounded-full px-2 py-1 ${getTagColor(tag)}`}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <div
                        className="absolute right-0 p-2 cursor-pointer bg-slate-400 text-white hover:text-black z-10 md:right-[-40px]  lg:right-[-60px]"
                        onClick={handleNextClick}
                    >
                        {icons.rightArrow}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Latest_Blog;
