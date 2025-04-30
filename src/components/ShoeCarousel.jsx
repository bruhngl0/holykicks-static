import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const shoes = ["slide1.png", "slide2.png", "slide4.png"];

const ShoeCarousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = containerRef.current.scrollWidth;
      const duration = 20; // adjust to make it faster or slower

      gsap.to(containerRef.current, {
        x: () => `-${totalWidth / 2}px`,
        ease: "linear",
        repeat: -1,
        duration: duration,
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        ref={containerRef}
        style={{
          display: "flex",
          width: "max-content",
        }}
      >
        {/* Duplicate the images for seamless loop */}
        {[...shoes, ...shoes].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`shoe-${index}`}
            style={{
              width: "100px",
              height: "auto",
              marginRight: "0px",
              objectFit: "cover",
              marginBottom: "00px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoeCarousel;
