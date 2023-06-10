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
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  const { minutes, seconds } = formatTime(countdown);

  return (
    <div>
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
    backgroundColor: 'lightblueyellow',
  color: 'white', // Change text color
  textAlign: 'center',
  };

export default Countdown;
