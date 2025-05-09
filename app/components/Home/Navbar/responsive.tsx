"use client"
import React, { useState } from 'react'
import Navbar from './navbar'
import Mobilenavbar from './mobilenavbar'

const Responsive = () => {
  const [showNav ,setShowNav] = useState(false);
  const handleNavShow = ()=>setShowNav(true)
  const handleCloseNav =() =>  setShowNav(false)
  return (
    <div>
      <Navbar openNav={handleNavShow}/>
      <Mobilenavbar showNav= {showNav} closeNav ={handleCloseNav}/>
    </div>
  )
}

export default Responsive
