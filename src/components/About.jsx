import React from 'react'


const About = () => {
  return (
    <div>
       <div className='about-one'>
       <video src= "kick.mp4" className='about-video' controls/>
       <p className='services-text'>BOOK PICKUP</p>

            <a href= "https://www.dunzo.com/bangalore" target='_blank'>
            <div className='about-container'>
                <p>
                    Book Dunzo/Swiggy and drop your kicks at: <br /><br />
                    25/26 BMT Complex, Malleshwaram-Bangalore 560003
                </p>
                <img src="g4.png" className='sw' alt="Dunzo App" />
            </div>
            </a>

      <p className='services-text'>Before/After</p>
      
      <div className='about-image-container'>
      <img src= "collageone.png"/>
      </div>
       
    
       
     
      
    </div>
    </div>
  )
}

export default About
