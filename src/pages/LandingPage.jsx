import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/LandingPageComponents/Navbar";
// import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
// import CustomerCards from "../components/LandingPageComponents/CustomerCards";
import Footer from "../components/LandingPageComponents/Footer";
import FeedBacks from "../components/LandingPageComponents/FeedBacks";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ResponsiveNavbar from "../components/LandingPageComponents/ResponsiveNavbar";
import { useNavigate } from "react-router-dom";
import Features from "../components/LandingPageComponents/Features";
import Pricing from "../components/LandingPageComponents/Pricing";
import ContactForm from "../components/LandingPageComponents/ContactForm";
import OldWayNewWay from "../components/LandingPageComponents/OldWayNewWay";

const LandingPage = () => {
  const videoRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [magnetActive, setMagnetActive] = useState(false);

  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.error("Error attempting to play the video: ", error);
          videoRef.current.controls = true; // Show controls to allow user interaction
        }
      }
    };

    playVideo();
  }, []);

  const animateText = (text, delay = 0) => {
    return text.split(" ").map((word, wIndex) => (
      <motion.span
        key={wIndex}
        aria-hidden="true"
        className="inline-block mr-2"
        initial="hidden"
        animate={ctrls}
        variants={wordAnimation}
        transition={{
          delayChildren: delay + wIndex * 0.25,
          staggerChildren: 0.05,
        }}
      >
        {word.split("").map((character, cIndex) => (
          <motion.span
            key={cIndex}
            aria-hidden="true"
            variants={characterAnimation}
            className="inline-block"
          >
            {character}
          </motion.span>
        ))}
      </motion.span>
    ));
  };

  return (
    <div className="w-full text-white pt-5 min-h-screen font-poppins">
      <Navbar />

      <ResponsiveNavbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setMagnetActive={setMagnetActive}
      />

      <div className="relative w-full flex flex-col gap-6 px-5 items-center justify-center mt-28 mb-40">
        <div className=" absolute lg:block hidden right-6 lg:right-36 top-[-2rem]">
          <img src="/user.jpeg" alt="" className=" w-20 h-20 rounded-full " />
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={ctrls}
          className="text-3xl text-[#45ffc7] sm:text-5xl md:text-6xl font-extrabold"
        >
          {animateText("Best AI for Interview", 0)}
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={ctrls}
          className=" text-xs sm:text-base text-center"
        >
          {animateText(
            "An innovative artificial intelligence platform that conducts interviews with candidates",
            0
          )}
        </motion.div>
        <button
          onClick={handleClick}
          className=" rounded-full shadow-md px-20 py-4 mt-2 bg-cyan-400 hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
        >
          Get Started
        </button>
      </div>

      <div className="video-container rounded-md flex items-center justify-center mb-20">
        <video
          className="video-player w-[80%] h-auto lg:h-[85vh]"
          controls
          ref={videoRef}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Features />

      <OldWayNewWay />

      <div
        id="team"
        className="w-full flex flex-col px-6 gap-6 justify-center items-center py-24"
      >
        <div className=" text-3xl sm:text-5xl font-bold text-[#45ffc7]">
          Team
        </div>
        <button
          onClick={handleClick}
          className=" rounded-full shadow-md px-20 py-4 bg-cyan-400 hover:bg-white transition-all duration-300 ease-in-out hover:text-black"
        >
          Get Started
        </button>
        <div className="flex items-center gap-5 mt-2 overflow-auto">
          <img src="/team1.jpeg" alt="" className=" w-80 rounded-lg" />
          <img src="/team2.jpeg" alt="" className=" w-80 rounded-lg" />
          <img src="/team3.jpeg" alt="" className=" w-80 rounded-lg" />
          <img src="/team2.jpeg" alt="" className=" w-80 rounded-lg" />
          <img src="/team1.jpeg" alt="" className=" w-80 rounded-lg" />
        </div>
      </div>

      <Pricing />

      <FeedBacks />

      <ContactForm />

      <div className="  w-full flex flex-col gap-6 items-center justify-center px-5  my-[10rem] relative">
        <div className=" absolute right-32 top-[-6rem] lg:top-32">
          <img src="/stars.svg" alt="" className=" h-16" />
        </div>
        <div className=" absolute left-16 sm:left-32 md:left-48 lg:left-64 top-32 sm:top-24">
          <img src="/lamp-icon.svg" alt="" className=" h-16 rotate-[30deg]" />
        </div>
        <h1 className="text-3xl text-[#45ffc7] sm:text-5xl md:text-6xl text-center font-extrabold">
          Be the first to try
        </h1>
        <button
          onClick={handleClick}
          className=" rounded-full shadow-md px-20 py-4 mt-2 bg-cyan-400 hover:bg-white transition-all duration-300 ease-in-out hover:text-black"
        >
          Get Started
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
