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
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>{formatTime(countdown)}</h1>
      {countdown <= 0 && <p>Time's up!</p>}
    </div>
  );
}

export default Countdown;
