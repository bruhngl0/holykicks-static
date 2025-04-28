import React, { useEffect, useRef } from "react";
import "../styles/curtain.scss"

const CurtainEffect = () => {
  const containerRef = useRef(null);
  const foregroundRef = useRef(null);

  const curtainEffect = (width) => {
    if (foregroundRef.current) {
      // Choose ONE: Percentage or Pixels
      // foregroundRef.current.style.width = width / 5 + "%"; // Method 1 (Percentage)
      foregroundRef.current.style.width = width + "px"; // Method 2 (Pixels)
    }
  };

  const handleCurtain = (e) => {
    window.requestAnimationFrame(() => {
      const containerLeft = containerRef.current.getBoundingClientRect().left;
      curtainEffect(e.pageX - containerLeft);

      // OR, use offsetX for simpler method (if you uncomment Method 2 above)
      // curtainEffect(e.nativeEvent.offsetX);
    });
  };

  return (
    <div
      className="picture-curtain"
      onMouseEnter={handleCurtain}
      onMouseMove={handleCurtain}
      onMouseLeave={handleCurtain}
      ref={containerRef}
    >
      <div className="background-picture-container">
        <img
          className="background-picture"
          src="J11.png"
          alt="background"
          style={{
            height: "500px"
          }}
        />
      </div>
      <div className="foreground-picture-container" ref={foregroundRef}>
        <img
          className="foreground-picture"
          src="J112.png"
          alt="foreground"
          style={{
            height: "500px"
          }}
        />
      </div>
    </div>
  );
};

export default CurtainEffect;
