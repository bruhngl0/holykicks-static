import React from 'react'

const TextElement = ({ clickCount }) => {
    const getTextOne = (count) => {
      switch (count) {
        case 1:
          return 'GROUP DEEP CLEANING: 4000/- INR';
         
        case 2:
          return 'DEEP CLEANING SINGLE PAIR: 1099/- INR ';
      
        default:
          return 'BASIC CLEANING SINGLE PAIR: 799/- INR';
      }
    };
  
    const text = getTextOne(clickCount);
  
    return (
      <div className="text-element">
        <p>{text}</p>
      </div>
    );
  };
  
  export default TextElement;
