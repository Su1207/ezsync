import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const ScreeningTable = ({ atsScoreList, invite, setInvite, jobId }) => {
  const company = useSelector((state) => state.user.currentUser);

  const handleInviteClick = async (id) => {
    try {
      await axios.put(
        `${API_BASE_URL}/updateInvite/${company?.id}/${jobId}/${id}`,
        {},
        { withCredentials: true }
      );

      setInvite(!invite);
    } catch (err) {
      toast.error(err.response.data.message || "Error in updating");
    }
  };

  return (
    <div className=" mt-4 overflow-x-auto rounded-md">
      {atsScoreList && atsScoreList.length > 0 && (
        <table className="w-full text-sm text-left border rtl:text-right text-gray-900 dark:text-gray-400">
          <thead className="text-sm lg:text-base text-white uppercase bg-orange-400">
            <tr>
              <th scope="col" className="px-3 text-xs font-semibold py-3">
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
            {atsScoreList &&
              atsScoreList.map((job, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 text-xs even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-3 py-3 font-normal min-w-[14rem] text-gray-900 dark:text-white"
                  >
                    {job.name}
                  </th>
                  <td className="px-3 py-3 text-center">{job.email}</td>
                  <td className="px-3 py-3 text-center">{job.mobileNumber}</td>
                  <td className="px-3 py-3 text-center">{job.atsScore}</td>
                  <td
                    className="px-3 py-3 text-center capitalize "
                    onClick={() =>
                      job.status === "invite" ? handleInviteClick(job._id) : ""
                    }
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
      )}
    </div>
  );
};

export default ScreeningTable;
