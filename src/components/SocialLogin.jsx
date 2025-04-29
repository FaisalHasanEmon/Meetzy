

import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import useAxiosPublic from './../hooks/UseAxiosPublic';

const SocialLogin = () => {
    const { googleSignIn, facebookSignIn, githubSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div>
                <button
                    onClick={handleGoogleSignIn}
                    type="button"
                    className="w-full border py-3 rounded-lg flex items-center justify-center mb-2" // Add margin bottom
                >
                    <img
                        src="https://img.icons8.com/color/20/000000/google-logo.png"
                        alt="Google"
                        className="mr-2"
                    />
                    Login with Google
                </button>
                <button
                    onClick={handleFacebookSignIn}
                    type="button"
                    className="w-full border py-3 rounded-lg flex items-center justify-center mb-2"
                >
                    <FaFacebook className="mr-2 text-blue-600" />
                    Login with Facebook
                </button>
                <button
                    onClick={handleGithubSignIn}
                    type="button"
                    className="w-full border py-3 rounded-lg flex items-center justify-center"
                >
                    <FaGithub className="mr-2" />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;