import { useState } from "react";
import { Link } from "react-router-dom";
import JoinMeetingModal from "../../../../src/JoinMeetingModel/JoinMeetingModel"; // ✅ Ensure this path is correct

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-4xl font-bold">Welcome to Meetzy</h1>
      <p className="mt-4 text-gray-600">
        High-quality video calls anytime, anywhere.
      </p>
      <div className="flex justify-center items-center gap-5">
        <Link
          to="/call"
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Create a new meeting
        </Link>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Join a meeting
        </button>
      </div>

      {isModalOpen && (
        <JoinMeetingModal closeModal={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default Home;
