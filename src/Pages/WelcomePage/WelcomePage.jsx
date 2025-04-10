import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Marquee from "react-fast-marquee";

const WelcomePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const eidDate = new Date("2025-04-20T00:00:00").getTime(); // Target Eid date

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eidDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000); // Update every second

    return () => clearInterval(timer); // Clean up timer when component unmounts
  }, [eidDate]);

  return (
    <div className="relative flex h-screen w-full">
      {/* Left Side Content */}
      <div className="flex-1 bg-[#001123] flex flex-col justify-center items-center p-8 md:p-12 text-center relative overflow-hidden backdrop-blur-md">
   
        {/* Countdown Timer */}
        <motion.div
          className=" text-2xl md:text-4xl font-bold text-white  px-6  rounded-lg shadow-lg font-serif "
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
       ⏳ Time left for Eid: {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds

        </motion.div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#14b6a7]  to-[#236ae4] drop-shadow-2xl mt-6">
  Welcome to{" "}
  <span className="text-transparent bg-gradient-to-r from-blue-500 to-[#236ae4] bg-clip-text">
    Meetzy
  </span>
</h1>
<p className="mt-5 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-lg">
  Connect & Collaborate.
</p>
<p className="mt-3 text-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
    High-quality video calls
  </strong>{" "}
  anytime, anywhere.
</p>
<p className="mt-3 text-lg text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-lime-500">
  Enjoy{" "}
  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
    HD video & crystal-clear audio
  </strong>{" "}
  like never before.
</p>



        {/* Glowing Icon */}
        <motion.div
          className="mt-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img
            src="https://img.icons8.com/ios-filled/100/1e40af/video-call.png"
            alt="Video Call Icon"
            className="w-32 h-32 mx-auto drop-shadow-xl "
          />
        </motion.div>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/login"
            className="px-10 py-3 bg-gradient-to-r from-[#14b5a7] to-blue-600 text-white rounded-xl text-xl font-semibold shadow-lg transform transition-all hover:scale-105 hover:shadow-xl duration-300"
          >
            Login
          </Link>
          <Link
            to="/signUp"
            className="px-10 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-xl text-xl font-semibold shadow-lg transform transition-all hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-xl duration-300"
          >
            Sign Up
          </Link>
        </motion.div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 relative bg-[#14b5a7]">
        {/* Marquee Text Over Image */}
        <motion.div
          className="absolute bottom-0 w-full text-white font-bold text-5xl z-20 text-center py-3"
          animate={{ y: ["100%", "-800%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} // Faster speed
        >
          🌙 Eid Mubarak
        </motion.div>

        {/* Vertical Marquee with Images */}
        <div
          className="absolute w-full text-center text-blue-800 font-semibold text-lg md:text-xl"
          speed={40} // Adjust the speed for faster scrolling
        >
          <img
            src="https://i.ibb.co.com/sptzn23s/sl-011022-47800-100.jpg"
            alt="Eid Celebration"
            className=" object-cover h-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
