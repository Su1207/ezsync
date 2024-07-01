import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const ScreeningTable = ({ atsScoreList, invite, setInvite }) => {
  const handleInviteClick = async (id) => {
    try {
      await axios.put(
        `http://localhost:4000/updateInvite/${id}`,
        {},
        { withCredentials: true }
      );

      setInvite(!invite);
    } catch (err) {
      toast.error(err.response.data.message || "Error in updating");
    }
  };

  return (
    <div className=" mt-4 mx-6 overflow-x-auto rounded-md">
      <table className="w-full text-sm text-left border rtl:text-right text-gray-900 dark:text-gray-400">
        <thead className="text-sm lg:text-base text-white uppercase bg-orange-400">
          <tr>
            <th scope="col" className="px-3 text-xs font-semibold  py-3">
              Job Description
            </th>
            <th
              scope="col"
              className="px-3 text-xs font-semibold py-3 text-center"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-3 text-xs font-semibold py-3 text-center"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-3 text-xs font-semibold py-3 text-center"
            >
              Phone
            </th>
            <th
              scope="col"
              className="px-3 text-xs font-semibold py-3 text-center"
            >
              ATS Score
            </th>
            <th
              scope="col"
              className="px-3 text-xs font-semibold py-3 text-center"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {atsScoreList.length > 0 &&
            atsScoreList.map((job, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 text-xs even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-3 py-3 font-normal min-w-[14rem] text-gray-900 dark:text-white"
                >
                  {job.jd}
                </th>
                <td className="px-3 py-3 text-center">{job.name}</td>
                <td className="px-3 py-3 text-center">{job.email}</td>
                <td className="px-3 py-3 text-center">{job.mobileNumber}</td>
                <td className="px-3 py-3 text-center">{job.atsScore}</td>
                <td
                  className="px-3 py-3 text-center capitalize "
                  onClick={() => handleInviteClick(job._id)}
                >
                  <span
                    className={`px-3 py-1 rounded-full shadow-lg ${
                      job.status === "invite"
                        ? "bg-cyan-100 text-cyan-500 cursor-pointer"
                        : job.status === "invited"
                        ? "text-green-500 bg-green-100"
                        : "text-red-500 bg-red-100"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScreeningTable;
