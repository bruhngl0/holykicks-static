import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ShoeImage1 from '../../public/shoe1.png';
import ShoeImage2 from '../../public/shoe2.png';
import ShoeImage3 from '../../public/shoe3.png';

const fadeIn = keyframes`
 0% {
    opacity: 1;
    transform: translateY(100%);
  }
  50% {
    opacity: 1;
    transform: translateY(-20%); /* Adjust the value for how high it should go */
  }
  70% {
    transform: translateY(10px); /* Adjust the value for the initial bounce down */
  }
  100% {
    transform: translateY(0); /* Settle at the final position */
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to{
     opacity: 0;
     transform: translateY(-100%);
  }
`;

const ShoeContainer = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ isFading }) => (isFading ? fadeOut : fadeIn)} 3s forwards;
  z-index: 999;
 
  
`;

const Shoes = ({ clickCount }) => {
  const [currentCount, setCurrentCount] = useState(clickCount);
  const [isFading, setIsFading] = useState(false);
 

  const getImage = (count) => {
    switch (count) {
      case 1:
        return ShoeImage2;
      case 2:
        return ShoeImage1;
      default:
        return ShoeImage3;
    }
  };

  const imageSrc = getImage(currentCount);

  useEffect(() => {
    if (clickCount !== currentCount) {
      
      setIsFading(true);
      const timeoutId = setTimeout(() => {
        setCurrentCount(clickCount);
        setIsFading(false);
        
      }, 1000); // Match the duration of the fadeOut animation

      return () => clearTimeout(timeoutId);
    }
  }, [clickCount, currentCount]);

  console.log('clickCount:', clickCount);
  console.log('imageSrc:', imageSrc);

  return (
    <ShoeContainer isFading={isFading} className='shoes-element'>
      <img src={imageSrc}  alt={`Shoe ${currentCount}`} />
    </ShoeContainer>
  );
};

export default Shoes;
