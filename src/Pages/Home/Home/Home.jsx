

import React, { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

function Home() {
  const navigate = useNavigate();
  const [isCreateMeetingModal, setisCreateMeetingModal] = useState(false);
  const [meetingCode, setMeetingCode] = useState('');
  const { user } = useContext(AuthContext); 
  const userEmail = user?.email || 'user@example.com';

  const generateMeetingCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 10; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleCreateMeeting = () => {
    const code = generateMeetingCode();
    setMeetingCode(code);
    setisCreateMeetingModal(true);
  };

  const handleShareCode = () => {
    navigator.clipboard.writeText(meetingCode);
  
    Swal.fire({
      title: 'Copied!',
      text: 'Meeting code copied to clipboard!',
      icon: 'success',
      timer: 2000, 
      showConfirmButton: false, 
    });
  };

  const handleJoinMeeting = () => {
    // navigate(`/call/${meetingCode}`);
    navigate(`/call`);
    setisCreateMeetingModal(false);
  };

  const closeModal = () => {
    setisCreateMeetingModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[87vh] text-center">
      <h1 className="text-4xl font-bold">Welcome to Meetzy</h1>
      <p className="mt-4 text-gray-600">
        High-quality video calls anytime, anywhere.
      </p>
      <div className="flex justify-center items-center gap-5">
        <button
          onClick={handleCreateMeeting}
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg"
        >
          Create a new meeting
        </button>
        {/* <Link
          to="/call"
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg" */}
       
        <button
          onClick={() => setisCreateMeetingModal(true)}
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Join a meeting
        </button>
      </div>

      {isCreateMeetingModal && (<>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Meeting Details</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Email:
              </label>
              <input
                type="text"
                value={userEmail}
                readOnly
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Meeting Code:
              </label>
              <input
                type="text"
                value={meetingCode}
                readOnly
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleShareCode}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Share Code
              </button>
              <button
                onClick={handleJoinMeeting}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Join Meeting
              </button>
            </div>
            <button
                onClick={closeModal}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Close
              </button>
          </div>
        </div>
        <isCreateMeetingModal closeModal={() => setisCreateMeetingModal(false)} /></>)}
    
      
    </div>
  );
}

export default Home;