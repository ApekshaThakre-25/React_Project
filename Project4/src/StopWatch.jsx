import React, { useState, useEffect } from "react";
import "./StopWatch.css";

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
    const hours = String(Math.floor((time / 3600000) % 24)).padStart(2, 0);
    const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, 0);
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, 0);
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, 0);
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <>
      <div className="main_div">
        <h1 className="font-extrabold font-mono ">{formatTime(time)}</h1>
      </div>
      <div className="flex justify-center gap-x-4 mt-5">
        <button
          onClick={startStopwatch}
          disabled={isRunning}
          className="bg-green-400 font-extrabold rounded-md p-1 font-serif"
        >
          Start
        </button>
        <button
          onClick={stopStopwatch}
          disabled={!isRunning}
          className="bg-red-400 font-extrabold rounded-md p-1 font-serif "
        >
          Stop
        </button>
        <button
          onClick={resetStopwatch}
          className="bg-yellow-400 font-extrabold rounded-md p-1 font-serif"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Stopwatch;
