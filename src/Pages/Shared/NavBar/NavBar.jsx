import { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaFacebook, FaGithub, FaGoogle, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import logoe from "../../../assets/logoe.png";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogout = () => logOut();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md shadow-md text-[#1DCD9F]"
            : "bg-gradient-to-r from-blue-600 via-teal-500 to-blue-700 text-white"
        }`}
      >
        <div className="flex justify-between items-center container mx-auto py-3 px-5">
          {/* Logo */}
          <Link to="/" className="font-bold">
            <img src={logoe} alt="Logo" className="w-40 h-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-bold text-2xl">
            <NavLink
              to="/call"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-500 underline"
                  : "hover:text-gray-500"
              }
            >
              StartCall
            </NavLink>
           
            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-500 underline"
                  : "hover:text-gray-500"
              }
            >
              Features
            </NavLink>
            <NavLink
              to="/whyMeetzy"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-500 underline"
                  : "hover:text-gray-500"
              }
            >
              About
            </NavLink>
          </div>

          {/* User Profile or Login */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-3 px-4 py-2 border-gray-300 shadow-md hover:bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 focus:outline-none">
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-gray-300 shadow-sm"
                    />
                  )}
                  <span className="font-medium">{user.displayName}</span>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-xl w-44 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100">
                  <Link
                    to="/profile"
                    className="block px-4 py-3 font-medium bg-gradient-to-r from-blue-500 to-teal-400 hover:text-white"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 bg-gradient-to-r from-yellow-500 to-red-700 hover:text-white font-semibold relative"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-red-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                    <span className="relative z-10">Logout</span>
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="text-white flex items-center bg-[#14b5a7] px-6 py-2 rounded-full shadow-md space-x-3 hover:scale-105 transition-all duration-300">
                  <span className="text-xl">
                  <FaFacebook />
                  </span>
                  <span className="text-xl">
                  <FaGoogle />
                  </span>
                  <span className="text-xl">
                    <i className="fab fa-google"></i>
                  </span>
                  <span className="text-xl">
                  <FaGithub />
                  </span>
                  <span className="h-5 w-px bg-white mx-2"></span>
                  <span className="font-bold ">Log in</span>
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-purple-300/90 backdrop-blur-md shadow-md">
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-purple-400">
              Dashboard
            </Link>
            <Link to="/call" className="block py-2 px-4 hover:bg-purple-400">
              Start Call
            </Link>
            <Link to="/features" className="block py-2 px-4 hover:bg-purple-400">
              Features
            </Link>
            <Link to="/whyMeetzy" className="block py-2 px-4 hover:bg-purple-400">
              Why Meetzy
            </Link>
            {user ? (
              <>
                <Link to="/profile" className="block py-2 px-4 hover:bg-purple-400">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left py-2 px-4 hover:bg-purple-400"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="block py-2 px-4 hover:bg-purple-400">
                Login
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}

export default Navbar;
