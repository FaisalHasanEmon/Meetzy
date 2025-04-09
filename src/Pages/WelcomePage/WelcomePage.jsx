import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
const WelcomePage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const eidDate = new Date("2025-04-01T00:00:00").getTime(); // ঈদের তারিখ ১লা এপ্রিল ২০২৫

  // ✅ Eid Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eidDate - now;

      if (distance < 0) {
        setTimeLeft("ঈদ মোবারক!");
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
  }, []);

  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-200 overflow-hidden flex flex-col justify-center items-center p-8 md:p-12 text-center relative">
        {/* Eid Greetings with Glowing Effect */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-3 items-center absolute top-5 text-xl md:text-2xl font-bold text-green-700 bg-white px-8 py-3 rounded-lg shadow-lg border border-green-400 animate-glow"
        >
         <BsFillMoonStarsFill /> Eid Mubarak! Wishing you joy, peace, and blessings! 
        </motion.div>
        {/* ✅ Eid Countdown Timer */}
        <motion.div
          className="mt-6 text-2xl md:text-4xl font-bold text-blue-900 bg-white px-6 py-4 rounded-lg shadow-lg border-2 border-blue-500"
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ⏳ ঈদের বাকি: {timeLeft.days} দিন {timeLeft.hours} ঘণ্টা {timeLeft.minutes} মিনিট {timeLeft.seconds} সেকেন্ড
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-900 drop-shadow-lg mt-6">
          Welcome to <span className="text-blue-600 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Meetzy</span>
        </h1>
        <p className="mt-5 text-xl font-semibold leading-relaxed text-blue-800">Connect. Communicate. Collaborate.</p>
        <p className="mt-3 text-lg max-w-md mx-auto text-blue-700">
          <strong>Seamless, high-quality video calls</strong> with friends, family, and colleagues—anytime, anywhere.
        </p>
        <p className="mt-3 text-lg max-w-md mx-auto text-blue-700">
          Enjoy <strong>HD video, crystal-clear audio, and instant connections</strong> like never before.
        </p>

        {/* Floating Video Icon with Soft Glow */}
        <motion.div
          className="mt-6"
          animate={{ scale: [1, 1.1, 1], filter: ["blur(0px)", "blur(3px)", "blur(0px)"] }}
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
            className="px-10 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-xl font-semibold shadow-lg transform transition-all hover:scale-105 hover:shadow-xl duration-300"
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
      <div className="flex-1">
        <img src="https://i.ibb.co.com/sptzn23s/sl-011022-47800-100.jpg" alt="Eid Celebration" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default WelcomePage;