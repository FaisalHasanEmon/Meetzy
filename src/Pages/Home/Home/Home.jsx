import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-4xl font-bold">Welcome to Meetzy</h1>
      <p className="mt-4 text-gray-600">
        High-quality video calls anytime, anywhere.
      </p>
      <Link
        to="/call"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        Start a Call
      </Link>
    </div>
  );
}

export default Home;
