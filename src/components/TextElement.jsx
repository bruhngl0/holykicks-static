import React from 'react'

const TextElement = ({ clickCount }) => {
    const getTextOne = (count) => {
      switch (count) {
        case 1:
          return 'BASIC CLEANING SINGLE PAIR: 799/- INR';
        case 2:
          return 'DEEP CLEANING SINGLE PAIR: 1099/- INR ';
        case 3:
          return 'GROUP BASIC CLEANING: 3250/- INR';
        default:
          return 'GROUP DEEP CLEANING: 4000/- INR';
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
