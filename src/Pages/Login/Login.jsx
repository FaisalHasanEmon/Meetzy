import React, { useState } from 'react';
import illustration from '../../assets/illustration.png';
import background from '../../assets/background.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background}) `}}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4 animate-pulse">
        Welcome to Meetzy
      </h1>

      <div className="bg-white rounded-lg shadow-lg flex w-3/4 max-w-4xl">
        <div className="w-1/2 p-8 flex flex-col items-center justify-center">
          <img src={illustration} alt="Illustration" className="w-auto h-auto mb-4" />
        </div>
        <div className="w-1/2 p-8">
          <form onSubmit={handleSubmit}>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@service.com"
              className="w-full p-3 border rounded-lg mb-4"
            />
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full p-3 border rounded-lg mb-4"
            />
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="mr-2"
                />
                Remember Me
              </label>
              <a href="#" className="text-blue-500">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg mb-4"
            >
              Login
            </button>

            <button
              type="button"
              className="w-full border py-3 rounded-lg flex items-center justify-center"
            >
              <img
                src="https://img.icons8.com/color/20/000000/google-logo.png"
                alt="Google"
                className="mr-2"
              />
              Login with Google
            </button>
          </form>

          <p className="text-center mt-4">
            Don’t have an account? <Link to='/register' className="text-blue-500">Sign Up</Link >
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
