import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    imageUrl: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="md:w-1/2 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-md text-center mb-6">
          Our platform is designed to provide a seamless experience with high-quality video calls, real-time collaboration, and easy communication tools. Whether you're working with a team, attending virtual meetings, or catching up with friends, we've got you covered.
        </p>
        <div className="animate-pulse mb-6">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/conference.png"
            alt="Conference"
            className="w-32 h-32"
          />
        </div>
        <p className="mt-6 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-200 font-semibold underline">
            Sign in here
          </Link>
        </p>
      </div>
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
        <div className="w-full bg-white shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Register</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="imageUrl"
              placeholder="Profile Image URL"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-blue-700 font-semibold">
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-300"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/add-user-male.png"
                alt="Sign Up"
                className="w-5 h-5"
              />
              <span>Sign Up</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm">Or sign up with</p>
            <div className="flex justify-center space-x-3 mt-3">
              <button className="flex items-center space-x-2 border p-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                <img
                  src="https://img.icons8.com/color/30/google-logo.png"
                  alt="Google"
                />
                <span>Google</span>
              </button>
              <button className="flex items-center space-x-2 border p-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                <img
                  src="https://img.icons8.com/color/30/facebook-new.png"
                  alt="Facebook"
                />
                <span>Facebook</span>
              </button>
              <button className="flex items-center space-x-2 border p-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                <img
                  src="https://img.icons8.com/color/30/twitter.png"
                  alt="Twitter"
                />
                <span>Twitter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
