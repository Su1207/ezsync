import axios from "axios";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { clearUser } from "../../store/companySlice";
import { clearToken } from "../../store/tokenSlice";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const StudentResponsiveNav = ({
  isMenuOpen,
  setIsMenuOpen,
  setMagnetActive,
  profile,
  name,
  college,
}) => {
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      setIsMenuOpen(false);
      await axios.get(`${API_BASE_URL}/logout`);

      dispatch(clearUser());
      dispatch(clearToken());

      toast("Logout success!!!");
    } catch (err) {
      console.log(err);
      toast.error("Error in logout, try again later");
    } finally {
    }
  };

  return (
    <header className=" lg:hidden inset-x-0 top-0 flex fixed items-center justify-between px-[5%] py-3 lg:py-12 z-[999]">
      <Link
        onClick={() => setIsMenuOpen(false)}
        to={"/"}
        className="text-white font-bold text-2xl cursor-pointer flex gap-1 items-center"
      >
        <img src="/2.png" alt="" className="h-14" />
      </Link>
      <button
        className={`relative w-14 h-14 bg-black hover:bg-zinc-800/80 rounded-full flex flex-col items-center transition-all duration-300 justify-center ${
          !isMenuOpen ? "gap-y-1" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        onPointerEnter={() => setMagnetActive(true)}
        onPointerLeave={() => setMagnetActive(false)}
      >
        <span
          className={`h-[2px] transition-all duration-300 bg-zinc-300 z-[10] ${
            !isMenuOpen ? "w-7" : "w-6 mb-[-1px] rotate-45"
          }`}
        ></span>
        <span
          className={`h-[2px] transition-all duration-300 bg-zinc-300 z-[10] ${
            !isMenuOpen ? "w-7" : "w-6 mt-[-1px] -rotate-45"
          }`}
        ></span>
        {isMenuOpen ? (
          <motion.div
            layoutId="cursor"
            className="absolute inset-0 bg-red-500 rounded-full"
          ></motion.div>
        ) : null}
      </button>
      <motion.nav
        transition={{
          type: "spring",
          damping: 100,
          stiffness: 500,
        }}
        initial={{
          y: "-100%",
        }}
        animate={{
          y: !isMenuOpen ? "-100%" : "0%",
        }}
        className="fixed inset-0 bg-zinc-900/80 backdrop-blur z-[-1] font-poppins text-xl sm:text-3xl"
      >
        <div className="text-white pt-20 flex px-[5%] flex-col items-center gap-5 overflow-y-scroll h-full font-poppins">
          <div className=" space-y-2 flex mb-6 flex-col items-center">
            <img
              src={profile}
              alt="Profile"
              className="w-28 h-28 rounded-full"
            />
            <h2 className=" text-3xl font-bold">{name}</h2>
            <h4 className=" text-xl font-semibold">{college}</h4>
          </div>

          <NavLink to="interview" onClick={() => setIsMenuOpen(false)}>
            Interview
          </NavLink>
          <NavLink to="interview" onClick={() => setIsMenuOpen(false)}>
            Resume Generation
          </NavLink>
          <NavLink to="interview" onClick={() => setIsMenuOpen(false)}>
            Cover Letter Generation
          </NavLink>
          <NavLink to="interview" onClick={() => setIsMenuOpen(false)}>
            Jobs
          </NavLink>
          <NavLink to="interview" onClick={() => setIsMenuOpen(false)}>
            Digital Profile Generate
          </NavLink>
          <NavLink to="interview" onClick={() => setIsMenuOpen(false)}>
            Expert Guidance
          </NavLink>
          <NavLink to="interview" onClick={logout}>
            Logout
          </NavLink>
        </div>
      </motion.nav>
    </header>
  );
};

export default StudentResponsiveNav;
