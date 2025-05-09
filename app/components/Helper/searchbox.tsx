import React from 'react'
import { FaCalendarWeek, FaMap } from 'react-icons/fa'

const Searchbox = () => {
  return (
    <div className='absolute z-30 left-1/2 -translate-x-1/2 top-[75%] sm:top-[70%] bg-white rounded-lg p-8 shadow-lg grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 w-[95%] sm:w-[80%]'>
      

      <div className='flex items-center space-x-4'>
        <FaMap className='w-6 h-6 text-blue-700' />
        <div className='w-full'>
          <p className='text-lg font-medium mb-1 text-black'>Location</p>
          <input
            type='text'
            placeholder='Where are you going?'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-600'
          />
        </div>
      </div>


      <div className='flex items-center space-x-4'>
        <FaCalendarWeek className='w-6 h-6 text-blue-700' />
        <div className='w-full'>
          <p className='text-lg font-medium mb-1 text-black'>Start Date</p>
          <input
            type='date'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-600'
          />
        </div>
      </div>

         <div className='flex items-center space-x-4'>
        <FaCalendarWeek className='w-6 h-6 text-blue-700' />
        <div className='w-full'>
          <p className='text-lg font-medium mb-1 text-black'>End Date</p>
          <input
            type='date'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-600'
          />
        </div>
      </div>


     <div className='flex items-center space-x-4'>
        <FaMap className='w-6 h-6 text-blue-700' />
        <div className='w-full'>
          <p className='text-lg font-medium mb-1 text-black'>Guest</p>
          <input
            type='text'
            placeholder='Where are you going?'
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-gray-600'
          />
        </div>
      </div>

    </div>
  )
}

export default Searchbox
