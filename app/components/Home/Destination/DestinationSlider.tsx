"use client";

import { destinationData } from '@/data/data';
import Image from 'next/image';
import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
      itemClass="px-3"
    >
      {destinationData.map((data) => (
        <div key={data.id} className='relative h-[400px] rounded-xl overflow-hidden shadow-lg group'>
          <Image
            src={data.image}
            alt={data.country}
            width={500}
            height={400}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity'></div>
          <div className='absolute bottom-5 left-5 text-white z-10'>
            <h3 className='text-2xl font-semibold'>{data.country}</h3>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default DestinationSlider;
