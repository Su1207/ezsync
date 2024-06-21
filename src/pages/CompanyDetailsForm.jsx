import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

  const user = useSelector((state) => state.company.currentUser);
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
      const response = await axios.post(
        "http://localhost:4000/company/companyDetails",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-12 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Company Details</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-1 block text-gray-700">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter Company Name"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">LinkedIn URL</label>
          <input
            type="url"
            value={linkedinUrl}
            onChange={(e) => setLinkedinUrl(e.target.value)}
            placeholder="LinkedIn Profile URL"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">Website URL</label>
          <input
            type="url"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            placeholder="Website URL"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">Employee Length</label>
          <input
            type="number"
            value={employeeLength}
            onChange={(e) => setEmployeeLength(e.target.value)}
            placeholder="Number of Employees"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">Type of Company</label>
          <select
            value={typeOfCompany}
            onChange={(e) => setTypeOfCompany(e.target.value)}
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          >
            <option>Startup</option>
            <option>SME</option>
            <option>Corporate</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-gray-700">Logo</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">About Company</label>
          <textarea
            value={aboutCompany}
            onChange={(e) => setAboutCompany(e.target.value)}
            placeholder="Describe your company"
            className="w-full resize-none h-[6rem] border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          ></textarea>
        </div>
        <div>
          <label className="mb-1 block text-gray-700">
            Location: Headquarter
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Headquarter Location"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-700 transition duration-300"
        >
          Save Details
        </button>
      </form>
    </div>
  );
};

export default CompanyDetailsForm;
