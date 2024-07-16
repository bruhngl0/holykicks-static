import React from 'react';

const Book = () => {
  const handleButtonClick = (event) => {
    event.stopPropagation();
    // Button specific functionality
    console.log('Button clicked!');
  };

  return (
    <button className='book-now' onClick={handleButtonClick}>
      BOOK NOW
    </button>
  );
};

export default React.memo(Book);