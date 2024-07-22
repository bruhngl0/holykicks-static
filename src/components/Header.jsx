import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <h1 className='left-head'> ☰</h1>
      <img src= "logo.png"/>
      <h1 className='right-head'>REACH</h1>
    </div>
  )
}

export default React.memo(Header); 
