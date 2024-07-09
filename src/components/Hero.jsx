import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Halftone from './Halftone'
import Book from './Book'
import BlurryCloud from './BlurryCloud'
import OtherElement from './OtherElement'

import '../styles/header.scss'
import '../styles/hero.scss'
import '../styles/halftone.scss'



const Hero = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => (prevCount + 1) % 5);
  };

  return (
  
    <div className='hero-one' onClick={handleClick}>
      <Header />
      <Halftone />
      <Book />
      <BlurryCloud clickCount={clickCount} />
      <OtherElement clickCount={clickCount} />

     
    </div>
  )
}

export default Hero

