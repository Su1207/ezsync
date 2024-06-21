import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className=" text-center text-sm mx-6 mb-6 md:mb-0">
        &copy; Copyrights EZSync. All rights are reserved.
      </div>
      <div className="px-6 md:px-8 lg:px-12 flex sm:flex-row flex-col gap-6 sm:gap-0 items-center font-poppins text-xs md:text-sm  py-4">
        <div className=" flex items-center gap-5 sm:w-1/3">
          <Link to={"/"} data-replace="Privacy Policy" className="">
            <span>Privacy Policy</span>
          </Link>
          <Link data-replace="Term of Use" to={"/"}>
            <span>Terms of Use</span>
          </Link>
        </div>
        <div className=" flex items-center gap-5 sm:w-1/3 sm:justify-center">
          <a href="#features" data-replace="Features">
            <span>Features</span>
          </a>
          <a href="#team" data-replace="Team">
            <span>Team</span>
          </a>
          <a data-replace="Pricing">
            <span>Pricing</span>
          </a>
          <a data-replace="Book a Demo" href="#contact">
            <span>Book a Demo</span>
          </a>
        </div>

        <div className="sm:w-1/3 flex sm:justify-end">
          <button
            onClick={handleClick}
            className="  text-xs border border-cyan-400 text-cyan-400 px-2 py-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 ease-in-out hover:text-black"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
