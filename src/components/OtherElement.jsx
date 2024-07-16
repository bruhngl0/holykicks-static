import React from 'react'

const OtherElement = ({ clickCount }) => {
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
  
    const text = getText(clickCount);
    const additionalClass = clickCount === 2 ? 'group-style' : '';
    return (
      <div className={`other-element ${additionalClass}`}>
        <p >{text}</p>
      
      </div>
    );
  };
  
  export default OtherElement;
