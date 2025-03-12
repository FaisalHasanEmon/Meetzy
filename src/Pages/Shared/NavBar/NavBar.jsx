import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">
        VideoCallApp
      </Link>
      <div>
        <Link to="/dashboard" className="px-4">
          Dashboard
        </Link>
        <Link to="/call" className="px-4">
          Start Call
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
