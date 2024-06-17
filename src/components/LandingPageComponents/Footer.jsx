import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="px-6 md:px-12 lg:px-24 flex sm:flex-row flex-col gap-8 sm:gap-0 items-center font-poppins text-xs md:text-sm justify-center sm:justify-between py-4">
      <div className=" flex items-center gap-5">
        <Link to={"/"} data-replace="Privacy Policy" className="">
          <span>Privacy Policy</span>
        </Link>
        <Link data-replace="Term of Use" to={"/"}>
          <span>Terms of Use</span>
        </Link>
      </div>
      <div className=" flex items-center gap-5">
        <a href="#features" data-replace="Features">
          <span>Features</span>
        </a>
        <a href="#templates" data-replace="Templates">
          <span>Templates</span>
        </a>
        <a data-replace="Pricing">
          <span>Pricing</span>
        </a>
        <a data-replace="Blog">
          <span>Blog</span>
        </a>
      </div>

      <button
        onClick={handleClick}
        className=" text-xs border border-cyan-400 text-cyan-400 px-2 py-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 ease-in-out hover:text-black"
      >
        Get Started
      </button>
    </div>
  );
};

export default Footer;
