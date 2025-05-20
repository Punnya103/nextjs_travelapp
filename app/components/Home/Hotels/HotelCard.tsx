import React from 'react';
import { FaHeart } from 'react-icons/fa';

type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

const HotelCard = ({ hotel }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
      {/* Image Section */}
      <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
        <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10">
          <FaHeart />
        </div>
        <img
          src={hotel.image}
          alt={hotel.name}
          className="object-cover w-full h-full"
        />
      </div>


      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{hotel.name}</h2>
        <p className="text-gray-600 mt-1">{hotel.location}</p>

        <div className="flex gap-2 items-center mt-3">
          <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
            {hotel.rating}
          </span>
          <span className="text-sm text-gray-600 font-semibold mt-1">Exceptional</span>
              <p className="text-sm text-gray-600 mt-1">{hotel.reviews} reviews</p>
        </div>

        <p className="text-sm font-semibold text-gray-900 mt-2">
          Price starting from ${hotel.price}
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
