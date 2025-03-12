
import Lottie from 'lottie-react';
import React, { useContext, useEffect, useState, useRef } from 'react';
import registerLottieData from '../../assets/Animation - 1737469739842.json';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import SocialLogin from '../../components/SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider';



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
            .then((result) => {
                Swal.fire({
                    title: 'User Login Successful!',
                    icon: 'success',
                    showClass: { popup: 'animate__animated animate__fadeInDown' },
                    hideClass: { popup: 'animate__animated animate__fadeOutUp' },
                });
                navigate("/");
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Login Failed',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again',
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
      
        <div className="hero min-h-screen card bg-base-100 shadow-2xl card-body flex flex-col items-center">

    
        
        <div className="hero-content flex-col md:flex-row-reverse w-full max-w-4xl">
            <div className="text-center md:w-1/2 lg:text-left">
                <Lottie animationData={registerLottieData} />
            </div>
            <div className="md:w-1/2 max-w-sm">
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input ref={passwordRef} type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label"><a href="#" className="label-text-alt link link-hover">Forgot password?</a></label>
                    </div>
                    <div className="form-control">
                        <label className="label"><LoadCanvasTemplate /></label>
                        <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the text above" className="input input-bordered" required />
                        <button className="btn btn-outline btn-xs mt-3">Validate</button>
                    </div>
                    <div className="form-control mt-6">
                        <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p className="py-4 text-3xl">
                    <small>New here? <Link className='text-pink-700' to="/signup">Create an account</Link></small>
                </p>
                <SocialLogin />
            </div>
        </div>
    </div>
     
      
    );
};

export default Login;



