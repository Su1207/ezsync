import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-white text-gray-700 rounded-full px-6 py-3 font-poppins text-sm mx-8 md:block hidden">
      <div className=" flex items-center gap-10 justify-end">
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
        <a href="/login" data-replace="Sign In">
          <span>Sign In</span>
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
