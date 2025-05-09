import { useState } from "react";

function StatusToggle() {
  const [left, setLeft] = useState(true);

  return (
    <div className="h-8 w-16 relative border border-gray-500 bg-cyan-700 rounded-full flex items-center ">
      <div
        className={`h-7 w-7 absolute bg-white rounded-full cursor-pointer toggle ${
          left ? "left-0" : "right-0"
        }`}
        onClick={() => setLeft(!left)}
      ></div>
    </div>
  );
}

export default StatusToggle;
