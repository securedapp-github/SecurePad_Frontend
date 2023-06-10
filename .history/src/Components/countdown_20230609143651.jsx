import React, { useState, useEffect } from 'react';

function Countdown() {
  const [countdown, setCountdown] = useState(300); // Initial countdown value in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  const { hours, minutes, seconds } = formatTime(countdown);

  return (
    <div>
      <div style={boxStyle}>{hours}</div>
      <div style={boxStyle}>{minutes}</div>
      <div style={boxStyle}>{seconds}</div>
      {countdown <= 0 && <p>Time's up!</p>}
    </div>
  );
}

const boxStyle = {
  display: 'inline-block',
  margin: '5px',
  padding: '10px',
  border: '1px solid black',
  borderRadius: '5px',
  fontSize: '24px',
  backgroundColor: 'darkgreen',
  color: 'white',
  textAlign: 'center',
};

export default Countdown;
