import React from 'react';
import Searchbox from '../../Helper/searchbox';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh] flex justify-center items-center">

      <video
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />


      <div className="absolute top-0 left-0 w-full h-full bg-blue-950 opacity-70 z-10" />


      <div className="absolute z-20 w-full h-full flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold uppercase text-center">
          Let’s enjoy the nature
        </h1>
        <p className="mt-2 text-sm sm:text-base lg:text-xl font-normal text-center">
          Get best price on 2,000,000+ properties, worldwide
        </p>


        <Searchbox />
<Link href="#" className="mt-6 inline-block">
  <div className='-mt-10 rounded px-20  md:px-28 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 z-30 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300'>
    <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-1/2 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
    <span className='relative font-bold'>Search</span>
  </div>
</Link>
      </div>
    </div>
  );
};

export default Hero;
