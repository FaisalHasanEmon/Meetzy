// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Mic,
//   MicOff,
//   Video,
//   VideoOff,
//   Phone,
//   MoreHorizontal,
//   Smile,
//   Monitor,
//   Users,
//   Info,
//   MessageCircle,
//   X,
// } from "lucide-react";
// import data from "@emoji-mart/data";
// import Picker from "@emoji-mart/react";

// const CallInterface = () => {
//   // Local video reference
//   const localVideoRef = useRef(null);

//   // State variables
//   const [localStream, setLocalStream] = useState(null);
//   const [screenStream, setScreenStream] = useState(null);
//   const [isMuted, setIsMuted] = useState(false);
//   const [isCameraOff, setIsCameraOff] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [currentEmoji, setCurrentEmoji] = useState(null);
//   const [showMoreOptions, setShowMoreOptions] = useState(false);

//   // Ref for the input field
//   const inputRef = useRef(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Disable scrolling on mount
//     document.body.style.overflow = "hidden";

//     // Initialize media stream
//     const initializeMedia = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//           audio: true,
//         });
//         setLocalStream(stream);
//         if (localVideoRef.current) {
//           localVideoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error("Error accessing media devices.", error);
//       }
//     };

//     initializeMedia();

//     return () => {
//       document.body.style.overflow = "auto"; // Re-enable scrolling when unmounting
//     };
//   }, []);

//   // Auto-focus the input field when the sidebar is opened
//   useEffect(() => {
//     if (isSidebarOpen && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [isSidebarOpen]);

//   // Toggle mute/unmute
//   const toggleMute = () => {
//     if (localStream) {
//       const audioTrack = localStream.getAudioTracks()[0];
//       if (audioTrack) {
//         audioTrack.enabled = !audioTrack.enabled;
//         setIsMuted(!audioTrack.enabled);
//       }
//     }
//   };

//   // Toggle camera on/off
//   const toggleCamera = () => {
//     if (localStream) {
//       const videoTrack = localStream.getVideoTracks()[0];
//       videoTrack.enabled = !videoTrack.enabled;
//       setIsCameraOff(!videoTrack.enabled);
//     }
//   };

//   // Start screen sharing
//   const startScreenShare = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getDisplayMedia({
//         video: true,
//       });
//       setScreenStream(stream);
//       if (localVideoRef.current) {
//         localVideoRef.current.srcObject = stream;
//       }

//       stream.getVideoTracks()[0].onended = () => {
//         stopScreenShare();
//       };
//     } catch (error) {
//       console.error("Error sharing screen:", error);
//     }
//   };

//   // Stop screen sharing
//   const stopScreenShare = () => {
//     if (screenStream) {
//       screenStream.getTracks().forEach((track) => track.stop());
//       setScreenStream(null);
//       if (localStream && localVideoRef.current) {
//         localVideoRef.current.srcObject = localStream;
//       }
//     }
//   };

//   // End the call and navigate to landing page
//   const endCall = () => {
//     if (localStream) {
//       localStream.getTracks().forEach((track) => track.stop());
//       setLocalStream(null);
//     }
//     navigate("/");
//   };

//   // Toggle sidebar visibility
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Handle new message input change
//   const handleMessageChange = (e) => {
//     setNewMessage(e.target.value);
//   };

//   // Send message
//   const sendMessage = () => {
//     if (newMessage.trim()) {
//       setMessages([...messages, newMessage]); // Add new message to the list
//       setNewMessage(""); // Clear the input field
//       inputRef.current.focus(); // Refocus the input field after sending
//     }
//   };

//   // Send message on pressing Enter key
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       sendMessage();
//     }
//   };

//   // Handle emoji selection
//   const handleEmojiClick = (emoji) => {
//     setCurrentEmoji(emoji.native);
//     setShowEmojiPicker(false);

//     // Clear emoji after 3 seconds
//     setTimeout(() => {
//       setCurrentEmoji(null);
//     }, 3000);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-[675px] bg-black text-white relative">
//       {/* Video Display */}
//       <div className="absolute inset-0 flex items-center justify-center bg-black">
//         <video
//           ref={localVideoRef}
//           autoPlay
//           className="w-full h-full object-cover"
//         ></video>

//         {/* Display Selected Emoji */}
//         {currentEmoji && (
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-6xl animate-bounce">
//             {currentEmoji}
//           </div>
//         )}
//       </div>

//       {/* Sidebar for Chat Messages */}
//       <div
//         className={`fixed z-50 right-0 top-0 w-full sm:w-80 h-[calc(100vh-64px)] translate-y-[64px] bg-gray-800 text-white transition-transform duration-300 ${
//           isSidebarOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Sidebar Header with Close Button */}
//         <div className="flex justify-between items-center p-4 pt-5 border-b border-gray-700">
//           <h2 className="text-lg font-bold">Messages</h2>
//           <button
//             onClick={toggleSidebar}
//             className="text-white hover:bg-gray-700 p-2 rounded-full"
//           >
//             <X className="text-white" size={24} /> {/* Close button */}
//           </button>
//         </div>

//         {/* Chat Messages */}
//         <div className="px-4 py-2 overflow-y-auto h-[calc(100%-8rem)] space-y-4">
//           {messages.map((msg, index) => (
//             <div key={index} className="bg-gray-700 p-2 rounded-lg">
//               {msg}
//             </div>
//           ))}
//         </div>

//         {/* Message Input */}
//         <div className="absolute bottom-0 w-full flex justify-center p-3 bg-gray-800">
//           <input
//             ref={inputRef} // Ref for auto-focus
//             type="text"
//             value={newMessage}
//             onChange={handleMessageChange}
//             onKeyPress={handleKeyPress}
//             className="w-3/4 p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             placeholder="Type a message..."
//           />
//           <button
//             onClick={sendMessage}
//             className="ml-2 p-2 bg-blue-600 text-white rounded-lg"
//           >
//             Send
//           </button>
//         </div>
//       </div>

//       {/* Controls (Hidden on mobile when sidebar is open) */}
//       <div
//         className={`absolute bottom-5 w-full flex flex-wrap justify-center space-x-2 sm:space-x-3 md:space-x-6 bg-opacity-70 py-2 sm:py-3 rounded-xl z-50 ${
//           isSidebarOpen ? "hidden sm:flex" : "flex"
//         }`}
//       >
//         {/* Main Controls */}
//         <button
//           onClick={toggleMute}
//           className={`p-2 sm:p-3 rounded-full ${
//             isMuted ? "bg-gray-600" : "bg-gray-800"
//           } hover:bg-gray-700`}
//         >
//           {isMuted ? (
//             <MicOff className="text-white" size={20} />
//           ) : (
//             <Mic className="text-white" size={20} />
//           )}
//         </button>
//         <button
//           onClick={toggleCamera}
//           className={`p-2 sm:p-3 rounded-full ${
//             isCameraOff ? "bg-gray-600" : "bg-gray-800"
//           } hover:bg-gray-700`}
//         >
//           {isCameraOff ? (
//             <VideoOff className="text-white" size={20} />
//           ) : (
//             <Video className="text-white" size={20} />
//           )}
//         </button>
//         <button
//           onClick={screenStream ? stopScreenShare : startScreenShare}
//           className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700"
//         >
//           <Monitor className="text-white" size={20} />
//         </button>
//         <button
//           onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//           className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700"
//         >
//           <Smile className="text-white" size={20} />
//         </button>

//         {/* More Options Dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setShowMoreOptions(!showMoreOptions)}
//             className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700"
//           >
//             <MoreHorizontal className="text-white" size={20} />
//           </button>
//           {showMoreOptions && (
//             <div className="absolute bottom-14 right-0 bg-gray-800 rounded-lg shadow-lg">
//               <button className="w-full p-3 hover:bg-gray-700 flex items-center">
//                 <Info className="text-white mr-2" size={20} /> Info
//               </button>
//               <button className="w-full p-3 hover:bg-gray-700 flex items-center">
//                 <Users className="text-white mr-2" size={20} /> Participants
//               </button>
//             </div>
//           )}
//         </div>

//         {/* End Call Button */}
//         <button
//           onClick={endCall}
//           className="p-2 sm:p-3 rounded-full bg-red-600 hover:bg-red-700"
//         >
//           <Phone className="text-white" size={20} />
//         </button>

//         {/* Chat Button */}
//         <button
//           onClick={toggleSidebar}
//           className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700"
//         >
//           <MessageCircle className="text-white" size={20} />
//         </button>
//       </div>

//       {/* Emoji Picker */}
//       {showEmojiPicker && (
//         <div className="absolute bottom-20">
//           <Picker data={data} onEmojiSelect={handleEmojiClick} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CallInterface;



import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Mic, MicOff, Video, VideoOff, Phone, MoreHorizontal,
  Smile, Monitor, Users, Info, MessageCircle, X
} from 'lucide-react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { io } from 'socket.io-client';
import Swal from 'sweetalert2';

const BACKEND_URL =
//  process.env.NODE_ENV === 'development' 
  // ? 'http://localhost:5000' 
   'https://meetzy-server.onrender.com';

const CallInterface = () => {
  const { roomId } = useParams();
  const localVideoRef = useRef(null);
  const remoteVideosRef = useRef(null);
  const navigate = useNavigate();

  // State variables
  const [localStream, setLocalStream] = useState(null);
  const [screenStream, setScreenStream] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState(null);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [peers, setPeers] = useState({});
  const [participants, setParticipants] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState('connecting');
  const [socketInstance, setSocketInstance] = useState(null);
  const [showParticipantsList, setShowParticipantsList] = useState(false);

  // WebRTC configuration
  const configuration = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      // Add TURN servers for production
    ],
  };

  // Initialize media stream and socket connection
  useEffect(() => {
    document.body.style.overflow = 'hidden';

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
        console.error('Error accessing media devices:', error);
        Swal.fire({
          icon: 'error',
          title: 'Media Access Denied',
          text: 'Please allow camera and microphone access.',
        });
      }
    };

    const initializeSocket = () => {
      const socket = io(BACKEND_URL, {
        // auth: { 
        //   token: localStorage.getItem('jwt_token') 
        // },
        transports: ['websocket', 'polling'],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000
      });

      setSocketInstance(socket);

      socket.on('connect', () => {
        console.log('Connected to server');
        setConnectionStatus('connected');
        socket.emit('join-room', { roomId });
      });

      socket.on('connect_error', (err) => {
        console.error('Socket connection error:', err);
        setConnectionStatus('failed');
        Swal.fire({
          icon: 'error',
          title: 'Connection Failed',
          text: err.message || 'Unable to connect to the server. Please try again.',
        });
      });

      socket.on('user-connected', ({ userId, email }) => {
        setParticipants(prev => [...prev, { userId, email, muted: false, cameraOff: false }]);
        createPeerConnection(userId, socket);
      });

      socket.on('user-disconnected', (userId) => {
        if (peers[userId]) {
          peers[userId].close();
          setPeers(prev => {
            const newPeers = { ...prev };
            delete newPeers[userId];
            return newPeers;
          });
        }
        setParticipants(prev => prev.filter(p => p.userId !== userId));
        removeVideoElement(userId);
      });

      socket.on('offer', async (data) => {
        const { sdp, userId, senderId } = data;
        const peerConnection = createPeerConnection(userId, socket);
        try {
          await peerConnection.setRemoteDescription(new RTCSessionDescription(sdp));
          const answer = await peerConnection.createAnswer();
          await peerConnection.setLocalDescription(answer);
          socket.emit('answer', { roomId, sdp: answer, userId: senderId });
        } catch (error) {
          console.error("Error handling offer", error);
        }
      });

      socket.on('answer', async (data) => {
        const { sdp, userId } = data;
        if (peers[userId]) {
          try {
            await peers[userId].setRemoteDescription(new RTCSessionDescription(sdp));
          } catch (error) {
            console.error("Error handling answer", error);
          }
        }
      });

      socket.on('ice-candidate', async (data) => {
        const { candidate, userId } = data;
        if (peers[userId] && candidate) {
          try {
            await peers[userId].addIceCandidate(new RTCIceCandidate(candidate));
          } catch (error) {
            console.error("Error handling ice candidate", error);
          }
        }
      });

      socket.on('chat-history', (messages) => {
        setMessages(messages);
      });

      socket.on('receive-message', (msg) => {
        setMessages(prev => [...prev, msg]);
      });

      socket.on('receive-emoji', ({ userId, emoji }) => {
        setCurrentEmoji(emoji);
        setTimeout(() => setCurrentEmoji(null), 3000);
      });

      socket.on('status-update', ({ userId, muted, cameraOff }) => {
        setParticipants(prevParticipants =>
          prevParticipants.map(p =>
            p.userId === userId ? { ...p, muted, cameraOff } : p
          )
        );
      });

      return socket;
    };

    initializeMedia();
    const socket = initializeSocket();

    return () => {
      document.body.style.overflow = 'auto';
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
      if (screenStream) {
        screenStream.getTracks().forEach(track => track.stop());
      }
      Object.values(peers).forEach(peer => peer.close());
      socket.disconnect();
    };
  }, [roomId]);

  // Create peer connection
  const createPeerConnection = (userId, socket) => {
    const peerConnection = new RTCPeerConnection(configuration);

    if (localStream) {
      localStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream);
      });
    }

    peerConnection.ontrack = (event) => {
      const videoElement = document.createElement('video');
      videoElement.srcObject = event.streams[0];
      videoElement.autoplay = true;
      videoElement.className = 'w-full h-full object-cover rounded-lg';
      videoElement.id = `video-${userId}`;
      
      const container = document.createElement('div');
      container.className = 'relative rounded-lg overflow-hidden shadow-lg';
      container.id = `container-${userId}`;
      container.appendChild(videoElement);
      
      // Add user info overlay
      const userInfo = document.createElement('div');
      userInfo.className = 'absolute bottom-2 left-2 bg-gray-800 text-white px-2 py-1 rounded';
      userInfo.textContent = participants.find(p => p.userId === userId)?.email || 'Participant';
      container.appendChild(userInfo);
      
      if (remoteVideosRef.current) {
        remoteVideosRef.current.appendChild(container);
      }
    };

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('ice-candidate', { roomId, candidate: event.candidate, userId });
      }
    };

    setPeers(prev => ({ ...prev, [userId]: peerConnection }));

    peerConnection.createOffer()
      .then(offer => peerConnection.setLocalDescription(offer))
      .then(() => {
        socket.emit('offer', { roomId, sdp: peerConnection.localDescription, userId });
      })
      .catch(err => console.error('Error creating offer:', err));

    return peerConnection;
  };

  // Remove video element when user disconnects
  const removeVideoElement = (userId) => {
    const element = document.getElementById(`container-${userId}`);
    if (element && remoteVideosRef.current) {
      remoteVideosRef.current.removeChild(element);
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsMuted(!audioTrack.enabled);
        if (socketInstance) {
          socketInstance.emit('status-update', { roomId, muted: !audioTrack.enabled });
        }
      }
    }
  };

  // Toggle camera on/off
  const toggleCamera = () => {
    if (localStream) {
      const videoTrack = localStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsCameraOff(!videoTrack.enabled);
        if (socketInstance) {
          socketInstance.emit('status-update', { roomId, cameraOff: !videoTrack.enabled });
        }
      }
    }
  };

  // Screen sharing
  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      setScreenStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      const videoTrack = stream.getVideoTracks()[0];
      Object.values(peers).forEach((peer) => {
        const sender = peer.getSenders().find((s) => s.track.kind === 'video');
        if (sender) {
          sender.replaceTrack(videoTrack);
        }
      });

      videoTrack.onended = stopScreenShare;
    } catch (error) {
      console.error('Error sharing screen:', error);
      Swal.fire({
        icon: 'error',
        title: 'Screen Share Failed',
        text: error.message || 'Unable to start screen sharing.',
      });
    }
  };

  const stopScreenShare = () => {
    if (screenStream) {
      screenStream.getTracks().forEach(track => track.stop());
      setScreenStream(null);
      if (localStream && localVideoRef.current) {
        localVideoRef.current.srcObject = localStream;
      }

      const videoTrack = localStream.getVideoTracks()[0];
      Object.values(peers).forEach((peer) => {
        const sender = peer.getSenders().find((s) => s.track.kind === 'video');
        if (sender) {
          sender.replaceTrack(videoTrack);
        }
      });
    }
  };

  // End call
  const endCall = () => {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
    }
    if (screenStream) {
      screenStream.getTracks().forEach(track => track.stop());
    }
    Object.values(peers).forEach(peer => peer.close());
    if (socketInstance) {
      socketInstance.disconnect();
    }
    navigate('/');
  };

  // Chat functions
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleMessageChange = (e) => setNewMessage(e.target.value);

  const sendMessage = () => {
    if (newMessage.trim() && socketInstance) {
      socketInstance.emit('send-message', { roomId, message: newMessage });
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const handleEmojiClick = (emoji) => {
    setCurrentEmoji(emoji.native);
    setShowEmojiPicker(false);
    if (socketInstance) {
      socketInstance.emit('send-emoji', { roomId, emoji: emoji.native });
    }
    setTimeout(() => setCurrentEmoji(null), 3000);
  };

  // Dynamic grid layout
  const getGridClass = () => {
    const count = participants.length + 1; // Include local stream
    if (count <= 2) return 'grid-cols-1';
    if (count <= 4) return 'grid-cols-2';
    return 'grid-cols-3';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white relative">
      {/* Connection Status */}
      {connectionStatus !== 'connected' && (
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full z-50 ${
          connectionStatus === 'connecting' ? 'bg-yellow-600' : 'bg-red-600'
        }`}>
          {connectionStatus === 'connecting' ? 'Connecting...' : 'Connection Failed'}
        </div>
      )}

      {/* Video Display */}
      <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center p-4">
        <div className={`grid ${getGridClass()} gap-4 w-full h-full`}>
          {/* Local Video */}
          <div className="relative rounded-lg overflow-hidden shadow-lg bg-black">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-gray-800 text-white px-2 py-1 rounded">
              You
            </div>
            {isMuted && (
              <MicOff className="absolute top-2 right-2 text-red-500" size={24} />
            )}
            {isCameraOff && (
              <VideoOff className="absolute top-2 right-8 text-red-500" size={24} />
            )}
          </div>
          
          {/* Remote Videos */}
          <div ref={remoteVideosRef} className="contents"></div>
        </div>

        {/* Emoji Display */}
        {currentEmoji && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl animate-bounce z-50">
            {currentEmoji}
          </div>
        )}
      </div>

      {/* Chat Sidebar */}
      <div className={`fixed z-50 right-0 top-0 w-full sm:w-96 h-full bg-gray-800 text-white transition-transform duration-300 ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Chat</h2>
          <button
            onClick={toggleSidebar}
            className="text-white hover:bg-gray-700 p-2 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="px-4 py-2 overflow-y-auto h-[calc(100%-8rem)] space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className="bg-gray-700 p-3 rounded-lg">
              <span className="font-semibold">{msg.sender}</span>: {msg.message}
              <div className="text-xs text-gray-400">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 w-full flex p-3 bg-gray-800">
          <input
            type="text"
            value={newMessage}
            onChange={handleMessageChange}
            onKeyPress={handleKeyPress}
            className="w-3/4 p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 bg-opacity-90 py-3 flex justify-center space-x-4 z-50">
        <button
          onClick={toggleMute}
          className={`p-3 rounded-full ${isMuted ? 'bg-red-600' : 'bg-gray-700'} hover:bg-gray-600`}
        >
          {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
        </button>
        <button
          onClick={toggleCamera}
          className={`p-3 rounded-full ${isCameraOff ? 'bg-red-600' : 'bg-gray-700'} hover:bg-gray-600`}
        >
          {isCameraOff ? <VideoOff size={24} /> : <Video size={24} />}
        </button>
        <button
          onClick={screenStream ? stopScreenShare : startScreenShare}
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600"
        >
          <Monitor size={24} />
        </button>
        <button
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600"
        >
          <Smile size={24} />
        </button>
        
        {/* More Options */}
        <div className="relative">
          <button
            onClick={() => setShowMoreOptions(!showMoreOptions)}
            className="p-3 rounded-full bg-gray-700 hover:bg-gray-600"
          >
            <MoreHorizontal size={24} />
          </button>
          {showMoreOptions && (
            <div className="absolute bottom-16 right-0 bg-gray-800 rounded-lg shadow-lg w-48">
              <button
                className="w-full p-3 hover:bg-gray-700 flex items-center justify-start"
                onClick={() => {
                  setShowParticipantsList(true);
                  setShowMoreOptions(false);
                }}
              >
                <Users size={20} className="mr-2" /> Participants ({participants.length + 1})
              </button>
              <button className="w-full p-3 hover:bg-gray-700 flex items-center justify-start">
                <Info size={20} className="mr-2" /> Meeting Info
              </button>
              <button
                onClick={() => {
                  toggleSidebar();
                  setShowMoreOptions(false);
                }}
                className="w-full p-3 hover:bg-gray-700 flex items-center justify-start"
              >
                <MessageCircle size={20} className="mr-2" /> Chat
              </button>
            </div>
          )}
        </div>
        
        <button
          onClick={endCall}
          className="p-3 rounded-full bg-red-600 hover:bg-red-700"
        >
          <Phone size={24} />
        </button>
      </div>

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="absolute bottom-20 right-4 z-50">
          <Picker data={data} onEmojiSelect={handleEmojiClick} />
        </div>
      )}

      {/* Participants List Modal */}
      {showParticipantsList && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-lg font-bold">Participants ({participants.length + 1})</h2>
              <button
                onClick={() => setShowParticipantsList(false)}
                className="text-white hover:bg-gray-700 p-2 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4 space-y-2">
              {/* Local User */}
              <div className="flex items-center justify-between p-2 rounded-md bg-gray-700">
                <div className='flex items-center gap-2'>
                  <Users size={20} className="text-gray-400" />
                  <span>You</span>
                </div>
                <div className="flex items-center gap-2">
                  {isMuted ? (
                    <MicOff className="text-red-500" size={16} />
                  ) : (
                    <Mic className="text-green-500" size={16} />
                  )}
                  {isCameraOff ? (
                    <VideoOff className="text-red-500" size={16} />
                  ) : (
                    <Video className="text-green-500" size={16} />
                  )}
                </div>
              </div>
              {/* Remote Users */}
              {participants.map((participant) => (
                <div key={participant.userId} className="flex items-center justify-between p-2 rounded-md bg-gray-700">
                  <div className='flex items-center gap-2'>
                    <Users size={20} className="text-gray-400" />
                    <span>{participant.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {participant.muted ? (
                      <MicOff className="text-red-500" size={16} />
                    ) : (
                      <Mic className="text-green-500" size={16} />
                    )}
                    {participant.cameraOff ? (
                      <VideoOff className="text-red-500" size={16} />
                    ) : (
                      <Video className="text-green-500" size={16} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CallInterface;
