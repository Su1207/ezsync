import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

const ResponsiveNavbar = ({ isMenuOpen, setIsMenuOpen, setMagnetActive }) => {
  return (
    <header className=" md:hidden inset-x-0 top-0 flex fixed items-center justify-between px-[5%] py-3 lg:py-12 z-[999]">
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
        className="fixed inset-0 bg-zinc-900/80 backdrop-blur z-[-1]"
      >
        <div className="text-white pt-28 flex px-[5%] flex-col gap-8 h-full font-poppins">
          <a
            href="#features"
            data-replace="Features"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className=" text-3xl">Features</span>
          </a>
          <a href="#team" data-replace="Team">
            <span className=" text-3xl" onClick={() => setIsMenuOpen(false)}>
              Team
            </span>
          </a>
          <a
            data-replace="Pricing"
            href="#pricing"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className=" text-3xl">Pricing</span>
          </a>

          <a
            href="#contact"
            data-replace="Book a Demo"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className=" text-3xl">Book a Demo</span>
          </a>
          <a href="/register" data-replace="Sign In">
            <span className=" text-3xl" onClick={() => setIsMenuOpen(false)}>
              Try Free
            </span>
          </a>
        </div>
      </motion.nav>
    </header>
  );
};

export default ResponsiveNavbar;
