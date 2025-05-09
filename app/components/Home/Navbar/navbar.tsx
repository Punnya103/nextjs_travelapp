
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import {TbAirBalloon} from 'react-icons/tb';

const Navbar = () => {
  return (
    <div className="bg-blue-950 transition-all duration-200 h-[12vh] z-[1000] ">
      <div className="flex items-center h-full justify-between w[98%] xl:w-[80%] mx-auto">
        <div className=" flex items-center px-2 space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            Tripi
          </h1>
        </div>
        <div className="hidden lg:flex items-center space-x-10">
  {navLinks.map((link) => (
    <Link href={link.url} key={link.id}>
      <p className="relative text-white text-base font-medium w-fit block 
        after:block 
        after:content-[''] 
        after:absolute 
        after:h-[3px] 
        after:bg-yellow-300 
        after:w-full 
        after:scale-x-0 
        hover:after:scale-x-100 
        after:transition 
        after:duration-300 
        after:origin-right">
        {link.label}
      </p>
    </Link>
  ))}
</div>
<div className='flex items-center space-x-4'>
<button className='md:px-12 md:py-2.5 px-8 py-2 text-black bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>Book now</button>

<div className='w-8 h-8 cursor-pointer text-white lg:hidden'>
    <HiBars3BottomRight/>
</div>
</div>

      </div>
    </div>
  );
};

export default Navbar;
