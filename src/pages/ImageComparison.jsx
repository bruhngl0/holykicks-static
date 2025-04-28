import React, { useState } from "react";
import "../styles/imagecompare.scss"

const ImageComparison = ({ beforeSrc, afterSrc }) => {
  const [slider, setSlider] = useState(50);

  const handleSliderChange = (e) => {
    setSlider(e.target.value);
  };

  return (
    <div className="image-comparison-widget" style={{ "--slider-thumb-position": `${slider}%` }}>
      <img src={afterSrc} alt="After" className="after-image" />
      <img src={beforeSrc} alt="Before" className="before-image" style={{ width: `${slider}%` }} />
      <input
        type="range"
        className="slider"
        min="0"
        max="100"
        value={slider}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default ImageComparison;
