import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <div id="contact" className="max-w-7xl mx-12 my-[6rem] font-poppins">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8">
        Book a Demo
      </h2>
      <p className="text-center mb-24 md:text-base text-sm">
        "Make Smarter Hiring Choices With Deep Insights Into Skills And Cultural
        Fit. Our Tool Is A Game-Changer For Your Recruitment Strategy."
      </p>
      <div className="flex justify-center w-full items-center xl:items-start gap-4">
        <div className=" w-full xl:w-[65vw] flex lg:flex-row flex-col items-center gap-8 justify-center xl:justify-between">
          <div className="space-y-8 text-sm flex flex-col justify-center lg:justify-normal items-center lg:items-start lg:w-1/2">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-green-500 text-2xl" />
              <div className=" flex flex-row lg:flex-col items-center lg:items-start gap-1">
                <p>IIT Mandi, Mandi, Himachal Pradesh, India</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-green-500 text-2xl" />
              <p>EZSync.in</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-green-500 text-2xl" />
              <p>+91 970-633-1734</p>
            </div>
            <div className="flex space-x-8 text-3xl mt-4">
              <FaTwitter className="text-green-500 transition-all duration-300 ease-in-out cursor-pointer hover:bg-blue-500 hover:text-white p-1 rounded-sm" />
              <FaFacebook className="text-green-500 transition-all duration-300 ease-in-out cursor-pointer hover:bg-blue-500 hover:text-white p-1 rounded-sm" />
              <FaInstagram className="text-green-500 transition-all duration-300 ease-in-out cursor-pointer hover:bg-blue-500 hover:text-white p-1 rounded-sm" />
              <FaLinkedin className="text-green-500 transition-all duration-300 ease-in-out cursor-pointer hover:bg-blue-500 hover:text-white p-1 rounded-sm" />
            </div>
          </div>
          <form className="space-y-4 text-black w-full lg:w-1/2 flex flex-col md:justify-center items-center lg:items-start text-sm">
            <input
              type="text"
              placeholder="Your Name"
              className=" w-full md:w-[32rem] border px-4 py-2 rounded-sm outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className=" w-full md:w-[32rem] border px-4 py-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className=" w-full md:w-[32rem] border px-4 py-2 rounded-sm outline-none"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className=" w-full md:w-[32rem] h-[8rem] resize-none border px-4 py-2 rounded-sm outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 w-full  md:w-fit text-white py-2 px-4 rounded-sm hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
