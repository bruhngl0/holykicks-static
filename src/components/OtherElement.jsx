import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

const TextContainer = styled.div`
  animation: ${({ isFading }) => (isFading ? fadeOut : fadeIn)} 1s forwards;
  
`;

const OtherElement = ({ clickCount }) => {
  const [isFading, setIsFading] = useState(false);
  const [currentCount, setCurrentCount] = useState(clickCount);

  const getText = (count) => {
    switch (count) {
      case 1:
        return 'Deep';
      case 2:
        return 'group';
      default:
        return 'Basic';
    }
  };

  const text = getText(currentCount);

  useEffect(() => {
    if (clickCount !== currentCount) {
      setIsFading(true);
      const timeoutId = setTimeout(() => {
        setIsFading(false);
        setCurrentCount(clickCount);
      }, 1000); // Match the duration of the fadeOut animation

      return () => clearTimeout(timeoutId);
    }
  }, [clickCount, currentCount]);

  const additionalClass = currentCount === 2 ? 'group-style' : '';

  return (
    <TextContainer className={`other-element ${additionalClass}`} isFading={isFading}>
      <p>{text}</p>
    </TextContainer>
  );
};

export default OtherElement;

