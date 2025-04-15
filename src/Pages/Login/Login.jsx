// import React, { useContext, useState } from "react";
// import illustration from "../../assets/illustration.png";
// import bgImage from "../../assets/backgroundddd.jpg";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import SocialLogin from "../../components/SocialLogin";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { FaStarAndCrescent } from "react-icons/fa";

// const Login = () => {
//   const { signIn, resetPassword } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [disabled, setDisabled] = useState(false);

//   const handleLogin = (event) => {
//     event.preventDefault();
//     setDisabled(true);
//     signIn(email, password)
//       .then(() => {
//         Swal.fire({
//           title: "User Login Successful!",
//           icon: "success",
//         });
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         Swal.fire({
//           title: "Login Failed",
//           text: error.message,
//           icon: "error",
//           confirmButtonText: "Try Again",
//         });
//       })
//       .finally(() => setDisabled(false));
//   };

//   const handleForgotPassword = () => {
//     if (!email) {
//       return Swal.fire("Oops!", "Please enter your email first", "warning");
//     }

//     resetPassword(email)
//       .then(() => {
//         Swal.fire(
//           "Password Reset Sent",
//           "Check your email to reset your password",
//           "success"
//         );
//       })
//       .catch((error) => {
//         Swal.fire("Error", error.message, "error");
//       });
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center bg-cover bg-center text-white"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Eid Mubarak Animation */}
//       <div className="absolute top-36 right-0 p-6 text-center text-xl text-[#14b6a7]">
//         <div className="mb-4">
//           <FaStarAndCrescent className="text-6xl animate-bounce ml-20" />
//         </div>
//         <p className="text-4xl font-extrabold text-[#14b6a7] tracking-wide">
//           Eid Mubarak!
//         </p>
//       </div>

//       {/* Login Card */}
//       <div className="container flex flex-col md:flex-row w-full max-w-4xl backdrop-blur-lg bg-white/20 border border-white/10 shadow-2xl rounded-xl overflow-hidden mx-10">
//         {/* Left: Illustration */}
//         <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-8">
//           <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-white drop-shadow-lg animate-pulse">
//             Welcome Back!
//           </h2>
//           <img
//             src={illustration}
//             alt="Illustration"
//             className="w-full max-w-xs md:max-w-sm h-auto"
//           />
//         </div>

//         {/* Right: Form */}
//         <div className="w-full md:w-1/2 p-6 md:p-8 relative">
//           <form onSubmit={handleLogin} className="space-y-4">
//             <div className="form-control">
//               <label className="block mb-2">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full text-[#14b6a7]"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-control">
//               <label className="block mb-2">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 className="input input-bordered w-full text-[#14b6a7]"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <p
//                 className="text-right text-sm text-blue-500 hover:underline cursor-pointer"
//                 onClick={handleForgotPassword}
//               >
//                 Forgot password?
//               </p>
//             </div>

//             <div className="form-control mt-4">
//               <input
//                 className="btn bg-[#14b6a7] w-full"
//                 type="submit"
//                 value={disabled ? "Logging in..." : "Login"}
//                 disabled={disabled}
//               />
//             </div>
//           </form>

//           <p className="py-4 text-[#14b6a7] text-center">
//             <small>
//               New here?{" "}
//               <Link className="text-red-600 underline" to="/signup">
//                 Create an account
//               </Link>
//             </small>
//           </p>

//           <SocialLogin />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;







// import React, { useContext, useState } from "react";
// import illustration from "../../assets/illustration.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import SocialLogin from "../../components/SocialLogin";
// import { AuthContext } from "../../Provider/AuthProvider";
// import bgImage from "../../assets/video-call.jpg";
// const Login = () => {
//   const { signIn, resetPassword } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [disabled, setDisabled] = useState(false);

//   const handleLogin = (event) => {
//     event.preventDefault();
//     setDisabled(true);
//     signIn(email, password)
//       .then(() => {
//         Swal.fire({
//           title: "User Login Successful!",
//           icon: "success",
//         });
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         Swal.fire({
//           title: "Login Failed",
//           text: error.message,
//           icon: "error",
//           confirmButtonText: "Try Again",
//         });
//       })
//       .finally(() => setDisabled(false));
//   };

//   const handleForgotPassword = () => {
//     if (!email) {
//       return Swal.fire("Oops!", "Please enter your email first", "warning");
//     }

//     resetPassword(email)
//       .then(() => {
//         Swal.fire(
//           "Password Reset Sent",
//           "Check your email to reset your password",
//           "success"
//         );
//       })
//       .catch((error) => {
//         Swal.fire("Error", error.message, "error");
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white relative overflow-hidden">
//     {/* Background Effects */}
//     <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22 fill=%22rgba(255,255,255,0.1)%22/%3E%3C/svg%3E')] opacity-20"></div>
//     <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
//     <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
  
//     {/* Login Card */}
//     <div className="container flex flex-col md:flex-row w-full max-w-4xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-2xl overflow-hidden mx-4 md:mx-10">
//       {/* Left: Illustration */}
//       <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-b from-white/10 to-transparent">
//         <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100 drop-shadow-lg">
//           Connect Seamlessly!
//         </h2>
//         <img
//           src={illustration}
//           alt="Video Call Illustration"
//           className="w-full max-w-xs md:max-w-sm h-auto"
//         />
//         <p className="text-sm text-white/70 mt-4">
//           Join meetings, collaborate, and stay connected.
//         </p>
//       </div>
  
//       {/* Right: Form */}
//       <div className="w-full md:w-1/2 p-6 md:p-8">
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div className="form-control">
//             <label className="block mb-2 text-white/90">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-blue-400"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
  
//           <div className="form-control">
//             <label className="block mb-2 text-white/90">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-blue-400"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <p
//               className="text-right text-sm text-blue-300 hover:underline cursor-pointer mt-2"
//               onClick={handleForgotPassword}
//             >
//               Forgot password?
//             </p>
//           </div>
  
//           <div className="form-control mt-6">
//             <input
//               className="btn bg-blue-500 hover:bg-blue-600 text-white w-full border-none"
//               type="submit"
//               value={disabled ? "Logging in..." : "Login"}
//               disabled={disabled}
//             />
//           </div>
//         </form>
  
//         <p className="py-4 text-white/80 text-center">
//           <small>
//             New here?{" "}
//             <Link className="text-blue-300 underline" to="/signup">
//               Create an account
//             </Link>
//           </small>
//         </p>
  
//         <SocialLogin />
//       </div>
//     </div>
//   </div>
  
//   );
// };

// export default Login;


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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-30 animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-30 animate-pulse z-0"></div>

      {/* Login Card */}
      <div className="relative z-10 container flex flex-col md:flex-row w-full max-w-4xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-2xl overflow-hidden mx-4 md:mx-10">
        {/* Left: Illustration */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-b from-white/10 to-transparent">
          <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100 drop-shadow-lg">
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

        {/* Right: Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="form-control">
              <label className="block mb-2 text-white/90">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-blue-400"
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
                className="input input-bordered w-full bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p
                className="text-right text-sm text-blue-300 hover:underline cursor-pointer mt-2"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </p>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn bg-blue-500 hover:bg-blue-600 text-white w-full border-none"
                type="submit"
                value={disabled ? "Logging in..." : "Login"}
                disabled={disabled}
              />
            </div>
          </form>

          <p className="py-4 text-white/80 text-center">
            <small>
              New here?{" "}
              <Link className="text-blue-300 underline" to="/signup">
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
