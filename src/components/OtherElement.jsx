import React from 'react'

const OtherElement = ({ clickCount }) => {
    const getText = (count) => {
      switch (count) {
        case 1:
          return 'Basic';
        case 2:
          return 'Need';
        case 3:
          return 'Group';
        default:
          return 'Basic';
      }
    };
  
    const text = getText(clickCount);
  
    return (
      <div className="other-element">
        <p>{text}</p>
      </div>
    );
  };
  
  export default OtherElement;
