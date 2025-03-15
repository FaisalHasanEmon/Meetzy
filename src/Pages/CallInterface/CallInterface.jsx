import { useState } from "react";

function CallInterface() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="flex flex-col items-center h-screen bg-gray-900 text-white">
      <h2 className="mt-6 text-2xl">Video Call</h2>
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="bg-gray-700 w-80 h-64 rounded-lg flex items-center justify-center">
          <span>Your Video</span>
        </div>
      </div>
      <div className="flex gap-4 p-4 bg-gray-800 w-full justify-center">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="bg-red-600 px-4 py-2 rounded"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <button className="bg-gray-600 px-4 py-2 rounded">Share Screen</button>
        <button className="bg-red-500 px-4 py-2 rounded">End Call</button>
      </div>
    </div>
  );
}

export default CallInterface;
