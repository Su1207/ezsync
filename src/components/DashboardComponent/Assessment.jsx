import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ScreeningTable from "./ScreeningTable";
import { LuPhoneCall } from "react-icons/lu";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Assessment = ({ setCurrentValue, setTotalValue }) => {
  const company = useSelector((state) => state.user.currentUser);
  // const jobStats = useSelector((state) => state.user.jobStats);
  const [jobStats, setJobStats] = useState(null);
  const [atsScoreList, setAtsScoreList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [atsScoreLoading, setAtsScoreLoading] = useState(false);
  const [invite, setInvite] = useState(false);
  const [atsScoreListTable, setAtsScoreListTable] = useState(false);
  const [jobId, setJobId] = useState("");

  useEffect(() => {
    const getJobStats = async (req, res) => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_BASE_URL}/jobStats/${company?.id}`
        );

        if (response.status === 200) {
          setJobStats(response.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getJobStats();
  }, [company, invite]);

  const invitedForInterview = jobStats
    ? jobStats.reduce((acc, job) => acc + job.invitedCount, 0)
    : 0;

  useEffect(() => {
    const totalInterview = jobStats
      ? jobStats.reduce((acc, job) => acc + job.totalResumes, 0)
      : 0;

    const totalInviteCleared = jobStats
      ? jobStats.reduce((acc, job) => acc + job.inviteCount, 0)
      : 0;

    console.log(totalInterview);
    console.l;

    setCurrentValue(totalInviteCleared);
    setTotalValue(totalInterview);
  }, [jobStats]);

  const handleJobClicked = async (jobId) => {
    try {
      setAtsScoreLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/atsScoreList/${company?.id}/${jobId}`
      );

      if (response.status === 200) {
        setAtsScoreList(response.data);
        setJobId(jobId);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setAtsScoreLoading(false);
      setAtsScoreListTable(true);
    }
  };

  useEffect(() => {
    handleJobClicked(jobId);
  }, [invite]);

  if (loading) {
    return (
      <div className=" flex items-center justify-center">
        <svg
          className="animate-spin h-5 w-5 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2zm2 5.291A7.962 7.962 0 014 12H2c0 3.314 2.686 6 6 6v-2.709z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className=" font-poppins sm:w-[96%] mt-4 mx-[2%] gap-4 xl:gap-[2%]">
      <div className="w-full shadow-lg p-4 h-[100vh] md:h-[30rem] overflow-hidden bg-white rounded-md">
        <div className=" flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/folder.png" alt="" className="h-6" />
            <div className=" text-xl font-semibold text-blue-900">
              Assessment
            </div>
          </div>
          <div className=" text-sm text-cyan-400 flex items-center gap-1">
            View All
            <ChevronRightIcon className="h-4" />
          </div>
        </div>

        <div className="flex md:flex-row flex-col h-full mt-6 items-start gap-4 md:gap-3">
          <div className="w-full md:w-[78%] md:h-[85%]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2">
              <div className=" border-2 border-orange-200 rounded-lg shadow-lg bg-orange-50 py-4 px-4">
                <div className=" flex items-center gap-2">
                  <img src="/owner.png" alt="" className="h-6" />
                  <div className="text-xl font-semibold text-gray-600">
                    {jobStats ? jobStats.length : 0}
                  </div>
                </div>
                <div className=" text-sm font-semibold mt-2 text-gray-600">
                  Job Opening
                </div>
              </div>

              {/* <div className=" border-2 border-purple-200 rounded-lg shadow-lg bg-purple-50 p-2">
                <div className=" flex items-center gap-3">
                  <img src="/owner.png" alt="" className="h-5" />
                  <div className="text-lg font-semibold text-gray-600">60</div>
                </div>
                <div className=" text-sm font-semibold mt-2 text-gray-600">
                  New Candidates
                </div>
              </div> */}

              <div className=" border-2 border-cyan-100 rounded-lg shadow-lg bg-cyan-50 p-4">
                <div className=" flex items-center gap-3">
                  <LuPhoneCall className=" text-xl text-cyan-400" />
                  <div className="text-xl font-semibold text-gray-600">
                    {invitedForInterview}
                  </div>
                </div>
                <div className=" text-sm font-semibold mt-2 text-gray-600">
                  Invited for Interview
                </div>
              </div>

              <div className=" border-2 border-purple-200 rounded-lg shadow-lg bg-purple-50 p-4">
                <div className=" flex items-center gap-3">
                  <img src="/owner.png" alt="" className="h-6" />
                  <div className="text-xl font-semibold">-</div>
                </div>
                <div className=" text-sm font-semibold mt-2 text-gray-600">
                  Interview Passed
                </div>
              </div>
            </div>
            <div className=" mt-4 overflow-x-auto h-[16rem] overflow-y-scroll rounded-md">
              {jobStats ? (
                <table className="w-full  text-left border rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 text-sm font-semibold py-3"
                      >
                        Job
                      </th>
                      <th
                        scope="col"
                        className="px-3 text-sm min-w-20 font-semibold py-3 text-center"
                      >
                        Job ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 text-sm font-semibold py-3 text-center"
                      >
                        Total Candidates
                      </th>
                      <th
                        scope="col"
                        className="px-3 text-sm font-semibold py-3 text-center"
                      >
                        Screening Cleared
                      </th>
                      <th
                        scope="col"
                        className="px-3 text-sm font-semibold py-3 text-center"
                      >
                        Interview#2
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobStats &&
                      jobStats.map((job, index) => (
                        <tr
                          key={index}
                          className="odd:bg-white odd:dark:bg-gray-900 text-sm even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-3 py-3 font-normal text-xs sm:text-sm text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
                            onClick={() => handleJobClicked(job.id)}
                          >
                            {job.jobTitle}
                          </th>
                          <td className="px-3 py-3 w-20 text-center">
                            {job.jobId}
                          </td>
                          <td className="px-3 py-3 text-center">
                            {job.totalResumes}
                          </td>
                          <td className="px-3 py-3 text-center">
                            {job.inviteCount}
                          </td>
                          <td className="px-3 py-3 text-center">-</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              ) : (
                <div className="mt-10 animate-pulse flex items-center justify-center">
                  No Data ...
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:block h-[22rem] border border-gray-300 w-0"></div>
          <div className="w-full md:w-[23%] md:h-[85%] overflow-y-auto py-4">
            <div className="flex flex-col md:items-start items-center gap-3">
              {jobStats &&
                jobStats.map((job, index) => (
                  <div
                    key={job.jobId}
                    className="mb-6 flex flex-col md:items-start items-center"
                  >
                    <h3 className="text-sm font-semibold text-purple-400 mb-2">
                      {job.jobTitle} ({job.jobId})
                    </h3>
                    <div className="flex flex-col gap-2">
                      {job.inviteResumes.map((resumeName, idx) => (
                        <div
                          key={idx}
                          className="flex items-center sm:mx-12 md:mx-0 justify-between gap-3"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src="/man.png"
                              alt=""
                              className="h-7 w-7 rounded-full"
                            />
                            <div className="flex flex-col items-start">
                              <div className="text-[13px] ">{resumeName}</div>
                            </div>
                          </div>
                          {/* If you have status or other details to display, add here */}
                          {/* <div className="">
                  <div
                    className={`p-1 text-[10px] ${
                      process.Status === "Interview"
                        ? "text-purple-500 bg-purple-100"
                        : process.Status === "Offer Sent"
                        ? "text-blue-500 bg-blue-100"
                        : "text-cyan-500 bg-cyan-100"
                    } rounded-full shadow-lg`}
                  >
                    {process.Status}
                  </div>
                </div> */}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full xl:w-[28%] shadow-lg p-4 bg-white rounded-md">
        <div className=" text-base sm:text-lg font-semibold text-blue-900 flex items-center gap-2">
          <img src="/pending.png" alt="" className=" h-5" />
          <h2>Pending Approval</h2>
          <p className=" text-[10px] sm:text-xs font-light bg-yellow-50 text-yellow-500 p-1 rounded-full">
            2 Requests
          </p>
        </div>

        <div className=" text-sm text-blue-900 font-semibold mt-5 mb-4">
          Draft Interview
        </div>

        <div className=" flex flex-col gap-3 xl:mx-0 sm:mx-12">
          {pendingApproval.map((data, index) => (
            <div
              key={index}
              className=" flex items-center justify-between gap-3"
            >
              <div className=" flex items-center gap-2">
                <img src="/man.png" alt="" className="h-7 w-7 rounded-full" />
                <div className=" flex flex-col items-start">
                  <div className=" text-xs sm:text-sm ">{data.Name}</div>
                  <p className=" text-[10px] w-[6rem] text-gray-400">
                    {data.DateRange}
                  </p>
                </div>
              </div>
              <div className=" ">
                <div
                  className={`py-1 px-2 text-[10px] sm:text-sm xl:text-xs ${
                    data.Status === "Pending"
                      ? "text-gray-500 bg-gray-100"
                      : data.Status === "Approved"
                      ? "text-green-500 bg-green-100"
                      : "text-red-500 bg-red-100"
                  } rounded-full shadow-lg`}
                >
                  {data.Status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {setAtsScoreListTable && (
        <div className=" mt-5 w-full">
          <ScreeningTable
            atsScoreList={atsScoreList}
            invite={invite}
            setInvite={setInvite}
            jobId={jobId}
          />
        </div>
      )}
    </div>
  );
};

export default Assessment;
