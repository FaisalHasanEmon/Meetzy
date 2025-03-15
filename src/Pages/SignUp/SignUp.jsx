

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

  const {createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();

  
  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        console.log("User Created:", loggedUser);

        updateUserProfile(data.name, data.photoURL)
        .then(() => {
            console.log("User profile info updated");

            const userInfo = {
                uid: loggedUser.uid, 
                name: data.name,
                email: data.email,
                photoURL: data.photoURL
            };

            axiosPublic.post('/users', userInfo) 
          
            .then(res => {
                if (res.data.insertedId) {
                    console.log("User added to the database");
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User Created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');
                }
            })
            .catch(error => console.log("Database Error:", error));

        })
        .catch(error => console.log("Profile Update Error:", error));
    })
    .catch(error => console.log("Create User Error:", error));
};


// const onSubmit = (data) => {
//     createUser(data.email, data.password)
//       .then((result) => {
//         // const loggedUser = result.user;
//         // console.log("User Created:");
  
//         updateUserProfile(data.name, data.photoURL)
//           .then(() => {
//             console.log("User profile info updated");
//             reset();
//             Swal.fire({
//               position: "top-end",
//               icon: "success",
//               title: "User Created Successfully",
//               showConfirmButton: false,
//               timer: 1500,
//             });
//             navigate("/");
//           })
//           .catch((error) => {
//             console.log("Profile Update Error:", error);
//             Swal.fire({
//               icon: "error",
//               title: "Oops...",
//               text: error.message,
//             });
//           });
//       })
//       .catch((error) => {
//         console.log("Create User Error:", error);
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: error.message,
//         });
//       });
//   };
  
  return (
    <div className="hero   card bg-base-100 shadow-2xl card-body ">
      <div className="hero-content flex-col md:flex-row-reverse gap-5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <Lottie
            animationData={signUpLottieData}
            style={{ width: "300px", height: "300px" }}
          ></Lottie>
        </div>
        <div className="  md:w-1/2 max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photoURL"
                name="photoURL"
                {...register("photoURL", { required: true })}
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-500">Photo URL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign up" />
               
            </div>
          </form>
          <p className="px-6 py-4"><small>If you have already an account ? <Link to ="/login">then login</Link></small></p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;



