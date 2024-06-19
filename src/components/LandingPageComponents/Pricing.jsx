import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const points = [
    "Up to 10 interviews per month",
    "Ability to add Custom Questions",
  ];
  return (
    <div id="pricing" className="">
      <div className=" mx-4 text-3xl sm:text-5xl mt-16 mb-8 text-center font-bold">
        Start for Free with a 2-Week Trial
      </div>
      <p className=" mb-8  mx-4 text-center">
        Jumpstart your journey with a free 2-week trial
      </p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 gap-4">
        <PricingCard subtitle={"Basic"} price={"79"} points={points} />
        <PricingCard subtitle={"Standard"} price={"349"} points={points} />
        <PricingCard subtitle={"Pro"} price={"599"} points={points} />
        <PricingCard subtitle={"Enterprise"} price={"799"} points={points} />
      </div>
    </div>
  );
};

export default Pricing;
