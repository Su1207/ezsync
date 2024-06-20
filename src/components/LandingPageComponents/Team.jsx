import React from "react";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div
      id="team"
      className="w-full flex flex-col px-6 gap-6 justify-center items-center py-24"
    >
      <div className="text-3xl sm:text-5xl font-bold text-[#45ffc7]">Team</div>
      <button
        onClick={handleClick}
        className="rounded-full shadow-md px-10 sm:px-20 py-2 sm:py-4 bg-cyan-400 hover:bg-white transition-all duration-300 ease-in-out hover:text-black"
      >
        Get Started
      </button>
      <div className="w-full flex justify-center">
        <div className="flex items-center gap-5 mt-2 overflow-x-auto snap-x snap-mandatory w-full">
          <div className="example relative w-80 flex-shrink-0 snap-start">
            <img
              src="/team1.jpeg"
              alt=""
              className="w-80 rounded-lg transition-opacity duration-400 ease-out hover:opacity-20"
            />
            <div className="content">
              <div className="text flex flex-col">
                <h2 className=" text-xl text-white">Caleb Jones</h2>
                <p className=" text-sm text-gray-200">CEO</p>
              </div>
            </div>
          </div>
          <div className="example relative w-80 flex-shrink-0 snap-start">
            <img
              src="/team2.jpeg"
              alt=""
              className="w-80 rounded-lg transition-opacity duration-400 ease-out hover:opacity-20"
            />
            <div className="content">
              <div className="text flex flex-col">
                <h2 className=" text-xl text-white">Deepti Sharma</h2>
                <p className=" text-sm text-gray-200">CMO</p>
              </div>
            </div>
          </div>
          <div className="example relative w-80 flex-shrink-0 snap-start">
            <img
              src="/team3.jpeg"
              alt=""
              className="w-80 rounded-lg transition-opacity duration-400 ease-out hover:opacity-20"
            />
            <div className="content">
              <div className="text flex flex-col">
                <h2 className=" text-xl text-white">Caleb Jones</h2>
                <p className=" text-sm text-gray-200">CEO</p>
              </div>
            </div>
          </div>
          <div className="example relative w-80 flex-shrink-0 snap-start">
            <img
              src="/team2.jpeg"
              alt=""
              className="w-80 rounded-lg transition-opacity duration-400 ease-out hover:opacity-20"
            />
            <div className="content">
              <div className="text flex flex-col">
                <h2 className=" text-xl text-white">Caleb Jones</h2>
                <p className=" text-sm text-gray-200">CEO</p>
              </div>
            </div>
          </div>
          <div className="example relative w-80 flex-shrink-0 snap-start">
            <img
              src="/team3.jpeg"
              alt=""
              className="w-80 rounded-lg transition-opacity duration-400 ease-out hover:opacity-20"
            />
            <div className="content">
              <div className="text flex flex-col">
                <h2 className=" text-xl text-white">Caleb Jones</h2>
                <p className=" text-sm text-gray-200">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
