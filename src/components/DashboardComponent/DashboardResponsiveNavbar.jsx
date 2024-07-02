import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropDownMenu";

const DashboardResponsiveNavbar = ({
  isMenuOpen,
  setIsMenuOpen,
  setMagnetActive,
  setLoading,
  logo,
}) => {
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setLoading(isloading);
  }, [isloading]);

  return (
    <header className=" md:hidden inset-x-0 top-0 flex fixed items-center justify-between px-[5%] py-3 lg:py-12 z-[999]">
      <button
        className={`relative w-14 h-14 bg-gray-200 rounded-full flex flex-col items-center transition-all duration-300 justify-center ${
          !isMenuOpen ? "gap-y-1" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        onPointerEnter={() => setMagnetActive(true)}
        onPointerLeave={() => setMagnetActive(false)}
      >
        <span
          className={`h-[2px] transition-all duration-300 bg-zinc-800 z-[10] ${
            !isMenuOpen ? "w-7" : "w-6 mb-[-1px] rotate-45"
          }`}
        ></span>
        <span
          className={`h-[2px] transition-all duration-300 bg-zinc-800 z-[10] ${
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
      <div>
        <DropdownMenu logo={logo} setIsLoading={setIsLoading} />
      </div>
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
        className="fixed inset-0 bg-zinc-900/80 backdrop-blur z-[-1]"
      >
        <div className="text-white pt-28 flex px-[5%] flex-col gap-8 h-full font-poppins">
          <Link
            to={"/dashboard"}
            className=" text-3xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to={"/resume_screening"}
            data-replace="Screening Resume"
            className=" text-3xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Screening Resume</span>
          </Link>
          <Link
            to={"/dashboard"}
            className=" text-3xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Create Assessment
          </Link>
        </div>
      </motion.nav>
    </header>
  );
};

export default DashboardResponsiveNavbar;
