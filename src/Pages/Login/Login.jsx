
import React, { useContext, useState } from "react";
import illustration from "../../assets/illustration.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import bgImage from "../../assets/video-call.jpg";

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
      className="min-h-screen flex items-center justify-center text-white relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
    
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"></div>

     
      <div className="relative z-10 container flex flex-col md:flex-row w-full max-w-4xl backdrop-blur-md bg-gradient-to-br from-blue-800/50 to-teal-700/50 border border-white/20 shadow-2xl rounded-2xl overflow-hidden mx-4 md:mx-10">
       
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-b from-teal-600/30 to-transparent">
          <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200 drop-shadow-lg">
            Connect Seamlessly!
          </h2>
          <img
            src={illustration}
            alt="Video Call Illustration"
            className="w-full max-w-xs md:max-w-sm h-auto"
          />
          <p className="text-sm text-white/70 mt-4">
            Join meetings, collaborate, and stay connected.
          </p>
        </div>

       
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="form-control">
              <label className="block mb-2 text-white/90">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-teal-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="block mb-2 text-white/90">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-teal-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p
                className="text-right text-sm text-teal-200 hover:underline cursor-pointer mt-2"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </p>
            </div>

            <div className="form-control mt-6">
              <input
                className={`btn w-full text-white border-none ${
                  disabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
                }`}
                type="submit"
                value={disabled ? "Logging in..." : "Login"}
                disabled={disabled}
              />
            </div>
          </form>

          <p className="py-4 text-white/80 text-center">
            <small>
              New here?{" "}
              <Link className="text-teal-300 underline" to="/signup">
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
