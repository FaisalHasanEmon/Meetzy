import { Link } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <nav className=" text-white bg-blue-700  p-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center gap-5">
        <Link
          to="/aboutUs"
          className=" text-white  hover:bg-gray-200 transition"
        >
          About Us
        </Link>
        <Link to="/features" className="hover:text-gray-300">
          Features
        </Link>

        
      </div>
    </nav>
  );
};

export default AuthNavbar;
