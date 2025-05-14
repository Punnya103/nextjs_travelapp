import React from 'react';
import SectionHeading from '../../Helper/SectionHeading';
import DestinationSlider from './DestinationSlider';

const Destination = () => {
  return (
    <section className='w-full min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6 sm:px-20'>
      <SectionHeading
        heading='Exploring Popular Destinations'
        smalltext='Get ready to explore your favorite vacation spots'
      />
      <div className="mt-10">
        <DestinationSlider />
      </div>
    </section>
  );
};

export default Destination;
