import React from 'react';
import ShoeImage1 from '../../public/shoe1.png';
import ShoeImage2 from '../../public/shoe2.png';
import ShoeImage3 from '../../public/shoe3.png';

const Shoes = ({ clickCount }) => {
  const getImage = (count) => {
    switch (count) {
      case 1:
        return ShoeImage1;
      case 2:
        return ShoeImage2;
      case 3:
        return ShoeImage3;
      default:
        return ShoeImage1;
    }
  };

  const imageSrc = getImage(clickCount);

  console.log('clickCount:', clickCount);
  console.log('imageSrc:', imageSrc);

  return (
    <div className="shoes-element">
      <img src={imageSrc} alt={`Shoe ${clickCount}`} />
    </div>
  );
};

export default Shoes;

