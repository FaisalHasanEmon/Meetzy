// import { useState, useContext, useEffect } from "react";

// import { Link } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
// import { AuthContext } from "../../../Provider/AuthProvider";

// function Navbar() {
//   const { user, logOut } = useContext(AuthContext);
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleLogout = () => {
//     logOut();
//   };

//   return (
//     <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 shadow-md z-50">
//       <div className=" flex justify-between ">
//         <Link to="/" className="text-xl font-bold px-1">
//           Meetzy
//         </Link>

        

//         {/* User Profile / Login */}
//         <div className="hidden md:flex items-center space-x-4">
//           {user ? (
//             <div className="relative group">
//               <button className="flex items-center space-x-2 focus:outline-none">
//                 <FaUserCircle size={24} />
//                 <span>{user.displayName}</span>
//               </button>
//               {/* Dropdown */}
//               <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-40 opacity-0 group-hover:opacity-100 transition-opacity">
//                 {/* <Link
//                   to="/profile"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Profile
//                 </Link> */}
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-200"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <Link
//               to="/welcomePage"
//               className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
//             >
//               Login
//             </Link>
//           )}
//         </div>

        
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-blue-700">
//           {user ? (
//             <>
//               <Link to="/profile" className="block py-2 px-4 hover:bg-blue-800">
//                 Profile
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-left py-2 px-4 hover:bg-blue-800"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link to="/login" className="block py-2 px-4 hover:bg-blue-800">
//               Login
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle dropdown menu
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Handle logout
  const handleLogout = () => {
    logOut();
    navigate('/welcomePage');
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [navigate]);

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.3 } },
  };

  // Animation variants for dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  // Navigation links
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/features', label: 'Features' },
    { to: '/aboutUs', label: 'About Us' },
  ];

  if (loading) {
    return null; // Prevent rendering until auth is ready
  }

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Meetzy
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-white hover:text-blue-200 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none"
                aria-label="User menu"
                aria-expanded={isDropdownOpen}
              >
                <FaUserCircle size={24} />
                <span className="text-sm font-medium">{user.displayName || 'User'}</span>
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden"
                  >
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/dashboard/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-transparent border-2 border-white rounded-lg hover:bg-blue-700 hover:border-blue-700 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-blue-700 text-white"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white hover:text-blue-200 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-white hover:text-blue-200 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/dashboard/profile"
                    className="text-white hover:text-blue-200 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-blue-200 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 bg-transparent border-2 border-white rounded-lg hover:bg-blue-700"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;