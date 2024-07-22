import React from 'react'
import { useEffect, useState } from 'react'




const Tap = () => {
    const [visible, setVisible] = useState(true)


useEffect(()=>{
    setTimeout(() => {
    setVisible(false)    
    }, 3500);
})
  return (
    <div className='tap-image'>
      { visible == true ? <img src = "tap.png"/> : <></>}
    </div>
  )
}
export default Tap
