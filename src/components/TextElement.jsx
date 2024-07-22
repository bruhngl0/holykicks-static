import React from 'react'

const TextElement = ({ clickCount }) => {
    const getTextOne = (count) => {
      switch (count) {
        case 1:
          return <>DEEP CLEANING SINGLE PAIR: <span className="price">1099/-</span> INR</>
         
         
        case 2:
          return <>GROUP DEEP CLEANING: <span className="price">4000/-</span> INR</>;
      
        default:
          return <>BASIC CLEANING SINGLE PAIR: <span className="price">799/-</span> INR</>;
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
