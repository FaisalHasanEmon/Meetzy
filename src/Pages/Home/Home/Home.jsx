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
//               <h2 className="text-3xl font-bold mb-4">Meeting Details</h2>
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


import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import safetyImage from "../../../assets/safety.svg";
import featuresImage from "../../../assets/features.svg";
import { FaCalendarCheck, FaPlus, FaPlusCircle, FaSignInAlt, FaUser } from "react-icons/fa";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-100 rounded-xl w-[90%] max-w-md p-6 shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        {children}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );


  const agendaItems = [
    { title: "Morning stand-up", time: "9:00 - 9:15" },
    { title: "Managers catch-up", time: "10:00 - 10:30" },
    { title: "Ben 1:1", time: "13:00 - 14:45" },
    { title: "KPI clarification", time: "15:00 - 15:30" },
  ];

  return (
    <div className="bg-gray-800 text-white">
      {/* Hero Section */}
      <section className="min-h-[87vh] flex flex-col md:flex-row items-start justify-center bg-white px-6 py-10">
      
      {/* Left: Agenda */}
      <div className="w-full md:w-[50%] max-w-md bg-white border-r border-gray-200 pr-6 md:pr-10">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
          Good morning, {user.displayName}!
        </h2>
        <div className="flex justify-center mb-6">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-gray-300 ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} alt="Profile" />
            </div>
          </div>
        </div>

        <div className="text-left">
          <p className="font-medium text-gray-800 mb-3">Your agenda today:</p>
          <div className="space-y-4">
            {agendaItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all">
                    Reschedule
                  </button>
                  <button className="px-3 py-1 text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-md transition-all">
                    Change attendance
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Meeting Actions */}
      <div className="w-full md:w-[50%] mt-16 md:mt-0 pl-0 md:pl-10 flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-black">Welcome to Meetzy</h1>
      <p className="mt-4 text-gray-600">
        High-quality video calls anytime, anywhere.
      </p>
        </div>
        <button
          onClick={handleCreateMeeting}
          className="flex items-center gap-4 border border-gray-200 hover:shadow-md transition-all bg-white rounded-lg px-10 py-8"
        >
          <FaUser className="text-blue-600 text-2xl" />
          <span className="text-lg font-medium text-blue-700">Start a meeting</span>
        </button>

        <button
          onClick={() => setShowJoinModal(true)}
          className="flex items-center gap-4 border border-gray-200 hover:shadow-md transition-all bg-white rounded-lg px-10 py-8"
        >
          <FaPlus className="text-blue-600 text-3xl" />
          <span className="text-lg font-medium text-blue-700">Join a meeting</span>
        </button>

        <button
          className="flex items-center gap-4 border border-gray-200 hover:shadow-md transition-all bg-white rounded-lg px-10 py-8"
        >
          <FaCalendarCheck className="text-blue-600 text-3xl" />
          <span className="text-lg font-medium text-blue-700">Schedule a meeting</span>
        </button>
      </div>
    </section>

      {/* Privacy & Safety Section */}
      {/* <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Privacy & Safety</h2>
            <p className="text-lg text-gray-300 mb-4">
              Security and confidentiality are part of our core values.
            </p>
            <p className="text-gray-400">
              Your data is not transmitted to any third parties and your conversations are highly secure. Meetings are end-to-end encrypted with the highest level of available audio and video quality.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={safetyImage}
              alt="Privacy and Safety Illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      {/* <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Features</h2>
            <p className="text-lg text-gray-300 mb-4">
              Participate and collaborate instantly wherever you are from your computer, tablet, or phone.
            </p>
            <p className="text-gray-400 mb-4">
              We include all the essential features of a videoconferencing software with screen sharing and data sharing to best accompany you in your daily life.
            </p>
            <p className="text-gray-400">
              Simply share a link and collaborate with all your contacts in one click.
            </p>
           
          </div>
          <div className="md:w-1/2">
            <img
              src={featuresImage}
              alt="Features Illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section> */}

      {/* Create Meeting Modal */}
      {showCreateModal && (
        <Modal title="Create Meeting" onClose={() => setShowCreateModal(false)}>
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-600 mb-1">Your Email</label>
            <input
              type="text"
              readOnly
              value={userEmail}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
            />
            <label className="block text-sm font-medium text-gray-600 mb-1">Meeting Code</label>
            <input
              type="text"
              readOnly
              value={meetingCode}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
            />
            <div className="flex justify-between gap-4">
              <button
                onClick={handleShareCode}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded-lg"
              >
                Share Code
              </button>
              <button
                onClick={() => handleJoinMeeting(meetingCode)}
                className={`flex-1 font-semibold py-2 rounded-lg text-white ${
                  joinClicked ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                Join Now
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Join Meeting Modal */}
      {showJoinModal && (
        <Modal title="Join a Meeting" onClose={() => setShowJoinModal(false)}>
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-600 mb-1">Your Email</label>
            <input
              type="text"
              readOnly
              value={userEmail}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-800"
            />
            <label className="block text-sm font-medium text-gray-600 mb-1">Meeting Code</label>
            <input
              type="text"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
              placeholder="Enter a meeting code"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg text-gray-800"
            />
            <button
              onClick={() => handleJoinMeeting(joinCode)}
              className={`w-full font-semibold py-2 rounded-lg text-white ${
                joinClicked ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Join Meeting
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;