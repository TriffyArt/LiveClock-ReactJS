import React from "react";

const ControlButtons = ({ isRunning, startClock, stopClock }) => (
  <div className="space-x-4 pt-3 pb-5">
    <button
      onClick={startClock}
      disabled={isRunning}
      className="px-4 py-2 bg-green-300 rounded-xl disabled:opacity-30"
    >
      Start
    </button>
    <button
      onClick={stopClock}
      disabled={!isRunning}
      className="px-4 py-2 bg-red-300 rounded-xl disabled:opacity-30"
    >
      Stop
    </button>
  </div>
);

export default ControlButtons;