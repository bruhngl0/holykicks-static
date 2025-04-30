import { useEffect, useRef, useState } from "react";

const ShoeCarousel = () => {
  const shoes = ["slide1.png", "slide2.png", "slide4.png"];
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Track image loading
  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  // Create duplicate array for seamless scrolling
  const allShoes = [...shoes, ...shoes];

  useEffect(() => {
    // Log for debugging
    console.log("ShoeCarousel mounted, container:", containerRef.current);

    // Make sure component is visible
    if (wrapperRef.current) {
      wrapperRef.current.style.visibility = "visible";
      wrapperRef.current.style.height = "100px"; // Explicit height
    }

    // Create CSS animation fallback
    const style = document.createElement("style");
    style.textContent = `
      @keyframes scrollShoes {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      .shoe-carousel-animate {
        animation: scrollShoes 20s linear infinite;
      }
      
      @media (max-width: 768px) {
        .shoe-carousel-container {
          overflow: hidden !important;
          width: 100% !important;
          height: 100px !important;
          display: block !important;
          visibility: visible !important;
        }
        
        .shoe-track {
          display: flex !important;
          width: max-content !important;
          height: 100px !important;
        }
        
        .shoe-item {
          display: inline-block !important;
          margin: 0 5px !important;
        }
        
        .shoe-image {
          width: 100px !important;
          height: auto !important;
          max-height: 100px !important;
          object-fit: contain !important;
          display: block !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Wait for images to load before starting animation
    if (imagesLoaded >= allShoes.length) {
      // Try using GSAP if available
      if (
        typeof window !== "undefined" &&
        window.gsap &&
        containerRef.current
      ) {
        try {
          const totalWidth = containerRef.current.scrollWidth;
          const animation = window.gsap.to(containerRef.current, {
            x: `-${totalWidth / 2}px`,
            ease: "linear",
            repeat: -1,
            duration: 20,
          });

          setIsLoaded(true);

          return () => {
            if (animation) animation.kill();
            document.head.removeChild(style);
          };
        } catch (err) {
          console.warn("GSAP animation failed:", err);
          useCssFallback();
        }
      } else {
        useCssFallback();
      }
    }

    function useCssFallback() {
      if (containerRef.current) {
        containerRef.current.classList.add("shoe-carousel-animate");
      }
      setIsLoaded(true);
    }

    return () => {
      // Clean up
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [imagesLoaded]);

  return (
    <div
      ref={wrapperRef}
      className="shoe-carousel-container"
      style={{
        overflow: "hidden",
        width: "100%",
        height: "100px",
        visibility: "visible", // Force visibility
        display: "block", // Ensure display
        position: "relative", // For proper positioning
      }}
    >
      <div
        ref={containerRef}
        className="shoe-track"
        style={{
          display: "flex",
          width: "max-content",
          height: "100px",
        }}
      >
        {allShoes.map((src, index) => (
          <div
            key={index}
            className="shoe-item"
            style={{
              margin: "0 5px",
              display: "inline-block",
            }}
          >
            <img
              src={src}
              alt={`shoe-${(index % shoes.length) + 1}`}
              className="shoe-image"
              style={{
                width: "100px",
                height: "auto",
                maxHeight: "100px",
                objectFit: "contain",
                display: "block",
              }}
              loading="eager"
              onLoad={handleImageLoad}
              onError={() => console.error(`Failed to load image: ${src}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeCarousel;
