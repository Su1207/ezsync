import React from "react";
import { BsHeartPulse } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";

const LiveUpdates = () => {
  return (
    <div className="flex md:flex-row flex-col font-poppins items-start w-[96%] mt-4 mx-[2%] gap-4 md:gap-[2%]">
      <div className="w-full md:w-[55%] shadow-lg p-5 bg-white rounded-md">
        <div className=" flex gap-3 items-center text-xl text-blue-900 font-semibold">
          <img src="/liveUpdate.png" alt="" className="h-7" />
          <h2>Live Updates</h2>
        </div>

        <div className=" flex flex-col gap-3 sm:mx-6 mt-8">
          <div className=" flex items-center lg:ml-4 gap-4">
            <BsHeartPulse className=" text-cyan-400 text-2xl" />
            <div className="flex flex-col items-start">
              <div className=" text-xs sm:text-sm">
                John has cleared the python screening interview with 96%
              </div>
              <div className=" flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                <div>Today</div>
                <div className=" border w-0 h-3 border-gray-400"></div>
                <div className=" cursor-pointer">View Report</div>
              </div>
            </div>
          </div>

          <div className=" w-full h-0 border my-3"></div>

          <div className=" flex items-center lg:ml-4 gap-4">
            <BsHeart className=" text-cyan-400 text-2xl" />
            <div className="flex flex-col items-start">
              <div className=" text-xs sm:text-sm text-red-500">
                Junaid is rejected for Python position, don't have exp in Pytest
              </div>
              <div className=" flex items-center gap-2 text-[10px] sm:text-[10px] sm:text-xs text-gray-400">
                <div>Today</div>
                <div className=" border w-0 h-3 border-gray-400"></div>
                <div className=" cursor-pointer">View Report</div>
              </div>
            </div>
          </div>

          <div className=" w-full h-0 border my-3"></div>

          <div className=" flex items-center lg:ml-4 gap-4">
            <HiOutlineSpeakerphone className=" text-cyan-400 text-2xl" />
            <div className="flex flex-col items-start">
              <div className=" text-xs sm:text-sm">
                John has cleared the python screening interview with 96%
              </div>
              <div className=" flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                <div>Today</div>
                <div className=" border w-0 h-3 border-gray-400"></div>
                <div className=" cursor-pointer">View Report</div>
              </div>
            </div>
          </div>

          <div className=" w-full h-0 border my-3"></div>

          <div className=" flex items-center lg:ml-4 gap-4">
            <FaRegUser className=" text-cyan-400 text-2xl" />
            <div className="flex flex-col items-start">
              <div className=" text-xs sm:text-sm">
                John has cleared the python screening interview with 96%
              </div>
              <div className=" flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                <div>Today</div>
                <div className=" border w-0 h-3 border-gray-400"></div>
                <div className=" cursor-pointer">View Report</div>
              </div>
            </div>
          </div>

          <div className=" w-full h-0 border my-3"></div>

          <div className=" flex items-center lg:ml-4 gap-4">
            <BsHeartPulse className=" text-cyan-400 text-2xl" />
            <div className="flex flex-col items-start">
              <div className=" text-xs sm:text-sm">
                John has cleared the python screening interview with 96%
              </div>
              <div className=" flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                <div>Today</div>
                <div className=" border w-0 h-3 border-gray-400"></div>
                <div className=" cursor-pointer">View Report</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[45%] shadow-lg p-5 bg-white rounded-md">
        <div className=" flex gap-3 justify-center text-xl text-blue-900 font-semibold">
          Resume Screening
        </div>
        <div className=" mt-4">
          <table className=" border-2 border-gray-300 w-full text-center shadow-lg text-xs sm:text-sm">
            <thead className=" rounded-lg  border">
              <tr>
                <th className=" px-3 py-3 border">Name</th>
                <th className=" px-3 py-3 border">Status</th>
                <th className=" px-3 py-3 border">Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" px-3 py-3 border">Mohit</td>
                <td className=" px-3 py-3 border">Fail</td>
                <td className=" px-3 py-3 border">Lack of GenAI</td>
              </tr>
              <tr>
                <td className=" px-3 py-3 border">Kairya</td>
                <td className=" px-3 py-3 border">Pass</td>
                <td className=" px-3 py-3 border">
                  Have almost all skills set
                </td>
              </tr>
              <tr>
                <td className=" px-3 py-3 border">Sudhanshu</td>
                <td className=" px-3 py-3 border">Passed</td>
                <td className=" px-3 py-3 border">All skills set</td>
              </tr>
              <tr>
                <td className=" px-3 py-3 border">Kairya</td>
                <td className=" px-3 py-3 border">Pass</td>
                <td className=" px-3 py-3 border">
                  Have almost all skills set
                </td>
              </tr>
              <tr>
                <td className=" px-3 py-3 border">Kairya</td>
                <td className=" px-3 py-3 border">Pass</td>
                <td className=" px-3 py-3 border">
                  Have almost all skills set
                </td>
              </tr>
              <tr>
                <td className=" px-3 py-3 border">Kairya</td>
                <td className=" px-3 py-3 border">Pass</td>
                <td className=" px-3 py-3 border">
                  Have almost all skills set
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LiveUpdates;
