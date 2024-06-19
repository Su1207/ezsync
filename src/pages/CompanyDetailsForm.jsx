import React from "react";

const CompanyDetailsForm = () => {
  return (
    <div className=" p-12 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Company Details</h2>
      <form className="space-y-4">
        <div>
          <label className="mb-1 block text-gray-700">Company Name</label>
          <input
            type="text"
            placeholder="Enter Company Name"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">LinkedIn URL</label>
          <input
            type="url"
            placeholder="LinkedIn Profile URL"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">Website URL</label>
          <input
            type="url"
            placeholder="Website URL"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">Phone Number</label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">Employee Length</label>
          <input
            type="number"
            placeholder="Number of Employees"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">Type of Company</label>
          <select className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400">
            <option>Startup</option>
            <option>SME</option>
            <option>Corporate</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-gray-700">Logo</label>
          <input
            type="file"
            className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-700">About Company</label>
          <textarea
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
