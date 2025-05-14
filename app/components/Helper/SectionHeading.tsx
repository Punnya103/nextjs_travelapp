import React from 'react';

type Props = {
  heading: string;
  smalltext: string;
};

const SectionHeading = ({ heading, smalltext }: Props) => {
  return (
    <div className=' pt-6  sm:pt-12 pl'>
      <h1 className='text-3xl sm:text-4xl font-bold text-blue-900'>{heading}</h1>
      <p className='mt-2 text-gray-600 text-base sm:text-lg font-medium'>{smalltext}</p>
    </div>
  );
};

export default SectionHeading;
