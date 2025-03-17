import React, { useContext, useEffect, useState, useRef } from "react";
import illustration from "../../assets/illustration.png";
import bgImage from "../../assets/background.jpg";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

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
        navigate("/");
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

  const handleValidateCaptcha = (e) => {
    if (validateCaptcha(e.target.value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mx-4">
        {/* Left Side - Illustration */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white p-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4">
            Welcome Back!
          </h2>
          <img
            src={illustration}
            alt="Illustration"
            className="w-full max-w-xs md:max-w-sm h-auto"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="form-control">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="block text-gray-700">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                placeholder="Type the text above"
                className="input input-bordered w-full"
                required
              />
              <button className="btn btn-outline btn-xs mt-2">Validate</button>
            </div>
            <div className="form-control mt-4">
              <input
                disabled={disabled}
                className="btn btn-primary w-full"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="py-4 text-gray-700 text-center">
            <small>
              New here?{" "}
              <Link className="text-blue-600" to="/signup">
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