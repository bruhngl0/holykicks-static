import React from 'react'

const Hero = () => {
  
  const phoneNumber = "+918083333328"

  const openWhatsApp = ()=>{
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  }

  return (
    <div className='hero-one'>
      <img src= "bg-two.png"  className='hero-img'/>
      <div className="whatsapp-icon" onClick={openWhatsApp}>
        {/* Add your WhatsApp icon image or SVG here */}
        <img src="wa.png" alt="WhatsApp" />
      </div>
    </div>
  )
}

export default Hero
