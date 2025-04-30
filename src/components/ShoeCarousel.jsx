import { useEffect, useRef, useState } from "react";

const ShoeCarousel = () => {
  const shoes = ["slide1.png", "slide2.png", "slide4.png"];
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
    `;
    document.head.appendChild(style);

    // Only run GSAP animation if it's available
    if (typeof window !== "undefined") {
      try {
        // Try to access GSAP if it's already loaded
        const gsapGlobal = window.gsap;

        if (gsapGlobal && containerRef.current) {
          const totalWidth = containerRef.current.scrollWidth;
          const animation = gsapGlobal.to(containerRef.current, {
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
        } else {
          // If GSAP isn't available or container isn't ready, use CSS animation
          if (containerRef.current) {
            containerRef.current.classList.add("shoe-carousel-animate");
          }
          setIsLoaded(true);
        }
      } catch (err) {
        // Fallback to CSS animation if accessing GSAP fails
        console.warn("GSAP not available, using CSS fallback", err);
        if (containerRef.current) {
          containerRef.current.classList.add("shoe-carousel-animate");
        }
        setIsLoaded(true);
      }
    } else {
      setIsLoaded(true);
    }

    return () => {
      // Clean up
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Creating duplicate array for seamless scrolling
  const allShoes = [...shoes, ...shoes];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        ref={containerRef}
        style={{
          display: "flex",
          width: "max-content",
        }}
      >
        {allShoes.map((src, index) => (
          <div key={index} style={{ margin: "0 5px" }}>
            <img
              src={src}
              alt={`shoe-${(index % shoes.length) + 1}`}
              style={{
                width: "100px",
                height: "auto",
                objectFit: "cover",
              }}
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeCarousel;
