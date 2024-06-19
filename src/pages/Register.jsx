import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("student");

  const handleClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex lg:flex-row flex-col-reverse w-full h-full items-center min-h-screen font-poppins sm:bg-white">
      <div className="w-full lg:w-[60%] min-h-screen sm:min-h-max lg:min-h-screen bg-[#45ffc7] flex flex-col justify-center p-5">
        <div className=" flex flex-col items-center w-full p-4 sm:p-5">
          <div className=" text-2xl sm:text-4xl text-center font-bold mb-4">
            Start your free trial
          </div>
          <div className=" flex items-center gap-3 mb-8 ">
            <div
              onClick={() => setSelectedOption("student")}
              className={`${
                selectedOption === "student"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              } shadow-lg rounded-sm px-4 py-2 text-sm cursor-pointer transition-all duration-300 ease-in-out`}
            >
              Student
            </div>
            <div
              onClick={() => setSelectedOption("company")}
              className={`${
                selectedOption === "company"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              } shadow-lg rounded-sm px-4 py-2 text-sm cursor-pointer transition-all duration-300 ease-in-out`}
            >
              Company
            </div>
          </div>

          <div className="flex items-center gap-1 mb-4">
            <img
              src="/google.png"
              alt=""
              className="w-9 h-9 border border-blue-800 rounded-l-md p-2"
            />
            <div className="flex justify-center cursor-pointer hover:text-white transition-all duration-300 ease-in-out items-center gap-3 bg-[#1e1c25] rounded-r-md py-2 px-8 sm:px-2 w-auto sm:w-[22rem] text-gray-300">
              <div className=" text-sm">Sign up with Google</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>

          <div className=" flex items-center mb-4 justify-between w-auto sm:w-[24rem]">
            <div className="h-0 border-black border w-1/4"></div>
            <div className=" text-black text-sm w-2/4 text-center">
              or using your email
            </div>
            <div className="h-0 border-black border w-1/4"></div>
          </div>

          <form className="flex flex-col gap-2 w-auto sm:w-[24rem]">
            <div className="flex flex-col gap-1">
              <label className=" text-black font-semibold text-sm">
                Full Name
              </label>
              <input
                type="text"
                placeholder="First name and last name"
                className=" w-full p-2.5 border text-sm bg-white rounded-md outline-none text-black"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className=" text-black font-semibold text-sm">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your company name"
                className=" w-full p-2.5 border text-sm bg-white rounded-md outline-none text-black"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className=" text-black font-semibold text-sm">
                Work Email
              </label>
              <input
                type="email"
                placeholder="youremail@company.com"
                className=" w-full p-2.5 border text-sm bg-white rounded-md outline-none text-black"
              />
              <div className=" w-full p-2.5 rounded-md shadow-lg bg-blue-50 flex justify-start items-start gap-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="blue"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <div className=" text-gray-500 text-justify text-xs">
                  Use your corporate email to integrate customer emails,
                  existing applications, and invite your team members
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className=" text-black font-semibold text-sm">
                Password
              </label>
              <input
                type="password"
                placeholder="At least 12 characters"
                className=" w-full p-2.5 border text-sm bg-white rounded-md outline-none text-black"
              />
            </div>
            <button
              type="submit"
              className=" w-full p-2.5 rounded-md hover:text-white transition-all duration-300 ease-in-out flex justify-center items-center bg-[#1e1c25] text-sm mt-4 text-gray-200 outline-none"
            >
              Sign up
            </button>
          </form>

          <div className=" flex items-center gap-1 justify-end  w-auto sm:w-[24rem] mt-2">
            <div className=" text-gray-700 text-xs sm:text-sm font-light">
              Already using Respondo?
            </div>
            <div
              onClick={handleClick}
              className=" text-white text-xs sm:text-sm px-6 sm:px-10 py-2 rounded-sm  bg-blue-600 hover:bg-blue-800 transition-all duration-300 ease-in-out"
            >
              Log in
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:w-[40%] p-5 lg:mt-0 my-16 lg:my-0 sm:block hidden">
        <div className=" text-4xl text-center lg:text-start font-semibold mb-4">
          Come join us
        </div>
        <div className=" flex flex-col pl-8 lg:pl-0 gap-8">
          <div className=" flex items-center gap-8">
            <img src="/search.png" alt="" className=" w-10 h-10" />
            <div className=" text-gray-500 text-lg">
              Explore articles, tutorials, and guides on diverse subjects{" "}
            </div>
          </div>
          <div className=" flex items-center gap-8">
            <img src="/alarm.png" alt="" className=" w-10 h-10" />
            <div className=" text-gray-500 text-lg">
              Learn at your own pace and access educational resources anytime{" "}
            </div>
          </div>
          <div className=" flex items-center gap-8">
            <img src="/world.png" alt="" className=" w-10 h-10" />
            <div className=" text-gray-500 text-lg">
              Engage with a community of learners and share insights
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
