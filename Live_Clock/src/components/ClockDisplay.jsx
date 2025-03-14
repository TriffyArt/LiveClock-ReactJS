import React from "react";

const ClockDisplay = ({ currentTime }) => (
<div>
  <div className="border-cyan-950 border-[24px] rounded-2xl bg-emerald-300/30">
    <div className="border-cyan-600 border-6 rounded-4xl ">
      <h2 className="font-bold text-9xl text-cyan-500">{currentTime}</h2>
    </div>
  </div>
  </div>
);

export default ClockDisplay;
