import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[87vh] text-center">
      <h1 className="text-4xl font-bold">Welcome to Meetzy</h1>
      <p className="mt-4 text-gray-600">
        High-quality video calls anytime, anywhere.
      </p>
      <div className="flex justify-center items-center gap-5">
        <Link
          to="/call"
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg"
        >
          Create a new meeting
        </Link>
        <Link
          to="/call"
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg"
        >
          Join a meeting
        </Link>
      </div>
    </div>
  );
}

export default Home;
