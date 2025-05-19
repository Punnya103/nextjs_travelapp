"use client";

import { destinationData } from '@/data/data';
import Image from 'next/image';
import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const DestinationSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={4000}
      keyBoardControl
      containerClass="carousel-container"
      itemClass="px-3 mb-5"
  
      
    >
      {destinationData.map((data) => (
        <div
          key={data.id}
          className="h-[500px] rounded-xl overflow-hidden shadow-lg bg-white flex flex-col"
        >

          <div className="relative h-[400px] group">
            <Image
              src={data.image}
              alt={data.country}
              fill
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 w-full h-full transition-transform duration-500 group-hover:scale-105 transition-opacity"></div>
          </div>

    
          <div className="flex-1 px-5 py-4 text-gray-800">
            <h3 className="text-xl font-semibold">{data.country}</h3>
            <p className="text-sm text-gray-600">{data.travelers} Travelers</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default DestinationSlider;
