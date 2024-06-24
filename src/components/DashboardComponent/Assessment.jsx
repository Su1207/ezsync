import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { AiOutlineUserAdd } from "react-icons/ai";

const jobs = [
  {
    Job: "Product Manager",
    TotalCandidates: 150,
    ScreeningCleared: 80,
    Interview: 40,
  },
  {
    Job: "Social Content Manager",
    TotalCandidates: 120,
    ScreeningCleared: 60,
    Interview: 30,
  },
  {
    Job: "Senior UI/UX Designer",
    TotalCandidates: 100,
    ScreeningCleared: 50,
    Interview: 25,
  },
  {
    Job: "Java Developer",
    TotalCandidates: 200,
    ScreeningCleared: 100,
    Interview: 50,
  },
  {
    Job: "Customer Support",
    TotalCandidates: 180,
    ScreeningCleared: 90,
    Interview: 45,
  },
];

const jobProcess = [
  {
    Profile: 101,
    Name: "John Doe",
    Post: "Sales Executive",
    Status: "Interview",
  },
  {
    Profile: 102,
    Name: "Jane Smith",
    Post: "UI/UX Designer",
    Status: "CV Screened",
  },
  {
    Profile: 103,
    Name: "Michael Johnson",
    Post: "Product Manager",
    Status: "Offer Sent",
  },
  {
    Profile: 104,
    Name: "Emily Davis",
    Post: "Java Developer",
    Status: "Interview",
  },
  {
    Profile: 105,
    Name: "David Brown",
    Post: "Social Content Manager",
    Status: "CV Screened",
  },
  {
    Profile: 106,
    Name: "Linda Wilson",
    Post: "Customer Support",
    Status: "Offer Sent",
  },
  {
    Profile: 107,
    Name: "Robert Taylor",
    Post: "Senior UI/UX Designer",
    Status: "Interview",
  },
  //   {
  //     Profile: 108,
  //     Name: "Mary Harris",
  //     Post: "Marketing Manager",
  //     Status: "CV Screened",
  //   },
  //   {
  //     Profile: 109,
  //     Name: "James Clark",
  //     Post: "HR Specialist",
  //     Status: "Offer Sent",
  //   },
  //   {
  //     Profile: 110,
  //     Name: "Patricia Lewis",
  //     Post: "Business Analyst",
  //     Status: "Interview",
  //   },
];

const pendingApproval = [
  {
    Profile: 201,
    Name: "John Doe",
    DateRange: "Nov 19 - Nov 21",
    Status: "Pending",
  },
  {
    Profile: 202,
    Name: "Jane Smith",
    DateRange: "Dec 01 - Dec 05",
    Status: "Approved",
  },
  {
    Profile: 203,
    Name: "Michael Johnson",
    DateRange: "Nov 15 - Nov 17",
    Status: "Rejected",
  },
  {
    Profile: 204,
    Name: "Emily Davis",
    DateRange: "Nov 22 - Nov 24",
    Status: "Pending",
  },
  {
    Profile: 205,
    Name: "David Brown",
    DateRange: "Nov 25 - Nov 28",
    Status: "Approved",
  },
  {
    Profile: 206,
    Name: "Linda Wilson",
    DateRange: "Dec 02 - Dec 06",
    Status: "Rejected",
  },
  {
    Profile: 207,
    Name: "Robert Taylor",
    DateRange: "Nov 18 - Nov 20",
    Status: "Pending",
  },
];

const Assessment = () => {
  return (
    <div className="flex xl:flex-row flex-col font-poppins items-start w-[96%] mt-4 mx-[2%] gap-4 xl:gap-[2%]">
      <div className="w-full xl:w-[72%] shadow-lg p-4 bg-white rounded-md">
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
          <div className="w-full md:w-[72%] h-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2">
              <div className=" border-2 border-orange-200 rounded-lg shadow-lg bg-orange-50 py-2 px-3">
                <div className=" flex items-center gap-2">
                  <img src="/owner.png" alt="" className="h-5" />
                  <div className="text-lg font-semibold text-gray-600">5</div>
                </div>
                <div className=" text-xs mt-2 text-gray-400">Job Opening</div>
              </div>

              <div className=" border-2 border-purple-200 rounded-lg shadow-lg bg-purple-50 p-2">
                <div className=" flex items-center gap-3">
                  <img src="/owner.png" alt="" className="h-5" />
                  <div className="text-lg font-semibold text-gray-600">60</div>
                </div>
                <div className=" text-xs mt-2 text-gray-400">
                  New Candidates
                </div>
              </div>

              <div className=" border-2 border-cyan-100 rounded-lg shadow-lg bg-cyan-50 p-2">
                <div className=" flex items-center gap-3">
                  <img src="/owner.png" alt="" className="h-5" />
                  <div className="text-lg font-semibold text-gray-600">40</div>
                </div>
                <div className=" text-xs mt-2 text-gray-400">
                  Invited for Interview
                </div>
              </div>

              <div className=" border-2 border-purple-200 rounded-lg shadow-lg bg-purple-50 p-2">
                <div className=" flex items-center gap-3">
                  <img src="/owner.png" alt="" className="h-5" />
                  <div className="text-lg font-semibold">20</div>
                </div>
                <div className=" text-xs mt-2 text-gray-400">
                  Interview Passed
                </div>
              </div>
            </div>
            <div className=" mt-4 overflow-x-auto rounded-md">
              <table className="w-full text-sm text-left border rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs sm:text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-3 text-xs font-semibold py-3">
                      Job
                    </th>
                    <th
                      scope="col"
                      className="px-3 text-xs font-semibold py-3 text-center"
                    >
                      Total Candidates
                    </th>
                    <th
                      scope="col"
                      className="px-3 text-xs font-semibold py-3 text-center"
                    >
                      Screening Cleared
                    </th>
                    <th
                      scope="col"
                      className="px-3 text-xs font-semibold py-3 text-center"
                    >
                      Interview#2
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <tr
                      key={index}
                      className="odd:bg-white odd:dark:bg-gray-900 text-xs even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-3 py-3 font-normal text-xs sm:text-sm text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {job.Job}
                      </th>
                      <td className="px-3 py-3 text-center">
                        {job.TotalCandidates}
                      </td>
                      <td className="px-3 py-3 text-center">
                        {job.ScreeningCleared}
                      </td>
                      <td className="px-3 py-3 text-center">{job.Interview}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="hidden md:block h-[22rem] border border-gray-300 w-0"></div>
          <div className="w-full md:w-[28%]">
            <div className=" text-purple-400 text-sm font-semibold mb-4">
              Ongoing Process
            </div>

            <div className=" flex flex-col gap-3">
              {jobProcess.map((process, index) => (
                <div
                  key={index}
                  className=" flex items-center sm:mx-12 md:mx-0 justify-between gap-3"
                >
                  <div className=" flex items-center gap-2">
                    <img
                      src="/man.png"
                      alt=""
                      className="h-5 w-5 rounded-full"
                    />
                    <div className=" flex flex-col items-start">
                      <div className=" text-xs ">{process.Name}</div>
                      <p className=" text-[10px] w-[5.5rem] text-gray-400">
                        {process.Post}
                      </p>
                    </div>
                  </div>
                  <div className=" ">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[28%] shadow-lg p-4 bg-white rounded-md">
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
      </div>
    </div>
  );
};

export default Assessment;
