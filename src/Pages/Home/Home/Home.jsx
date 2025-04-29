import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCalendarCheck, FaPlus, FaUser } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const userEmail = user?.email || "user@example.com";

  const [meetingCode, setMeetingCode] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  const [joinClicked, setJoinClicked] = useState(false);
  const [scheduledMeetings, setScheduledMeetings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [scheduleTitle, setScheduleTitle] = useState("");

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

  const handleScheduleMeeting = () => {
    if (!scheduleTitle || !selectedDate) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill in all fields before scheduling the meeting.",
      });
      return;
    }
    setScheduledMeetings([...scheduledMeetings, { title: scheduleTitle, date: selectedDate }]);
    setShowScheduleModal(false);
    setScheduleTitle("");
    setSelectedDate(null);
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

  
  const allMeetings = [...scheduledMeetings];

  return (
    <div className="bg-gray-800 text-white">
      <section className="min-h-[87vh] flex flex-col md:flex-row items-start justify-center bg-white px-6 py-10">
        <div className="w-full md:w-[50%] max-w-md bg-white border-r border-gray-200 pr-6 md:pr-10">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
            Good morning, {user.displayName || "User"}!
          </h2>
          <div className="flex justify-center mb-6">
            <div className="avatar">
              <div className="w-20 rounded-full ring ring-gray-300 ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL || "default-avatar.png"} alt="Profile" />
              </div>
            </div>
          </div>

          <div className="text-left">
            <p className="font-medium text-gray-800 mb-3">Your agenda today:</p>
            <div className="space-y-4">
              {allMeetings.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
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

        <div className="w-full md:w-[50%] mt-16 md:mt-0 pl-0 md:pl-10 flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold text-black">Welcome to Meetzy</h1>
            <p className="mt-4 text-gray-600">High-quality video calls anytime, anywhere.</p>
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
            onClick={() => setShowScheduleModal(true)}
            className="flex items-center gap-4 border border-gray-200 hover:shadow-md bg-white rounded-lg px-10 py-8"
          >
            <FaCalendarCheck className="text-blue-600 text-3xl" />
            <span className="text-lg font-medium text-blue-700">Schedule a meeting</span>
          </button>
        </div>
      </section>

      {showScheduleModal && (
        <Modal title="Schedule a Meeting" onClose={() => setShowScheduleModal(false)}>
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-600 mb-1">Meeting Title</label>
            <input
              type="text"
              value={scheduleTitle}
              onChange={(e) => setScheduleTitle(e.target.value)}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg text-gray-800"
              placeholder="e.g. Project Sync"
            />
            <label className="block text-sm font-medium text-gray-600 mb-1">Select Date & Time</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              dateFormat="Pp"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800"
            />
            <button
              onClick={handleScheduleMeeting}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
            >
              Schedule
            </button>
          </div>
        </Modal>
      )}

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
