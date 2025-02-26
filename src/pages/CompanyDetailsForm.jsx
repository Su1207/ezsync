import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const CompanyDetailsForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [employeeLength, setEmployeeLength] = useState("");
  const [typeOfCompany, setTypeOfCompany] = useState("Startup");
  const [file, setFile] = useState(null);
  const [aboutCompany, setAboutCompany] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("companyId", user?.id);
    formData.append("companyName", companyName);
    formData.append("linkedinUrl", linkedinUrl);
    formData.append("websiteUrl", websiteUrl);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);
    formData.append("employeeLength", employeeLength);
    formData.append("typeOfCompany", typeOfCompany);
    formData.append("file", file);
    formData.append("aboutCompany", aboutCompany);
    formData.append("location", location);

    try {
      setLoading(true);
      const response = await axios.post(
        `${API_BASE_URL}/company/companyDetails`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-[90vh] w-full flex justify-center items-center">
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
        <div className="font-semibold">loading</div>
      </div>
    );
  }

  return (
    <div className="  shadow-md rounded-md text-sm min-h-screen font-poppins">
      <div className=" lg:flex items-start gap-4">
        <div className=" lg:w-[40%] lg:ml-4 mt-8 flex items-center justify-center">
          <img
            src="/form.gif"
            alt=""
            className=" h-[25rem] sm:h-[26rem] xl:h-[28rem]"
          />
        </div>
        <div className=" lg:w-[60%] lg:h-[95vh] overflow-y-auto m-4 mt-0 lg:mt-4 rounded-xl shadow-lg bg-blue-700">
          <form className="space-y-4 p-4 sm:p-8" onSubmit={handleSubmit}>
            <h2 className="text-3xl text-white font-bold pt-4 text-center mb-6">
              Tell us about your Company
            </h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-4">
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter Company Name"
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                  required
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="LinkedIn Profile URL"
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Website URL
                </label>
                <input
                  type="url"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="Website URL"
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Employee Length
                </label>
                <input
                  type="number"
                  value={employeeLength}
                  onChange={(e) => setEmployeeLength(e.target.value)}
                  placeholder="Number of Employees"
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Type of Company
                </label>
                <select
                  value={typeOfCompany}
                  onChange={(e) => setTypeOfCompany(e.target.value)}
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                >
                  <option>Startup</option>
                  <option>SME</option>
                  <option>Corporate</option>
                </select>
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">Logo</label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                />
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  About Company
                </label>
                <textarea
                  value={aboutCompany}
                  onChange={(e) => setAboutCompany(e.target.value)}
                  placeholder="Describe your company"
                  className="w-full placeholder:text-sm resize-none h-[6rem] border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                ></textarea>
              </div>
              <div>
                <label className="text-sm mb-1 block text-gray-300">
                  Location: Headquarter
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Headquarter Location"
                  className="w-full placeholder:text-sm border px-4 py-2 rounded-md text-sm focus:outline-none shadow-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 outline-none rounded-md shadow-md w-full hover:bg-gray-800  transition duration-300"
            >
              Save Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsForm;
