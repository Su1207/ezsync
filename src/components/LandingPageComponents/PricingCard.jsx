import React from "react";

const PricingCard = ({ subtitle, price, points }) => {
  return (
    <div className="bg-white min-h-[20rem] p-6 hover:bg-[#1e1c25] hover:text-gray-300 transition-all duration-300 ease-in-out hover:scale-105 shadow-lg rounded-lg flex flex-col justify-between gap-4 text-black font-poppins">
      <div className=" flex flex-col items-start gap-4">
        <p className=" text-xs font-semibold">{subtitle}</p>
        <div className=" flex items-end gap-0">
          <h2 className=" text-2xl font-bold">{price}</h2>
          <span className=" text-xs pb-1">/mo</span>
        </div>
        <div className=" h-0 w-full border"></div>
        <div className=" flex flex-col gap-2">
          {points &&
            points.map((point, index) => (
              <p
                key={index}
                className=" flex items-center justify-start gap-2 text-sm"
              >
                &#10003; <span>{point}</span>
              </p>
            ))}
        </div>
      </div>

      <button className=" px-4 py-3 hover:bg-gradient-to-r from-blue-800 via-blue-600 to-sky-400 hover:border-0 hover:text-white border-blue-500 text-blue-500 text-sm rounded-full border">
        Book a Call
      </button>
    </div>
  );
};

export default PricingCard;
