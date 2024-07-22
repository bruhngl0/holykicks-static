import React from 'react'
import { useEffect, useState } from 'react'




const Tap = () => {
    const [visible, setVisible] = useState(true)


useEffect(()=>{
    setTimeout(() => {
    setVisible(false)    
    }, 10000);
})
  return (
    <div className='tap-image'>
      { visible == true ? <img src = "tapone.png" className='image-size'/> : <></>}
    </div>
  )
}
export default Tap
