import React from "react";

const OldWayNewWay = () => {
  return (
    <div className=" w-full py-8 md:flex bg-white text-black font-poppins">
      <div className=" border-r">
        <h2 className=" text-center font-bold text-xl sm:text-3xl mb-4">
          The Old Way
        </h2>
        <img src="/old.png" alt="" />
      </div>
      <div className="w-full relative">
        <h2 className="text-center w-full font-bold absolute top-4 sm:top-12 md:top-0 text-xl  sm:text-3xl md:mb-4">
          The New Way
        </h2>
        <img src="/new.jpg" alt="" />
      </div>
    </div>
  );
};

export default OldWayNewWay;
