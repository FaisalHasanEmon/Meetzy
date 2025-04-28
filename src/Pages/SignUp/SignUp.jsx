import Lottie from "lottie-react";
import React, { useContext } from "react";
import signUpLottieData from "../../assets/Animation - 1733898179407 (1).json";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/UseAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(data.name, data.photoURL).then(() => {
          const userInfo = {
            uid: loggedUser.uid,
            name: data.name,
            email: data.email,
            photoURL: data.photoURL,
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        });
      })
      .catch((error) => console.log("Create User Error:", error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="flex flex-col md:flex-row items-center w-full overflow-hidden">
      
        <div className="w-full md:w-1/2 text-white p-8 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Join Us Today</h1>
          <p className="text-lg text-center mb-6">
            Sign up and start managing your tasks efficiently with real-time collaboration!
          </p>
          <div className="w-64 h-64">
            <Lottie animationData={signUpLottieData} loop={true} />
          </div>
          <p className="mt-6 text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-200 font-semibold underline">
              Sign in here
            </Link>
          </p>

          
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Why Choose Our Video Calling App?</h2>
            <ul className="list-disc list-inside text-left">
              <li className="mb-2">High-quality video and audio calls</li>
              <li className="mb-2">Real-time screen sharing for collaboration</li>
              <li className="mb-2">Secure and encrypted communication</li>
              <li className="mb-2">Easy scheduling and calendar integration</li>
              <li className="mb-2">Cross-platform compatibility (Desktop, Mobile, Tablet)</li>
            </ul>
          </div>
        </div>

       
        <div className="w-full md:w-1/2 bg-white p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Create Account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Full Name"
              />
              {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Profile Picture URL</label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Photo URL"
              />
              {errors.photoURL && <span className="text-red-500 text-sm">Photo URL is required</span>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a secure password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm">Password must be at least 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500 text-sm">Password cannot exceed 20 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 text-sm">
                  Password must include uppercase, lowercase, number & special character.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white p-3 rounded-lg font-bold hover:bg-blue-800 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-700">Or sign up with</p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;