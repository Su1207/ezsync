import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className=" text-gray-200 rounded-full px-6 py-3 text-sm font-poppins mx-8 md:block hidden">
      <div className=" flex items-center justify-between">
        <div className=" text-xl pl-5 cursor-pointer" onClick={handleLogoClick}>
          <img src="/2.png" alt="" className=" h-14" />
        </div>
        <div className=" flex items-center gap-10">
          <a href="#features" data-replace="Features">
            <span>Features</span>
          </a>
          <a href="#team" data-replace="Team">
            <span>Team</span>
          </a>
          <a data-replace="Pricing" href="#pricing">
            <span>Pricing</span>
          </a>

          <a href="#contact" data-replace="Book a Demo">
            <span>Book a Demo</span>
          </a>
          <Link
            to="/login"
            className=" bg-cyan-500 text-white  rounded-full shadow-lg px-4 py-3 text-xs hover:bg-[#fc7754] transition-all duration-300 ease-in-out"
          >
            Try Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
