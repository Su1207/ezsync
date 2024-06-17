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
    <div className="w-full text-white pt-5 min-h-screen font-poppins bg-[#000]">
      <Navbar />

      <ResponsiveNavbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setMagnetActive={setMagnetActive}
      />

      <div className=" w-full flex flex-col gap-6 px-5 items-center justify-center mt-28 mb-40">
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
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, culpa voluptatibus.",
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
        <video className="video-player w-[80%]" controls ref={videoRef}>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        id="features"
        className="w-full flex lg:flex-row flex-col-reverse items-center justify-between gap-12 py-12 md:py-32 px-6 md:px-16 bg-white"
      >
        <div className=" text-gray-800 text-center md:text-left lg:w-[45%]">
          <p className=" font-semibold mb-2 text-lg text-gray-500">
            Our Features
          </p>
          <h2 className=" text-3xl sm:text-4xl font-bold mb-5">
            Instantly Visualize your Ideas
          </h2>
          <p className=" text-sm text-gray-500 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            dicta fugiat quas quo voluptatibus assumenda asperiores minima
            mollitia dignissimos.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/image1.jpg"
            alt=""
            className=" lg:h-[50vh] xl:h-[60vh] rounded-3xl"
          />
        </div>
      </div>

      <div className="w-full flex lg:flex-row-reverse flex-col-reverse items-center justify-between gap-12 py-12 md:py-32 px-6 md:px-16">
        <div className=" text-center md:text-left lg:w-[45%]">
          <p className=" font-semibold mb-2 text-lg">Our Features</p>
          <h2 className=" text-3xl sm:text-4xl font-bold mb-5">
            Transform Articrafts into Designs
          </h2>
          <p className=" text-sm text-gray-500 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            dicta fugiat quas quo voluptatibus assumenda asperiores minima
            mollitia dignissimos.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/image1.jpg"
            alt=""
            className="rounded-3xl lg:h-[50vh] xl:h-[60vh]"
          />
        </div>
      </div>

      <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-between gap-12 py-12 md:py-32 px-6 md:px-16 bg-white">
        <div className=" text-gray-800 text-center md:text-left lg:w-[45%]">
          <p className=" font-semibold mb-2 text-lg text-gray-500">
            Our Features
          </p>
          <h2 className=" text-3xl sm:text-4xl font-bold mb-5">
            Iterate with AI for Precision
          </h2>
          <p className=" text-sm text-gray-500 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            dicta fugiat quas quo voluptatibus assumenda asperiores minima
            mollitia dignissimos.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/image1.jpg"
            alt=""
            className="rounded-3xl lg:h-[50vh] xl:h-[60vh]"
          />
        </div>
      </div>

      <div
        id="templates"
        className="w-full flex flex-col px-6 gap-6 justify-center items-center py-24"
      >
        <div className="">Templates</div>
        <div className=" text-3xl sm:text-5xl font-bold text-[#45ffc7]">
          Build Your Tale
        </div>
        <button
          onClick={handleClick}
          className=" rounded-full shadow-md px-20 py-4 mt-2 bg-cyan-400 hover:bg-white transition-all duration-300 ease-in-out hover:text-black"
        >
          Get Started
        </button>
        <div className="flex items-center gap-5 mt-16 overflow-auto">
          <img src="/image1.jpg" alt="" className=" w-80 rounded-lg" />
          <img src="/image1.jpg" alt="" className=" w-80 rounded-lg" />
          <img src="/image1.jpg" alt="" className=" w-80 rounded-lg" />
          <img src="/image1.jpg" alt="" className=" w-80 rounded-lg" />
          <img src="/image1.jpg" alt="" className=" w-80 rounded-lg" />
        </div>
      </div>

      {/* <div className=" w-full py-24 px-12 lg:px-24">
        <div className="w-full flex items-center justify-between mb-4">
          <h2 className="text-5xl font-bold">Customer Stories</h2>
          <div className=" flex items-center gap-4">
            <ChevronLeftIcon className=" w-[3rem] p-1 border rounded-full hover:border-cyan-500 cursor-pointer hover:text-cyan-500 transition-all duration-300 ease-in-out" />
            <ChevronRightIcon className=" w-[3rem] p-1 border rounded-full hover:border-cyan-500 cursor-pointer hover:text-cyan-500 transition-all duration-300 ease-in-out" />
          </div>
        </div>

        <div className=" flex items-center gap-5 justify-between mt-16">
          <CustomerCards
            profile={"/man.png"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab laboriosam, magnam, sint eligendi sapiente impedit, voluptatum verovoluptatem deserunt mollitia odit"
            }
            name={"Elizabeth Taylor"}
            post={"Product Manager"}
          />
          <CustomerCards
            profile={"/man.png"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab laboriosam, magnam, sint eligendi sapiente impedit, voluptatum verovoluptatem deserunt mollitia odit"
            }
            name={"Elizabeth Taylor"}
            post={"Product Manager"}
          />
          <CustomerCards
            profile={"/man.png"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab laboriosam, magnam, sint eligendi sapiente impedit, voluptatum verovoluptatem deserunt mollitia odit"
            }
            name={"Elizabeth Taylor"}
            post={"Product Manager"}
          />
        </div>
      </div> */}

      <FeedBacks />

      <div className=" w-full flex flex-col gap-6 items-center justify-center px-5 mt-28 mb-40">
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
