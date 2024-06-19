import React from "react";

const FeatureCard = ({ icon, title, content }) => {
  return (
    <div className="bg-white p-6 hover:bg-[#1e1c25] hover:text-gray-300 transition-all duration-300 ease-in-out hover:scale-105 shadow-lg rounded-lg flex flex-col items-center gap-2 text-black border font-poppins">
      <img src={`${icon}`} alt="" className=" h-16 w-16" />
      <h3 className=" text-lg text-center font-bold mb-2">{title}</h3>
      <p className=" text-xs tracking-wide leading-6 font-light text-center">
        {content}
      </p>
    </div>
  );
};

export default FeatureCard;
