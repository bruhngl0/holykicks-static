import React from 'react';


const BlurryCloud = ({ clickCount }) => {
  const getTransformStyles = (count) => {
    switch (count) {
      case 1:
        return {
          cloudOne: { transform: 'translate(-70%, -70%)' },
          cloudTwo: { transform: 'translate(-30%, -30%)' },
        };
      case 2:
        return {
          cloudOne: { transform: 'translate(-90%, -30%)' },
          cloudTwo: { transform: 'translate(-10%, -70%)' },
        };
    
      
      default:
        return {
          cloudOne: { transform: 'translate(-50%, -50%)' },
          cloudTwo: { transform: 'translate(-50%, -50%)' },
        };
    }
  };

  const styles = getTransformStyles(clickCount);

  return (
    <>
      <img
        src="cloudblur.png"
        className="cloud-one-blur"
        style={styles.cloudOne}
        alt="Cloud 1"
      />
      <img
        src="cloudblur.png"
        className="cloud-two-blur"
        style={styles.cloudTwo}
        alt="Cloud 2"
      />
    </>
  );
};

export default BlurryCloud;
