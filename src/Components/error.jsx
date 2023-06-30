import React from 'react'
import ErrorJPG from '../assets/404.png'
function Error() {
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '120%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  };

  const imageStyle = {
    minWidth: '20%',
    minHeight: '20%',
    width: 'auto',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <img
        src={ErrorJPG}
        alt="Background"
        style={imageStyle}
      />
      {/* Your content goes here */}
    </div>
  );
};

export default Error
