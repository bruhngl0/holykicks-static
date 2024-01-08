import React from 'react'

const Hero = () => {
  
  const phoneNumber = "+917349700308"

  const openWhatsApp = ()=>{
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  }

  return (
    <div className='hero-one'>
     
      <div className="whatsapp-icon" onClick={openWhatsApp}>
        {/* Add your WhatsApp icon image or SVG here */}
        <img src="wa.png" alt="WhatsApp" />
      </div>
    </div>
  )
}

export default Hero
