import React from "react";

const CustomerCards = ({ profile, content, name, post }) => {
  return (
    <div className="bg-[#1e1c25] rounded-lg pt-16 p-5 h-[18rem] w-[20rem] shadow-lg font-poppins relative flex flex-col gap-5 justify-between">
      <img
        src={profile}
        alt=""
        className=" h-[4rem] absolute top-[-28px] left-4"
      />
      <div className=" text-xs md:text-sm ">{content}</div>
      <div className="">
        <h4 className=" text-sm font-semibold">{name}</h4>
        <p className=" text-xs text-gray-500">{post}</p>
      </div>
    </div>
  );
};

export default CustomerCards;
