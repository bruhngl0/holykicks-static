import React from 'react';

const ClearClouds = ({ clickCount }) => {
  const getTransformStyles = (count) => {
    switch (count) {
      case 1:
        return {
          clearCloudOne: { transform: 'translate(-70%, -70%)' },
          clearCloudTwo: { transform: 'translate(-30%, -30%)'},
        };
      case 2:
        return {
          clearCloudOne: { transform: 'translate(-90%, -30%)' },
          clearCloudTwo: { transform: 'translate(-10%, -70%)' },
        };
     
      default:
        return {
          clearCloudOne: { transform: 'translate(-50%, -50%)' },
          clearCloudTwo: { transform: 'translate(-40%, -50%)' },
        };
    }
  };

  const styles = getTransformStyles(clickCount);

  return (
    <>
      <img
        src="cloudclear.png"
        className="clear-cloud-one"
        style={styles.clearCloudOne}
        alt="Clear Cloud 1"
      />
      <img
        src="cloudclear.png"
        className="clear-cloud-two"
        style={styles.clearCloudTwo}
        alt="Clear Cloud 2"
      />
    </>
  );
};

export default ClearClouds;
