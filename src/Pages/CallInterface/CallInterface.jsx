import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
  MoreHorizontal,
  Smile,
  Monitor,
  Users,
  Info,
  MessageCircle,
  X,
} from "lucide-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const CallInterface = () => {
  // Local video reference
  const localVideoRef = useRef(null);

  // State variables
  const [localStream, setLocalStream] = useState(null);
  const [screenStream, setScreenStream] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState(null);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  // Ref for the input field
  const inputRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Disable scrolling on mount
    document.body.style.overflow = "hidden";

    // Initialize media stream
    const initializeMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setLocalStream(stream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    };

    initializeMedia();

    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when unmounting
    };
  }, []);

  // Auto-focus the input field when the sidebar is opened
  useEffect(() => {
    if (isSidebarOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSidebarOpen]);

  // Toggle mute/unmute
  const toggleMute = () => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsMuted(!audioTrack.enabled);
      }
    }
  };

  // Toggle camera on/off
  const toggleCamera = () => {
    if (localStream) {
      const videoTrack = localStream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      setIsCameraOff(!videoTrack.enabled);
    }
  };

  // Start screen sharing
  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      setScreenStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      stream.getVideoTracks()[0].onended = () => {
        stopScreenShare();
      };
    } catch (error) {
      console.error("Error sharing screen:", error);
    }
  };

  // Stop screen sharing
  const stopScreenShare = () => {
    if (screenStream) {
      screenStream.getTracks().forEach((track) => track.stop());
      setScreenStream(null);
      if (localStream && localVideoRef.current) {
        localVideoRef.current.srcObject = localStream;
      }
    }
  };

  // End the call and navigate to landing page
  const endCall = () => {
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop());
      setLocalStream(null);
    }
    navigate("/");
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle new message input change
  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  // Send message
  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]); // Add new message to the list
      setNewMessage(""); // Clear the input field
      inputRef.current.focus(); // Refocus the input field after sending
    }
  };

  // Send message on pressing Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // Handle emoji selection
  const handleEmojiClick = (emoji) => {
    setCurrentEmoji(emoji.native);
    setShowEmojiPicker(false);

    // Clear emoji after 3 seconds
    setTimeout(() => {
      setCurrentEmoji(null);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[675px] bg-black text-white relative">
      {/* Video Display */}
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <video
          ref={localVideoRef}
          autoPlay
          className="w-full h-full object-cover"
        ></video>

        {/* Display Selected Emoji */}
        {currentEmoji && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-6xl animate-bounce">
            {currentEmoji}
          </div>
        )}
      </div>

      {/* Sidebar for Chat Messages */}
      <div
        className={`fixed z-50 right-0 top-0 w-full sm:w-80 h-[calc(100vh-64px)] translate-y-[64px] bg-gray-800 text-white transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header with Close Button */}
        <div className="flex justify-between items-center p-4 pt-5 border-b border-gray-700">
          <h2 className="text-lg font-bold">Messages</h2>
          <button
            onClick={toggleSidebar}
            className="text-white hover:bg-gray-700 p-2 rounded-full"
          >
            <X className="text-white" size={24} /> {/* Close button */}
          </button>
        </div>

        {/* Chat Messages */}
        <div className="px-4 py-2 overflow-y-auto h-[calc(100%-8rem)] space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className="bg-gray-700 p-2 rounded-lg">
              {msg}
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="absolute bottom-0 w-full flex justify-center p-3 bg-gray-800">
          <input
            ref={inputRef} // Ref for auto-focus
            type="text"
            value={newMessage}
            onChange={handleMessageChange}
            onKeyPress={handleKeyPress}
            className="w-3/4 p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="ml-2 p-2 bg-blue-600 text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>

      {/* Controls (Hidden on mobile when sidebar is open) */}
      <div
        className={`absolute bottom-5 w-full flex flex-wrap justify-center space-x-2 sm:space-x-3 md:space-x-6 bg-opacity-70 py-2 sm:py-3 rounded-xl z-50 ${
          isSidebarOpen ? "hidden sm:flex" : "flex"
        }`}
      >
        {/* Main Controls */}
        <button
          onClick={toggleMute}
          className={`p-2 sm:p-3 rounded-full ${
            isMuted ? "bg-gray-600" : "bg-gray-800"
          } hover:bg-gray-700`}
        >
          {isMuted ? (
            <MicOff className="text-white" size={20} />
          ) : (
            <Mic className="text-white" size={20} />
          )}
        </button>
        <button
          onClick={toggleCamera}
          className={`p-2 sm:p-3 rounded-full ${
            isCameraOff ? "bg-gray-600" : "bg-gray-800"
          } hover:bg-gray-700`}
        >
          {isCameraOff ? (
            <VideoOff className="text-white" size={20} />
          ) : (
            <Video className="text-white" size={20} />
          )}
        </button>
        <button
          onClick={screenStream ? stopScreenShare : startScreenShare}
          className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700"
        >
          <Monitor className="text-white" size={20} />
        </button>
        <button
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700"
        >
          <Smile className="text-white" size={20} />
        </button>

        {/* More Options Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowMoreOptions(!showMoreOptions)}
            className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            <MoreHorizontal className="text-white" size={20} />
          </button>
          {showMoreOptions && (
            <div className="absolute bottom-14 right-0 bg-gray-800 rounded-lg shadow-lg">
              <button className="w-full p-3 hover:bg-gray-700 flex items-center">
                <Info className="text-white mr-2" size={20} /> Info
              </button>
              <button className="w-full p-3 hover:bg-gray-700 flex items-center">
                <Users className="text-white mr-2" size={20} /> Participants
              </button>
            </div>
          )}
        </div>

        {/* End Call Button */}
        <button
          onClick={endCall}
          className="p-2 sm:p-3 rounded-full bg-red-600 hover:bg-red-700"
        >
          <Phone className="text-white" size={20} />
        </button>

        {/* Chat Button */}
        <button
          onClick={toggleSidebar}
          className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700"
        >
          <MessageCircle className="text-white" size={20} />
        </button>
      </div>

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="absolute bottom-20">
          <Picker data={data} onEmojiSelect={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default CallInterface;
