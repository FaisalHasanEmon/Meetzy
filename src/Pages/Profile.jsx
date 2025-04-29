import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);

  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  
  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-2xl"
      >
        
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 sm:p-6 text-white text-center relative">
          <img
            className="w-24 sm:w-32 h-24 sm:h-32 rounded-full mx-auto border-4 border-white shadow-xl"
            src={user?.photoURL || 'https://i.pravatar.cc/300?u=default'}
            alt={`Profile picture of ${user?.displayName || 'Guest User'}`}
          />
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 sm:mt-4">
            Welcome to Seamless Video Calls
          </h2>
          <p className="mt-1 sm:mt-2 text-base sm:text-lg">Hello, {user?.displayName || 'Guest User'}</p>
        </div>

       
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 text-gray-700">
            <div>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Email:</span> {user?.email || 'Not Available'}
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Location:</span> Dhaka, Bangladesh
              </p>
            </div>
            <div>
              <p className="text-sm sm:text-base">
                <span className="font-semibold">Role:</span> Visitor
              </p>
            </div>
          </div>

         
          <div className="flex justify-around text-center mt-4 sm:mt-6">
            <motion.div custom={0} variants={statVariants} initial="hidden" animate="visible">
              <p className="text-lg sm:text-xl font-bold text-indigo-600">56</p>
              <p className="text-xs sm:text-sm text-gray-500">Calls Made</p>
            </motion.div>
            <motion.div custom={1} variants={statVariants} initial="hidden" animate="visible">
              <p className="text-lg sm:text-xl font-bold text-indigo-600">18</p>
              <p className="text-xs sm:text-sm text-gray-500">Friends</p>
            </motion.div>
            <motion.div custom={2} variants={statVariants} initial="hidden" animate="visible">
              <p className="text-lg sm:text-xl font-bold text-indigo-600">4.9⭐</p>
              <p className="text-xs sm:text-sm text-gray-500">Rating</p>
            </motion.div>
          </div>

         
          <div className="flex justify-center mt-4 sm:mt-6">
            <button
              className="px-4 sm:px-6 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-100 transition duration-300 text-sm sm:text-base"
              aria-label="Invite a friend"
            >
              Invite Friend
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;