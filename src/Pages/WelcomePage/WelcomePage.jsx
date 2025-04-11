import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const WelcomePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const eidDate = new Date("2025-04-20T00:00:00").getTime();

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
    }, 1000);

    return () => clearInterval(timer);
  }, [eidDate]);

  return (
    <div className="relative flex h-screen w-full">

      {/* Left Side with Background Image, Blur & Overlay */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background Image */}
        <img
          src="https://i.ibb.co.com/yKqRCPh/islamic-8824879-1280.jpg"
          alt="Eid Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay + Blur */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/5 backdrop-blur-sm z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center items-center h-full p-8 md:p-12 text-center">

          {/* Countdown Timer */}
          <motion.div
            className="text-sm md:text-lg font-medium text-white px-3 py-1 rounded shadow-md font-serif"
            animate={{ scale: [1, 1.02, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ⏳ Time left for Eid: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </motion.div>
          <motion.h2
  className="text-4xl md:text-3xl font-extrabold text-white mt-8"
  initial={{ opacity: 0, y: -20 }}
  animate={{
    opacity: [0, 1, 0.9, 1],
    y: [0, -5, 0],
    textShadow: [
      "0px 0px 0px rgba(255,255,255,0)",
      "0px 0px 10px rgba(255,255,255,0.8)",
      "0px 0px 0px rgba(255,255,255,0)",
    ],
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  🌙 Eid Mubarak
</motion.h2>

      
          {/* Headings */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#14b6a7] to-[#236ae4] drop-shadow-2xl mt-6">
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
              className="w-32 h-32 mx-auto drop-shadow-xl"
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
      </div>
    </div>
  );
};

export default WelcomePage;
