import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div className="h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col justify-center items-center p-8 md:p-12 text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/path/to/your/pattern.svg')] opacity-10"></div>
            <div className="max-w-2xl mx-auto relative z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-900">
                    Welcome to <span className="text-blue-600">Meetzy</span>
                </h1>
                <p className="mt-5 text-xl font-semibold leading-relaxed text-blue-800">
                    Connect. Communicate. Collaborate.
                </p>
                <p className="mt-3 text-lg max-w-md mx-auto text-blue-700">
                    Meetzy offers <strong>seamless, high-quality video calls</strong> with friends,
                    family, and colleagues—anytime, anywhere.
                </p>
                <p className="mt-3 text-lg max-w-md mx-auto text-blue-700">
                    Enjoy <strong>HD video, crystal-clear audio, and instant connections</strong> like never before.
                </p>
                <div className="mt-4 animate-pulse">
                    <img
                        src="https://img.icons8.com/ios-filled/100/1e40af/video-call.png"
                        alt="Video Call Icon"
                        className="w-32 h-32 mx-auto mb-4"
                    />
                </div>
                <div className="mt-2 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to='/login' className="px-10 py-2 bg-blue-600 text-white rounded-lg text-xl font-semibold shadow-lg transform transition-all hover:bg-blue-700 hover:scale-105 duration-300">
                        Login
                    </Link>
                    <Link to='/register' className="px-10 py-2 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg text-xl font-semibold shadow-lg transform transition-all hover:bg-blue-600 hover:text-white hover:scale-105 duration-300">
                        Sign Up
                    </Link>
                </div>
            </div>
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-600 rounded-full opacity-50 animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 5 + 5}s`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default WelcomePage;