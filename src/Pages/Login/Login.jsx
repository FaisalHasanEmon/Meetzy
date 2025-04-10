import React, { useContext, useState, useRef } from "react";
import illustration from "../../assets/illustration.png";
import bgImage from "../../assets/backgroundddd.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaStarAndCrescent } from "react-icons/fa";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        Swal.fire({
          title: "User Login Successful!",
          icon: "success",
          showClass: { popup: "animate_animated animate_fadeInDown" },
          hideClass: { popup: "animate_animated animate_fadeOutUp" },
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
      });
  };

  return (
    <div
      className="min-h-screen flex items-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
{/* Star and Eid Mubarak section */}
<div className="absolute top-36 right-0 p-6 text-center text-xl text-[#14b6a7]">
  {/* Animated Star Icon */}
  <div className="mb-4">
    <span
      className="text-6xl text-[#14b6a7] "
      role="img"
      aria-label="star"
    >
      <FaStarAndCrescent className="animate-[bounce_2s_infinite] ml-20" />
    </span>
  </div>

  {/* Glowing Eid Text */}
  <p className="text-4xl font-extrabold text-[#14b6a7]text-shadow-glow tracking-wide">
    Eid Mubarak!
  </p>
</div>


      {/* Glassmorphism Wrapper */}
      <div className="container flex flex-col md:flex-row w-full max-w-4xl backdrop-blur-lg bg-white/20 border border-white/10 shadow-2xl rounded-xl overflow-hidden mx-10">
        {/* Left Side - Illustration */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-white drop-shadow-lg animate-[pulse_2s_infinite]">
            Welcome Back!
          </h2>

          <img
            src={illustration}
            alt="Illustration"
            className="w-full max-w-xs md:max-w-sm h-auto"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 relative">
       

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="form-control">
              <label className="block mb-2">Email</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full text-[#14b6a7]"
                required
              />
            </div>
            <div className="form-control">
              <label className="block mb-2">Password</label>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full text-[#14b6a7]"
                required
              />
            </div>

            <div className="form-control mt-4">
              <input
                className="btn bg-[#14b6a7] w-full"
                type="submit"
                value="Login"
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
