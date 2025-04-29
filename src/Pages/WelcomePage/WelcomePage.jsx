import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  
  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 },
  };

 
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

 
  const features = [
    {
      icon: 'https://img.icons8.com/ios-filled/100/ffffff/video-call.png',
      title: 'HD Video Calls',
      description: 'Experience crystal-clear video with low latency.',
    },
    {
      icon: 'https://img.icons8.com/ios-filled/100/ffffff/share.png',
      title: 'Screen Sharing',
      description: 'Share your screen effortlessly for presentations.',
    },
    {
      icon: 'https://img.icons8.com/ios-filled/100/ffffff/lock.png',
      title: 'Secure Meetings',
      description: 'End-to-end encryption for safe communication.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
     
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Connect Seamlessly with <span className="text-blue-200">Meetzy</span>
          </motion.h1>
          <motion.p
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl mb-8"
          >
            High-quality video calls, anytime, anywhere.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <Link to="/login">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-lg"
                aria-label="Log in to Meetzy"
              >
                Login
              </motion.button>
            </Link>
            <Link to="/signup">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold"
                aria-label="Sign up for Meetzy"
              >
                Sign Up
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

     
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Meetzy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
              >
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            variants={heroVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Meeting?
          </motion.h2>
          <motion.p
            variants={heroVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg mb-8"
          >
            Join Meetzy today and experience seamless collaboration.
          </motion.p>
          <Link to="/signup">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-lg"
              aria-label="Get started with Meetzy"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
