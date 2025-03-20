import { useState } from "react";
import { useNavigate } from "react-router-dom";

function JoinMeetingModal({ closeModal }) {
  const [meetingCode, setMeetingCode] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (meetingCode.trim() !== "") {
      navigate(`/call/${meetingCode}`);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Join a Meeting</h2>
        <input
          type="text"
          placeholder="Enter Meeting Code"
          value={meetingCode}
          onChange={(e) => setMeetingCode(e.target.value)}
          className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleJoin}
            disabled={meetingCode.trim() === ""}
            className={`px-4 py-2 text-white font-bold rounded-lg ${
              meetingCode.trim() !== ""
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinMeetingModal;
