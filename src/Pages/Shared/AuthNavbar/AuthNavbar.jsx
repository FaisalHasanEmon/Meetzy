import { Link } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <nav className=" text-white bg-blue-700  p-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <Link
          to="/aboutUs"
          className="text-xl  text-white font-semibold hover:bg-gray-200 transition"
        >
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default AuthNavbar;
