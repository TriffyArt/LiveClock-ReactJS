import React from "react";

const FormatButtons = ({ format, setFormat }) => (
  <div className="flex space-x-4 pt-3 pb-5">
    <button onClick={() => setFormat(true)} className={`px-4 py-2 ${format ? "bg-green-300" : "bg-gray-400"} rounded-xl`}>
      12-Hours
    </button>
    <button onClick={() => setFormat(false)} className={`px-4 py-2 ${!format ? "bg-green-300" : "bg-gray-400"} rounded-xl`}>
      24-Hours
    </button>
  </div>
);

export default FormatButtons;
