import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logOut();
  };

  return (
    <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Meetzy
        </Link>

        {/* Desktop Menu */}
        

        {/* User Profile / Login */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="relative group">
              <button className="flex items-center space-x-2 focus:outline-none">
                <FaUserCircle size={24} />
                <span>{user.displayName}</span>
              </button>
              {/* Dropdown */}
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-40 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Profile
                </Link> */}
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/welcomePage"
              className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
            >
              Login
            </Link>
          )}
        </div>

        
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          {user ? (
            <>
              <Link to="/profile" className="block py-2 px-4 hover:bg-blue-800">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left py-2 px-4 hover:bg-blue-800"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="block py-2 px-4 hover:bg-blue-800">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
