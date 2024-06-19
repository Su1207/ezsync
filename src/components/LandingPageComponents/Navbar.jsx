import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-white text-gray-700 rounded-full px-6 py-3 font-poppins text-sm mx-8 md:block hidden">
      <div className=" flex items-center gap-10 justify-end">
        <a href="#features" data-replace="Features">
          <span>Features</span>
        </a>
        <a href="#team" data-replace="Team">
          <span>Team</span>
        </a>
        <a data-replace="Pricing" href="#pricing">
          <span>Pricing</span>
        </a>

        <a href="#contact" data-replace="Contact">
          <span>Contact</span>
        </a>
        <Link
          to="/register"
          className=" bg-black text-white rounded-full shadow-lg px-4 py-3 text-xs hover:bg-[#fc7754] transition-all duration-300 ease-in-out"
        >
          Try Free
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
