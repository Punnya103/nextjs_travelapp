import React from 'react';
import Searchbox from '../../Helper/searchbox';

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      <video
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-blue-950 opacity-70 z-10 gap-8" />

      <div className="absolute z-20 w-full h-full flex items-center justify-center text-white flex-col">
        <h1 className="text-4xl lg:text-6xl font-bold uppercase">Lets enjoy the nature</h1>
        <h1 className=" font-normal text-sm lg:text-xl">Get best price on 2,000,000+ properties,worldwide</h1>
      <Searchbox/>
      </div>
    </div>
  );
};

export default Hero;
