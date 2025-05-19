import React from 'react'
import Hero from './Hero/hero'
import Destination from './Destination/Destination'
import Hotels from './Hotels/Hotels'

const Home = () => {
  return (
    <div className='overflow-hidden'>
<Hero/>
<Destination/>
<Hotels/>
    </div>
  )
}

export default Home 
