import React, { useEffect, useState } from "react";

const LiveClock = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour12: true })
  );

  const [isRunning, setIsRunning] = useState(false);
  const [format, setFormat] = useState(false);
  let intervalid;

  useEffect(() => {
    if (isRunning) {
      intervalid = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString([], { hour12: format }));
      }, 1000);
    }

    return () => clearInterval(intervalid);
  }, [isRunning, format]);

  const startClock = () => setIsRunning(true);
  const stopClock = () => {
    setIsRunning(false);
    clearInterval(intervalid);
  };

  return (

    <div className="flex flex-col items-center justify-center h-dvh">
      <h2 className="font-bold text-9xl">{currentTime}</h2>
      <div className="space-x-4">
        <button
          onClick={startClock}
          disabled={isRunning}
          className="px-4 py-2 bg-green-500 rounded disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={stopClock}
          disabled={!isRunning}
          className="px-4 py-2 bg-red-500 rounded disabled:opacity-50"
        >
          Stop
        </button>
      </div>
      <div className="space-x-4">
        <button
          onClick={() => setFormat(true)}
          className={`px-4 py-2 ${
            format ? "bg-blue-500" : "bg-gray-600"
          } rounded`}
        >
          12-Hours
        </button>
        <button
          onClick={() => setFormat(false)}
          className={`px-4 py-2 ${
            !format ? "bg-blue-500" : "bg-gray-600"
          } rounded`}
        >
          24-Hours
        </button>
      </div>
    </div>

  );
 
};

export default LiveClock;


