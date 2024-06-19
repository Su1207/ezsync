import React from "react";

const CandidateDetailsForm = () => {
  return (
    <div>
      <div className=" p-12 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-6">Candidate Details Form</h2>
        <form className="space-y-4">
          <div>
            <label className=" mb-1 block text-gray-700">Name*</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-cyan-400 focus:ring-1"
              required
            />
          </div>
          <div>
            <label className=" mb-1 block text-gray-700">LinkedIn</label>
            <input
              type="url"
              placeholder="LinkedIn Profile URL"
              className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-cyan-400 focus:ring-1"
            />
          </div>
          <div>
            <label className=" mb-1 block text-gray-700">Phone Number*</label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-cyan-400 focus:ring-1"
              required
            />
          </div>
          <div>
            <label className=" mb-1 block text-gray-700">Email*</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-cyan-400 focus:ring-1"
              required
            />
          </div>
          <div>
            <label className=" mb-1 block text-gray-700">
              College | Institute*
            </label>
            <input
              type="text"
              placeholder="Enter College Name"
              className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-cyan-400 focus:ring-1"
              required
            />
          </div>
          <div>
            <label className=" mb-1 block text-gray-700">
              Is College Verified?
            </label>
            <select className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-cyan-400 focus:ring-1">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className=" mb-1 block text-gray-700">
              Number of Sessions: X – Initial
            </label>
            <input
              type="number"
              placeholder="Enter Number of Sessions"
              className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-cyan-400 focus:ring-1"
            />
          </div>
          <div>
            <label className=" mb-1 block text-gray-700">Resume</label>
            <input
              type="file"
              className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-cyan-400 focus:ring-1"
            />
          </div>
          <div>
            <label className=" mb-1 block text-gray-700">Profile Image</label>
            <input
              type="file"
              className="w-full border px-4 py-2 rounded-sm focus:outline-none focus:ring-cyan-400 focus:ring-1"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white  py-2 px-4 rounded-sm hover:bg-blue-700 transition duration-300"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default CandidateDetailsForm;
