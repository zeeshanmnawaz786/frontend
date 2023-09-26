import React from "react";

const LeftLine = () => {
  return (
    <div>
      <div className="h-full hidden lg:flex flex-col ">
        <div
          className="flex-grow p-4"
          style={{ backgroundColor: "rgba(59,51,100,255)" }}
        ></div>
        <div
          className="p-4 border-2 border-t-yellow-400 border-b-yellow-400 border-s-0 border-e-0"
          style={{ backgroundColor: "rgba(44,37,72,255)" }}
        ></div>
        <div
          className="flex-grow p-4"
          style={{ backgroundColor: "rgba(59,51,100,255)" }}
        ></div>
      </div>
    </div>
  );
};

export default LeftLine;
