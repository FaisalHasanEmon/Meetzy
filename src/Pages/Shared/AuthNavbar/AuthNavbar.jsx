import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";

const AuthNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Common link styles
  const linkStyles = "text-white hover:bg-blue-600 transition px-3 py-2 rounded";
  const mobileLinkStyles = "text-white hover:bg-blue-600 transition w-full text-center py-3 rounded";

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto p-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-col space-y-2">
          {user?.email ? (
            <>
              <Link to="/dashboard" className={linkStyles}>
                Dashboard
              </Link>
              <Link to="/" className={linkStyles}>
                Start Call
              </Link>
              <Link to="/whyMeetzy" className={linkStyles}>
                Why Meetzy
              </Link>
            </>
          ) : (
            <>
              <Link to="/aboutUs" className={linkStyles}>
                About Us
              </Link>
              <Link to="/features" className={linkStyles}>
                Features
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <span className="font-medium">Meetzy</span>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="mt-3 flex flex-col space-y-2">
              {user?.email ? (
                <>
                  <Link
                    to="/dashboard"
                    className={mobileLinkStyles}
                    onClick={toggleMenu}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/"
                    className={mobileLinkStyles}
                    onClick={toggleMenu}
                  >
                    Start Call
                  </Link>
                  <Link
                    to="/whyMeetzy"
                    className={mobileLinkStyles}
                    onClick={toggleMenu}
                  >
                    Why Meetzy
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/aboutUs"
                    className={mobileLinkStyles}
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/features"
                    className={mobileLinkStyles}
                    onClick={toggleMenu}
                  >
                    Features
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;