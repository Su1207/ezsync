import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const ResumeScreening = () => {
  const [jd, setJd] = useState("");
  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [jobIdOptions, setJobIdOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedJobId, setSelectedJobId] = useState("");
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [addingNewJobId, setAddingNewJobId] = useState(false);
  const [newOption, setNewOption] = useState("");
  const [jobIdNew, setJobIdNew] = useState("");
  const [limit, setLimit] = useState("");
  const [jobTitlesLoading, setJobTitlesLoading] = useState(false);
  const [jobIdsLoading, setJobIdsLoading] = useState(false);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value === "addNew") {
      setIsAddingNew(true);
      setSelectedOption("");
    } else {
      setIsAddingNew(false);
      setSelectedOption(value);
    }
  };

  const handleIdSelectChange = (event) => {
    const value = event.target.value;
    if (value === "addNew") {
      setAddingNewJobId(true);
      setSelectedJobId("");
    } else {
      setAddingNewJobId(false);
      setSelectedJobId(value);
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setFileNames(selectedFiles.map((file) => file.name));
  };

  useEffect(() => {
    const getJobTitles = async () => {
      try {
        setJobTitlesLoading(true);
        const response = await axios.get(
          `${API_BASE_URL}/jobTitlesList/${user?.id}`
        );

        if (response.status === 200) {
          setOptions(response.data);
        }
      } catch (err) {
        console.error(err.response.data.message);
      } finally {
        setJobTitlesLoading(false);
      }
    };
    getJobTitles();
  }, []);

  useEffect(() => {
    const getJobIds = async () => {
      if (selectedOption !== "") {
        try {
          setJobIdsLoading(true);
          const response = await axios.post(`${API_BASE_URL}/getJobIds`, {
            jobTitle: selectedOption,
            companyId: user?.id,
          });

          if (response.status === 200) {
            setJobIdOptions(response.data);
          }
        } catch (err) {
          console.error(err.response.data.message);
        } finally {
          setJobIdsLoading(false);
        }
      }
    };
    getJobIds();
  }, [selectedOption]);

  const handleAddNew = () => {
    if (newOption.trim() !== "") {
      setOptions([...options, newOption]);
      setSelectedOption(newOption);
      setIsAddingNew(false);
      setNewOption("");
    }
  };

  const handleAddNewId = () => {
    if (jobIdNew !== "") {
      setJobIdOptions([...jobIdOptions, jobIdNew]);
      setSelectedJobId(jobIdNew);
      setAddingNewJobId(false);
      setJobIdNew("");
    }
  };

  const user = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedOption) {
      return toast.error("Job Title missing");
    }

    const formData = new FormData();
    formData.append("jd", jd);
    formData.append("companyId", user?.id);
    formData.append("jobTitle", selectedOption);
    formData.append("jobId", selectedJobId);
    formData.append("limit", parseInt(limit, 10));
    files.forEach((file) => {
      formData.append("resumes", file);
    });

    try {
      setLoading(true);
      const response = await axios.post(
        `${API_BASE_URL}/process-resumes`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setFileNames([]);
        setFiles([]);
        setJd("");
        toast.success("Resume Uploaded");
        navigate(
          `${user?.role === "student" ? "/studentDashboard" : "/dashboard"}`
        );
      }
    } catch (error) {
      console.error("Error uploading resumes", error);
      toast.error(error.response.data.message || "Error uploading resumes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-poppins lg:bg-blue-950 min-h-screen lg:flex">
      <div className="flex-1 text-[32px] lg:text-white sm:text-5xl text-center lg:flex items-center justify-center font-bold p-4 lg:relative">
        <div>Resume</div>
        {/* <div className=" absolute top-[28%]">
          <img src="/user.jpeg" alt="" className=" h-20 w-20 rounded-full" />
        </div> */}
        <div className=" lg:absolute lg:top-[55%] flex items-center justify-center gap-4">
          <div className="  left-20">
            <img
              src="/resume1.png"
              alt=""
              className="h-12 sm:h-16 sm:w-16 animate"
            />
          </div>
          <div className=" ">Screening</div>
          <div className=" ">
            <img
              src="/resume2.png"
              alt=""
              className="h-12 sm:h-16 sm:w-16 animate"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 lg:min-h-screen bg-white flex items-center justify-center w-full">
        <form className="sm:px-8 px-4 w-full py-8 " onSubmit={handleSubmit}>
          <div>
            <label className=" text-sm text-gray-600">Job Title</label>
            <div className=" flex sm:flex-row flex-col sm:items-center gap-2 mb-3">
              {jobTitlesLoading ? (
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
              ) : (
                <select
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className=" text-sm border outline-blue-400 p-2 rounded-lg"
                >
                  <option value="" disabled className="">
                    Select an option
                  </option>
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                  <option value="addNew">Add New</option>
                </select>
              )}

              {isAddingNew && (
                <div className=" flex items-center gap-3">
                  <input
                    type="text"
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    placeholder="Enter new option"
                    className="w-full border rounded-md p-2 text-sm outline-blue-400"
                  />
                  <button
                    type="button"
                    onClick={handleAddNew}
                    className=" bg-gradient-to-b from-[#ff512f] to-[#f09819] shadow-md rounded-md py-2 px-4 text-white text-sm"
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className=" text-sm text-gray-600">Job ID</label>
            <div className=" flex sm:flex-row flex-col sm:items-center gap-2 mb-3">
              {jobIdsLoading ? (
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
              ) : (
                <select
                  value={selectedJobId}
                  onChange={handleIdSelectChange}
                  className=" text-sm border outline-blue-400 p-2 rounded-lg"
                >
                  <option value="" disabled className="">
                    Select a Job Id
                  </option>
                  {jobIdOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                  <option value="addNew">Add New</option>
                </select>
              )}

              {addingNewJobId && (
                <div className=" flex items-center gap-3">
                  <input
                    type="text"
                    value={jobIdNew}
                    onChange={(e) => setJobIdNew(e.target.value)}
                    placeholder="Enter new job id"
                    className="w-full border rounded-md p-2 text-sm outline-blue-400"
                  />
                  <button
                    type="button"
                    onClick={handleAddNewId}
                    className=" bg-gradient-to-b from-[#ff512f] to-[#f09819] shadow-md rounded-md py-2 px-4 text-white text-sm"
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mb-2 flex flex-col gap-1">
            <label className=" text-sm text-gray-600">Score Limit</label>
            <input
              type="number"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              placeholder="Enter Score Limit"
              className="sm:w-[10rem] border rounded-md p-2 text-sm outline-blue-400"
            />
          </div>
          <div>
            <label className=" text-sm text-gray-600">Job Description</label>
            <textarea
              value={jd}
              onChange={(e) => setJd(e.target.value)}
              className="w-full h-[20rem] sm:h-[10rem] border resize-none rounded-md px-4 py-2 text-sm outline-blue-400"
              placeholder="Enter the Job Description"
            />
          </div>
          <div className="mt-2 flex items-center gap-2">
            <input
              type="file"
              id="fileInput"
              multiple={user.role === "company"}
              onChange={handleFileChange}
              className="hidden"
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer bg-gradient-to-b from-orange-400 to-orange-600 py-2 text-xs sm:text-sm w-fit px-2 sm:px-5 rounded-md outline-none text-white transition-all duration-300 ease-in-out"
            >
              Upload Resumes
            </label>
            <div className="">
              {fileNames.length > 0 ? (
                <ul className="flex items-center gap-1 flex-wrap">
                  {fileNames.map((fileName, index) => (
                    <li key={index} className="text-xs">
                      {fileName}
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-xs">No files selected</span>
              )}
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <button
              type="submit"
              className="bg-gradient-to-b flex items-center justify-center gap-1 from-blue-800 to-blue-600 py-2 text-sm sm:w-fit w-full px-6 rounded-md outline-none text-white mt-6 transition-all duration-300 ease-in-out"
            >
              {loading && (
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
              )}
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeScreening;
