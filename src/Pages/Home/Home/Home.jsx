// import React, { useState, useRef, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../../Provider/AuthProvider";

// function Home() {
//   const navigate = useNavigate();
//   const [isCreateMeetingModal, setisCreateMeetingModal] = useState(false);
//   const [joinAMeeting, setJoinAMeeting] = useState(false);
//   const [meetingCode, setMeetingCode] = useState("");
//   const { user } = useContext(AuthContext);
//   const userEmail = user?.email || "user@example.com";

//   const generateMeetingCode = () => {
//     const chars =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let code = "";
//     for (let i = 0; i < 10; i++) {
//       code += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return code;
//   };

//   const handleCreateMeeting = () => {
//     const code = generateMeetingCode();
//     setMeetingCode(code);
//     setisCreateMeetingModal(true);
//   };

//   const handleShareCode = () => {
//     navigator.clipboard.writeText(meetingCode);

//     Swal.fire({
//       title: "Copied!",
//       text: "Meeting code copied to clipboard!",
//       icon: "success",
//       timer: 2000,
//       showConfirmButton: false,
//     });
//   };

//   const handleJoinMeeting = () => {
//     // navigate(`/call/${meetingCode}`);
//     navigate(`/call`);
//     setisCreateMeetingModal(false);
//   };

//   const closeModal = () => {
//     setisCreateMeetingModal(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-[87vh] text-center">
//       <h1 className="text-4xl font-bold">Welcome to Meetzy</h1>
//       <p className="mt-4 text-gray-600">
//         High-quality video calls anytime, anywhere.
//       </p>
//       <div className="flex justify-center items-center gap-5">
//         <button
//           onClick={handleCreateMeeting}
//           className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg"
//         >
//           Create a new meeting
//         </button>

//         <button
//           onClick={() => setJoinAMeeting(true)}
//           className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
//         >
//           Join a meeting
//         </button>
//       </div>
//       {/* Create a meeting modal */}
//       {isCreateMeetingModal && (
//         <>
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-8 rounded-lg w-96">
//               <h2 className="text-2xl font-bold mb-4">Meeting Details</h2>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Your Email:
//                 </label>
//                 <input
//                   type="text"
//                   value={userEmail}
//                   readOnly
//                   className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Meeting Code:
//                 </label>
//                 <input
//                   type="text"
//                   value={meetingCode}
//                   readOnly
//                   className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   onClick={handleShareCode}
//                   className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 >
//                   Share Code
//                 </button>
//                 <button
//                   onClick={handleJoinMeeting}
//                   className=" bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 >
//                   Join Meeting
//                 </button>
//               </div>
//               <button
//                 onClick={closeModal}
//                 className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//       {/* Join a meeting modal */}
//       {joinAMeeting && (
//         <>
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-8 rounded-lg w-96">
//               <h2 className="text-2xl font-bold mb-4">Meeting Details</h2>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Your Email:
//                 </label>
//                 <input
//                   type="text"
//                   value={userEmail}
//                   readOnly
//                   className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Meeting Code:
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter A Meeting Code"
//                   className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   onClick={handleJoinMeeting}
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 >
//                   Join Meeting
//                 </button>
//               </div>
//               <button
//                 onClick={() => setJoinAMeeting(false)}
//                 className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Home;


// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../../Provider/AuthProvider";
// import HomeVideo from "../../../assets/Video.webm";
// const Home = () => {
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);
//   const userEmail = user?.email || "user@example.com";

//   const [meetingCode, setMeetingCode] = useState("");
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [showJoinModal, setShowJoinModal] = useState(false);
//   const [joinCode, setJoinCode] = useState("");
//   const [joinClicked, setJoinClicked] = useState(false);

//   const generateMeetingCode = () => {
//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     return Array.from({ length: 10 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
//   };

//   const handleCreateMeeting = () => {
//     const newCode = generateMeetingCode();
//     setMeetingCode(newCode);
//     setShowCreateModal(true);
//   };

//   const handleShareCode = () => {
//     navigator.clipboard.writeText(meetingCode);
//     Swal.fire({
//       icon: "success",
//       title: "Copied!",
//       text: "Meeting code copied to clipboard.",
//       timer: 2000,
//       showConfirmButton: false,
//     });
//   };

//   const handleJoinMeeting = (codeToUse = meetingCode || joinCode) => {
//     setJoinClicked(true);
//     if (!codeToUse || codeToUse.trim().length < 5) {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid Code",
//         text: "Please enter a valid meeting code.",
//       });
//       setJoinClicked(false);
//       return;
//     }
//     navigate(`/call/${codeToUse}`);
//     setShowCreateModal(false);
//     setShowJoinModal(false);
//     setJoinCode("");
//     setJoinClicked(false);
//   };

//   const Modal = ({ title, children, onClose }) => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-gray-100 rounded-xl w-[90%] max-w-md p-6 shadow-lg relative">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
//         {children}
//         <button
//           onClick={onClose}
//           className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-white text-gray-900">
//       {/* Hero Section */}
//       <section className="flex flex-col items-center justify-center h-[87vh] px-4 text-center">
//         <h1 className="text-4xl font-extrabold">Welcome to Meetzy</h1>
//         <p className="mt-4 text-lg text-gray-600">High-quality video calls anytime, anywhere.</p>

//         <div className="flex flex-col md:flex-row gap-4 mt-8">
//           <button
//             onClick={handleCreateMeeting}
//             className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300"
//           >
//             Create a New Meeting
//           </button>
//           <button
//             onClick={() => setShowJoinModal(true)}
//             className="px-8 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300"
//           >
//             Join a Meeting
//           </button>
//         </div>
//       </section>

//       {/* Create Meeting Modal */}
//       {showCreateModal && (
//         <Modal title="Create Meeting" onClose={() => setShowCreateModal(false)}>
//           <div className="text-left">
//             <label className="block text-sm font-medium text-gray-600 mb-1">Your Email</label>
//             <input
//               type="text"
//               readOnly
//               value={userEmail}
//               className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//             />
//             <label className="block text-sm font-medium text-gray-600 mb-1">Meeting Code</label>
//             <input
//               type="text"
//               readOnly
//               value={meetingCode}
//               className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//             />
//             <div className="flex justify-between gap-4">
//               <button
//                 onClick={handleShareCode}
//                 className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded-lg"
//               >
//                 Share Code
//               </button>
//               <button
//                 onClick={() => handleJoinMeeting(meetingCode)}
//                 className={`flex-1 font-semibold py-2 rounded-lg text-white ${
//                   joinClicked ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
//                 }`}
//               >
//                 Join Now
//               </button>
//             </div>
//           </div>
//         </Modal>
//       )}

//       {/* Join Meeting Modal */}
//       {showJoinModal && (
//         <Modal title="Join a Meeting" onClose={() => setShowJoinModal(false)}>
//           <div className="text-left">
//             <label className="block text-sm font-medium text-gray-600 mb-1">Your Email</label>
//             <input
//               type="text"
//               readOnly
//               value={userEmail}
//               className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
//             />
//             <label className="block text-sm font-medium text-gray-600 mb-1">Meeting Code</label>
//             <input
//               type="text"
//               value={joinCode}
//               onChange={(e) => setJoinCode(e.target.value)}
//               placeholder="Enter a meeting code"
//               className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg text-gray-800"
//             />
//             <button
//               onClick={() => handleJoinMeeting(joinCode)}
//               className={`w-full font-semibold py-2 rounded-lg text-white ${
//                 joinClicked ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
//               }`}
//             >
//               Join Meeting
//             </button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Home;



import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import HomeVideo from "../../../assets/Video.webm";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const userEmail = user?.email || "user@example.com";

  const [meetingCode, setMeetingCode] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  const [joinClicked, setJoinClicked] = useState(false);

  const generateMeetingCode = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({ length: 10 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  const handleCreateMeeting = () => {
    const newCode = generateMeetingCode();
    setMeetingCode(newCode);
    setShowCreateModal(true);
  };

  const handleShareCode = () => {
    navigator.clipboard.writeText(meetingCode);
    Swal.fire({
      icon: "success",
      title: "Copied!",
      text: "Meeting code copied to clipboard.",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  const handleJoinMeeting = (codeToUse = meetingCode || joinCode) => {
    setJoinClicked(true);
    if (!codeToUse || codeToUse.trim().length < 5) {
      Swal.fire({
        icon: "error",
        title: "Invalid Code",
        text: "Please enter a valid meeting code.",
      });
      setJoinClicked(false);
      return;
    }
    navigate(`/call/${codeToUse}`);
    setShowCreateModal(false);
    setShowJoinModal(false);
    setJoinCode("");
    setJoinClicked(false);
  };

  const Modal = ({ title, children, onClose }) => (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl relative border border-gray-100"
        initial={{ scale: 0.85, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
        {children}
        <motion.button
          onClick={onClose}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="h-screen w-full bg-white text-gray-900 overflow-hidden">
      {/* Hero Section with Background Video */}
      <motion.section
        className="relative flex flex-col items-center justify-center h-screen w-full text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Video */}
        <motion.video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <source src={HomeVideo} type="video/webm" />
          Your browser does not support the video tag.
        </motion.video>
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-blue-900/50 pointer-events-none"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-4xl w-full px-4 sm:px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          >
            Welcome to Meetzy
          </motion.h1>
          <motion.p
            className="mt-4 text-xl sm:text-2xl md:text-3xl text-white font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            High-quality video calls anytime, anywhere.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              onClick={handleCreateMeeting}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-full shadow-xl transition-all duration-300 text-lg drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(59, 130, 246, 0.7)" }}
              whileTap={{ scale: 0.95 }}
            >
              Create a New Meeting
            </motion.button>
            <motion.button
              onClick={() => setShowJoinModal(true)}
              className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-semibold rounded-full shadow-xl transition-all duration-300 text-lg drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
              whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(75, 85, 99, 0.7)" }}
              whileTap={{ scale: 0.95 }}
            >
              Join a Meeting
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Create Meeting Modal */}
      {showCreateModal && (
        <Modal title="Create Meeting" onClose={() => setShowCreateModal(false)}>
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-600 mb-2">Your Email</label>
            <motion.input
              type="text"
              readOnly
              value={userEmail}
              className="w-full px-4 py-2.5 mb-4 border border-gray-200 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <label className="block text-sm font-medium text-gray-600 mb-2">Meeting Code</label>
            <motion.input
              type="text"
              readOnly
              value={meetingCode}
              className="w-full px-4 py-2.5 mb-4 border border-gray-200 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
            <div className="flex gap-4">
              <motion.button
                onClick={handleShareCode}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Share Code
              </motion.button>
              <motion.button
                onClick={() => handleJoinMeeting(meetingCode)}
                className={`flex-1 font-semibold py-2.5 rounded-lg text-white transition-colors duration-200 ${
                  joinClicked ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.button>
            </div>
          </div>
        </Modal>
      )}

      {/* Join Meeting Modal */}
      {showJoinModal && (
        <Modal title="Join a Meeting" onClose={() => setShowJoinModal(false)}>
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-600 mb-2">Your Email</label>
            <motion.input
              type="text"
              readOnly
              value={userEmail}
              className="w-full px-4 py-2.5 mb-4 border border-gray-200 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <label className="block text-sm font-medium text-gray-600 mb-2">Meeting Code</label>
            <motion.input
              type="text"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
              placeholder="Enter a meeting code"
              className="w-full px-4 py-2.5 mb-4 border border-gray-200 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
            <motion.button
              onClick={() => handleJoinMeeting(joinCode)}
              className={`w-full font-semibold py-2.5 rounded-lg text-white transition-colors duration-200 ${
                joinClicked ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Meeting
            </motion.button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;