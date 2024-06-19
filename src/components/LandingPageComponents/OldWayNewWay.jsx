import React from "react";

const OldWayNewWay = () => {
  return (
    <div className=" w-full py-8 flex bg-white text-black font-poppins">
      <div className=" border-r">
        <h2 className=" text-center font-bold text-3xl mb-4">The Old Way</h2>
        <img src="/old.png" alt="" />
      </div>
      <div>
        <h2 className="text-center font-bold text-3xl mb-4">The New Way</h2>
        <img src="/new.jpg" alt="" />
      </div>
    </div>
  );
};

export default OldWayNewWay;
