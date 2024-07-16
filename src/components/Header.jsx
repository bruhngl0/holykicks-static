import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <h1 className='left-head'>ABOUT</h1>
      <img src= "logo.png"/>
      <h1 className='right-head'>REACH OUT</h1>
    </div>
  )
}

export default React.memo(Header); 
