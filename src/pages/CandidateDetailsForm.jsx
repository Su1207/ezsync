import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const CandidateDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    linkedin: "",
    phoneNumber: "",
    email: "",
    college: "",
    isCollegeVerified: "Yes",
    numberOfSessions: "",
    resume: null,
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const user = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Upload files and get URLs
    const uploadForm = new FormData();
    uploadForm.append("files", formData.resume);
    uploadForm.append("files", formData.profileImage);

    try {
      const uploadResponse = await axios.post(
        `${API_BASE_URL}/student/upload`,
        uploadForm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { resume, profileImage } = uploadResponse.data;

      // Step 2: Submit form data with file URLs
      const submissionData = {
        ...formData,
        studentId: user?.id,
        resume,
        profileImage,
      };

      const response = await axios.post(
        `${API_BASE_URL}/student/studentDetails`,
        submissionData
      );

      if (response.status === 200) {
        toast.success("Candidate Details added successfully");
        navigate("/studentDashboard");
      }
    } catch (error) {
      toast.error("Error submitting form");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="  shadow-md rounded-md text-sm min-h-screen font-poppins">
      <div className=" lg:flex items-center gap-4">
        <div className=" lg:w-[40%] lg:ml-4 mt-8 flex items-center justify-center">
          <img
            src="/-signup.gif"
            alt=""
            className=" h-[25rem] sm:h-[26rem] xl:h-[28rem]"
          />
        </div>
        <div className=" lg:w-[60%] lg:h-[95vh] overflow-y-auto m-4 mt-0 lg:mt-4 rounded-xl shadow-lg bg-blue-700">
          <form className="space-y-4 p-4 sm:p-8" onSubmit={handleSubmit}>
            <h2 className="text-3xl text-white font-bold pt-4 text-center mb-6">
              Candidate Details Form
            </h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-4">
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                  required
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  LinkedIn
                </label>
                <input
                  type="url"
                  name="linkedin"
                  placeholder="LinkedIn Profile URL"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                  required
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                  required
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  College | Institute*
                </label>
                <input
                  type="text"
                  name="college"
                  placeholder="Enter College Name"
                  value={formData.college}
                  onChange={handleChange}
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                  required
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Is College Verified?
                </label>
                <select
                  name="isCollegeVerified"
                  value={formData.isCollegeVerified}
                  onChange={handleChange}
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Number of Sessions: X – Initial
                </label>
                <input
                  type="number"
                  name="numberOfSessions"
                  placeholder="Enter Number of Sessions"
                  value={formData.numberOfSessions}
                  onChange={handleChange}
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Profile Image
                </label>
                <input
                  type="file"
                  name="profileImage"
                  onChange={handleChange}
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 outline-none rounded-md shadow-md w-full hover:bg-gray-800  transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetailsForm;
