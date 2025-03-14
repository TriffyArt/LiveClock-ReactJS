import React, { useEffect, useState } from "react";
import ClockDisplay from "./ClockDisplay";
import ControlButtons from "./ControlButtons";
import FormatButtons from "./FormatButtons";

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
    <div className="flex flex-col items-center justify-center h-dvh bg-emerald-100 space-y-4">
      <ClockDisplay currentTime={currentTime} />

      <div className="flex space-x-6 gap-[300px]">
        <ControlButtons isRunning={isRunning} startClock={startClock} stopClock={stopClock} />
        <FormatButtons format={format} setFormat={setFormat} />
      </div>
    </div>
  );
};

export default LiveClock;
