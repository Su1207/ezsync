import React from "react";

const StudentFeatures = () => {
  return (
    <div className="p-4">
      <h2 className="text-4xl text-center text-black mb-8 font-bold">
        Students
      </h2>
      <div className="flex sm:flex-row lg:flex-wrap items-start sm:items-center justify-center gap-0 w-full bg-white">
        <div className="flex flex-col items-center gap-8 mt-6">
          <div className="flex items-center">
            <h4 className="text-xs mr-2 text-black text-right font-semibold w-[8rem] lg:w-[12rem]">
              Realistic 3D Avatar Interviews with Flexible Scheduling
            </h4>
            <img
              src="/virtual-assistant.png"
              alt=""
              className="w-12 md:w-16 h-12 md:h-16 md:p-2 rounded-full bg-purple-500"
            />
            <div className="w-6 md:w-12 border border-dashed border-purple-500"></div>
          </div>
          <div className="flex items-center">
            <h4 className="text-xs text-right text-black font-semibold mr-2 w-[8rem] lg:w-[12rem]">
              Comprehensive Practice Scenarios
            </h4>
            <img
              src="/cheer-up.png"
              alt=""
              className="w-12 md:w-16 h-12 md:h-16 md:p-2 rounded-full bg-yellow-500"
            />
            <div className="w-6 md:w-12 border border-dashed border-yellow-500"></div>
          </div>
          <div className="flex items-center">
            <h4 className="text-xs text-right text-black font-semibold mr-2 w-[8rem] lg:w-[12rem]">
              Instant Feedback, Analysis, and Progress Tracking
            </h4>
            <img
              src="/assessment.png"
              alt=""
              className="w-12 md:w-16 h-12 md:h-16 md:p-2 rounded-full bg-green-500"
            />
            <div className="w-6 md:w-12 border border-dashed border-green-500"></div>
          </div>
          <div className="flex items-center">
            <h4 className="text-xs text-right text-black font-semibold mr-2 w-[8rem] lg:w-[12rem]">
              Peer and Mentor Reviews
            </h4>
            <img
              src="/feedback.png"
              alt=""
              className="w-12 md:w-16 h-12 md:h-16 md:p-2 rounded-full bg-[#1e1c25]"
            />
            <div className="w-6 md:w-12 border border-dashed border-[#1e1c25]"></div>
          </div>
        </div>
        <img
          src="/student.jpeg"
          alt=""
          className="w-[20vw] sm:block hidden sm:w-[25vw] lg:w-[28vw] h-[30vh] sm:h-[35vh] lg:h-[30rem] rounded-full"
        />
        <div className="sm:hidden w-0 h-[350px] border-4 border-black"></div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center">
            <div className="w-6 md:w-12 border border-dashed border-blue-500"></div>
            <img
              src="/job-search.png"
              alt=""
              className="w-12 md:w-16 h-12 md:h-16 md:p-2 rounded-full bg-blue-500 mr-2"
            />
            <h4 className="text-xs text-left text-black font-semibold w-[8rem] lg:w-[12rem]">
              Tailored Job Roles Just for You
            </h4>
          </div>
          <div className="flex items-center">
            <div className="w-6 md:w-12 border border-dashed border-red-500"></div>
            <img
              src="/cv.png"
              alt=""
              className="w-12 md:w-16 h-12 md:h-16 md:p-2 rounded-full bg-red-500 mr-2"
            />
            <h4 className="text-xs text-left text-black font-semibold w-[8rem] lg:w-[12rem]">
              AI-Powered ATS-Friendly Resume Generator
            </h4>
          </div>
          <div className="flex items-center">
            <div className="w-6 md:w-12 border border-dashed border-lime-500"></div>
            <img
              src="/review.png"
              alt=""
              className="w-12 md:w-16 h-12 md:h-16 md:p-2 rounded-full bg-lime-500 mr-2"
            />
            <h4 className="text-xs text-left text-black font-semibold w-[8rem] lg:w-[12rem]">
              Get Your ATS Resume Score Instantly
            </h4>
          </div>
          <div className="flex items-center">
            <div className="w-6 md:w-12 border border-dashed border-orange-500"></div>
            <img
              src="/cover.png"
              alt=""
              className="w-12 md:w-16 h-12 md:h-16 md:p-2 rounded-full bg-orange-500 mr-2"
            />
            <h4 className="text-xs text-left text-black font-semibold w-[8rem] lg:w-[12rem]">
              GenAI Cover Letter Creator Tailored to Job Descriptions
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeatures;
