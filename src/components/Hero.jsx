import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Halftone from './Halftone'
import Book from './Book'
import BlurryCloud from './BlurryCloud'
import OtherElement from './OtherElement'
import Shoes from './Shoes'
import ClearClouds from './ClearClouds'
import TextElement from './TextElement'

import '../styles/header.scss'
import '../styles/hero.scss'
import '../styles/halftone.scss'



const Hero = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => (prevCount + 1) % 3);
  };

  return (
  
    <div className='hero-one' onClick={handleClick}>
      <Header />
      <Halftone />
      <Book />
      <BlurryCloud clickCount={clickCount} />
      <OtherElement clickCount={clickCount} />
      <Shoes clickCount={clickCount}/>
      <ClearClouds clickCount={clickCount}/>
      <TextElement clickCount={clickCount} />


     
    </div>
  )
}

export default Hero

