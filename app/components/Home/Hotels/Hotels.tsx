import React from 'react'
import SectionHeading from '../../Helper/SectionHeading';
import HotelCard from './HotelCard';
import { hotelsData } from '@/data/data';


const Hotels = () => {
  return (
    <section className='w-full min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6 sm:px-20'>
      <SectionHeading
        heading='Exploring Popular Destinations'
        smalltext='Get ready to explore your favorite vacation spots'
      />
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {hotelsData.map(hotel => (
    <HotelCard
      key={hotel.id}
      hotel={{
        id: hotel.id,
        image: hotel.image,
        name: hotel.name,
        location: hotel.location,
        rating: hotel.rating,
        reviews: hotel.reviews,
        price: hotel.price.toString(),
      }}
    />
  ))}
</div>

    </section>
  );
};

export default Hotels;
