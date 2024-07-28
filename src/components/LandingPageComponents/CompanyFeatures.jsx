import React from "react";

const CompanyFeatures = () => {
  return (
    <div className="flex flex-col items-center bg-white py-10 overflow-hidden  font-poppins">
      <h2 className=" text-4xl text-center text-black mb-8 font-bold">
        Companies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 ">
        <div className="flex flex-col gap-2 text-black hover:bg-[#1e1c25] transition-all duration-300 ease-in-out hover:scale-105 hover:text-gray-300 items-center justify-center w-44 h-44 bg-gray-100 rounded-full shadow-2xl  sm:border-t-[20px] border-l-[20px] border-purple-500">
          <img src="/candidate.png" alt="" className="w-12 h-12" />
          <h2 className="text-xs font-semibold text-center">
            Efficient Candidate Screening
          </h2>
        </div>
        <div className="flex flex-col gap-2 text-black hover:bg-[#1e1c25] transition-all duration-300 ease-in-out hover:scale-105 hover:text-gray-300 items-center justify-center w-44 h-44 bg-gray-100 rounded-full shadow-2xl border-e-[20px] sm:border-e-0 sm:border-b-[20px] border-purple-800">
          <img src="/meeting.png" alt="" className="w-12 h-12" />
          <h2 className="text-xs font-semibold text-center">
            Automated Interview Scheduling
          </h2>
        </div>
        <div className="flex flex-col gap-2 text-black hover:bg-[#1e1c25] transition-all duration-300 ease-in-out hover:scale-105 hover:text-gray-300 items-center justify-center w-44 h-44 bg-gray-100 rounded-full shadow-2xl  sm:border-t-[20px] sm:border-r-0 border-r-[20px] border-purple-500">
          <img src="/graph.png" alt="" className="w-12 h-12" />
          <h2 className="text-xs font-semibold text-center">
            Detailed Candidate Analytics
          </h2>
        </div>
        <div className="flex flex-col gap-2 text-black hover:bg-[#1e1c25] transition-all duration-300 ease-in-out hover:scale-105 hover:text-gray-300 items-center justify-center w-44 h-44 bg-gray-100 rounded-full shadow-2xl  sm:border-b-[20px] border-s-[20px] sm:border-s-0 border-purple-800">
          <img src="/leadership.png" alt="" className="w-12 h-12" />
          <h2 className="text-xs font-semibold text-center">
            Enhanced Candidate Experience
          </h2>
        </div>
        <div className="flex flex-col gap-2 text-black hover:bg-[#1e1c25] transition-all duration-300 ease-in-out hover:scale-105 hover:text-gray-300 items-center justify-center w-44 h-44 bg-gray-100 rounded-full shadow-2xl border-s-[20px] sm:border-s-0  sm:border-t-[20px]  border-purple-500">
          <img src="/scalability.png" alt="" className="w-12 h-12" />
          <h2 className="text-xs font-semibold text-center">
            Scalable Solutions
          </h2>
        </div>
        <div className="flex flex-col gap-2 text-black hover:bg-[#1e1c25] transition-all duration-300 ease-in-out hover:scale-105 hover:text-gray-300 items-center justify-center w-44 h-44 bg-gray-100 rounded-full shadow-2xl  sm:border-b-[20px] border-r-[20px] border-purple-800">
          <img src="/data-management.png" alt="" className="w-12 h-12" />
          <h2 className="text-xs font-semibold text-center">
            Secure Data Management
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CompanyFeatures;
