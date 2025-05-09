import { useState } from "react";

function StatusToggle() {
  const [left, setLeft] = useState(true);
  const handleClick=()=>{
   setLeft(!left)
  }

  return (
    <div
      className={`h-8 w-16 cursor-pointer relative border rounded-full  flex items-center ${
        left ? "bg-cyan-700" : "bg-[#fa2121ea] border-1 border-red-400"
      } `}
      onClick={handleClick}
    >
      <div
        className={`h-7 w-7 absolute bg-white  rounded-full  toggle ${
          left ? "left-0 " : "right-[1px] "
        }`}
      ></div>
    </div>
  );
}

export default StatusToggle;
