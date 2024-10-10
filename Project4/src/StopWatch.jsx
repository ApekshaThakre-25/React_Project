import React, { useState, useEffect } from "react";
import "./StopWatch.css"

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    return setInterval(() => {
      setTime((prevTime) => prevTime + 100);
    }, 100);
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = startTimer();
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startStopwatch = () => setIsRunning(true);
  const stopStopwatch = () => setIsRunning(false);
  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(
      2,
      "0"
    );
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="container shadow-md mt-20 text-center h-36 w-1/2 ml-48">
      <h1 className="font-bold font-mono font-1">{formatTime(time)}</h1>
      <div className="flex justify-center gap-x-28 mt-5">
        <button
          onClick={startStopwatch}
          disabled={isRunning}
          className="bg-green-400 font-extrabold rounded-md p-1 w-16"
        >
          Start
        </button>
        <button
          className="bg-red-400 font-extrabold rounded-md p-1 w-16"
          onClick={stopStopwatch}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          className="bg-yellow-400 font-extrabold rounded-md p-1 w-16"
          onClick={resetStopwatch}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
