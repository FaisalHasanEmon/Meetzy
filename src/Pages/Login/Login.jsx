import React, { useContext, useState } from "react";
import illustration from "../../assets/illustration.png";
import bgImage from "../../assets/backgroundddd.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaStarAndCrescent } from "react-icons/fa";

const Login = () => {
  const { signIn, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setDisabled(true);
    signIn(email, password)
      .then(() => {
        Swal.fire({
          title: "User Login Successful!",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      })
      .finally(() => setDisabled(false));
  };

  const handleForgotPassword = () => {
    if (!email) {
      return Swal.fire("Oops!", "Please enter your email first", "warning");
    }

    resetPassword(email)
      .then(() => {
        Swal.fire(
          "Password Reset Sent",
          "Check your email to reset your password",
          "success"
        );
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
    <div
      className="min-h-screen flex items-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Eid Mubarak Animation */}
      <div className="absolute top-36 right-0 p-6 text-center text-xl text-[#14b6a7]">
        <div className="mb-4">
          <FaStarAndCrescent className="text-6xl animate-bounce ml-20" />
        </div>
        <p className="text-4xl font-extrabold text-[#14b6a7] tracking-wide">
          Eid Mubarak!
        </p>
      </div>

      {/* Login Card */}
      <div className="container flex flex-col md:flex-row w-full max-w-4xl backdrop-blur-lg bg-white/20 border border-white/10 shadow-2xl rounded-xl overflow-hidden mx-10">
        {/* Left: Illustration */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-white drop-shadow-lg animate-pulse">
            Welcome Back!
          </h2>
          <img
            src={illustration}
            alt="Illustration"
            className="w-full max-w-xs md:max-w-sm h-auto"
          />
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 relative">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="form-control">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full text-[#14b6a7]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="block mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full text-[#14b6a7]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p
                className="text-right text-sm text-blue-500 hover:underline cursor-pointer"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </p>
            </div>

            <div className="form-control mt-4">
              <input
                className="btn bg-[#14b6a7] w-full"
                type="submit"
                value={disabled ? "Logging in..." : "Login"}
                disabled={disabled}
              />
            </div>
          </form>

          <p className="py-4 text-[#14b6a7] text-center">
            <small>
              New here?{" "}
              <Link className="text-red-600 underline" to="/signup">
                Create an account
              </Link>
            </small>
          </p>

          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
