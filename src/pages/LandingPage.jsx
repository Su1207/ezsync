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
import Team from "../components/LandingPageComponents/Team";
import UniversitySlider from "../components/LandingPageComponents/UniversitySlider";
import CompanyFeatures from "../components/LandingPageComponents/CompanyFeatures";
import StudentFeatures from "../components/LandingPageComponents/StudentFeatures";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="size-6 text-blue-500" />
      <p>...</p>
    </div>
  );
}

const LandingPage = () => {
  const videoRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [magnetActive, setMagnetActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

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
    // window.scrollTo({ top: 0, behavior: "smooth" });
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
    <div className="landing_page w-full text-white pt-4 min-h-screen font-poppins">
      <Navbar />

      <ResponsiveNavbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setMagnetActive={setMagnetActive}
      />

      <div className="fixed bottom-4 right-4 z-50">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="bg-[#1e1c25] text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 ease-in-out"
          >
            <ChevronUpIcon className="size-6 text-gray-300" />
          </button>
        )}
      </div>

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
          className=" rounded-full shadow-md px-10 sm:px-20 py-2 sm:py-4 mt-2 bg-cyan-400 hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
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

      {/* <Features /> */}

      <div className=" py-20 bg-white">
        <h2 className=" text-5xl text-center text-black mb-10 font-bold">
          Features
        </h2>
        <StudentFeatures />
        <CompanyFeatures />
      </div>

      {/* <OldWayNewWay /> */}

      {/* <div
        id="team"
        className="w-full flex flex-col px-6 gap-6 justify-center items-center py-24"
      >
        <div className="text-3xl sm:text-5xl font-bold text-[#45ffc7]">
          Team
        </div>
        <button
          onClick={handleClick}
          className="rounded-full shadow-md px-10 sm:px-20 py-2 sm:py-4 bg-cyan-400 hover:bg-white transition-all duration-300 ease-in-out hover:text-black"
        >
          Get Started
        </button>
        <div className="w-full flex justify-center">
          <div className="flex items-center gap-5 mt-2 overflow-x-auto snap-x snap-mandatory w-full">
            <div className="relative w-80 flex-shrink-0 snap-start">
              <img
                src="/team1.jpeg"
                alt=""
                className="w-80 rounded-lg hover:opacity-20"
              />
              <div className="absolute bottom-2 left-2 text-white opacity-0 hover:opacity-100">
                <div>Caleb Jones</div>
              </div>
            </div>
            <div className="relative w-80 flex-shrink-0 snap-start">
              <img
                src="/team2.jpeg"
                alt=""
                className="w-80 rounded-lg hover:opacity-20"
              />
              <div className="absolute bottom-2 left-2 text-white opacity-0 hover:opacity-100">
                Team Member 2
              </div>
            </div>
            <div className="relative w-80 flex-shrink-0 snap-start">
              <img
                src="/team3.jpeg"
                alt=""
                className="w-80 rounded-lg hover:opacity-20"
              />
              <div className="absolute bottom-2 left-2 text-white opacity-0 hover:opacity-100">
                Team Member 3
              </div>
            </div>
            <div className="relative w-80 flex-shrink-0 snap-start">
              <img
                src="/team2.jpeg"
                alt=""
                className="w-80 rounded-lg hover:opacity-20"
              />
              <div className="absolute bottom-2 left-2 text-white opacity-0 hover:opacity-100">
                Team Member 2
              </div>
            </div>
            <div className="relative w-80 flex-shrink-0 snap-start">
              <img
                src="/team1.jpeg"
                alt=""
                className="w-80 rounded-lg hover:opacity-20"
              />
              <div className="absolute bottom-2 left-2 text-white opacity-0 hover:opacity-100">
                Team Member 1
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Team />

      <Pricing />

      <FeedBacks />

      <div className=" mt-[25rem] bg-white py-6 sm:py-10">
        <h2 className=" text-lg sm:text-xl text-center text-black font-semibold mb-10">
          Trusted by students from 50+ Universities
        </h2>
        <UniversitySlider />
      </div>

      <ContactForm />

      <div className="  w-full flex flex-col gap-6 items-center justify-center px-5  my-[10rem] relative">
        <div className=" absolute right-32 top-[-6rem] lg:top-36">
          <img src="/stars.svg" alt="" className=" h-16" />
        </div>
        <div className=" absolute left-16 sm:left-32 md:left-48 lg:left-64 top-32 sm:top-24">
          <img src="/lamp-icon.svg" alt="" className=" h-16 rotate-[30deg]" />
        </div>
        <h1 className="text-3xl text-[#45ffc7] sm:text-5xl md:text-6xl text-center font-extrabold">
          Be the first to try
        </h1>
        <div className=" absolute right-16 sm:right-32 md:right-48 lg:right-[18rem] top-32 sm:top-12">
          <img src="/lamp-icon.svg" alt="" className=" h-10 rotate-[-30deg]" />
        </div>
        <button
          onClick={handleClick}
          className=" rounded-full shadow-md px-10 sm:px-20 py-2 sm:py-4 mt-2 bg-cyan-400 hover:bg-white transition-all duration-300 ease-in-out hover:text-black"
        >
          Get Started
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
