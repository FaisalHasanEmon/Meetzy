

import React from 'react';
import { motion } from 'framer-motion';

const WhyMeetzy = () => {
  return (
    <div className="bg-white p-6 font-sans">
      <div className="max-w-5xl mx-auto mt-20 space-y-20">
    
        <section>
          <motion.div
            className="flex flex-col sm:flex-row gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full sm:w-1/2 flex justify-center">
              <img 
                src="https://sylaps.com/assets/img/thumbs/safety/secure_enviroment.svg" 
                alt="Secure environment illustration"
                className="w-80 h-auto"
              />
            </div>
            
            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-5">
                Why Choose Meetzy?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Meetzy offers a reliable, high-quality, and secure video communication platform designed 
                for seamless interactions with your team, clients, or friends. Experience clear audio, video, 
                and the convenience of staying connected anytime.
              </p>
            </div>
          </motion.div>
        </section>

        <section>
          <motion.div
            className="flex flex-col sm:flex-row gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-5">
                High-Quality Video Calls
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Meetzy supports high-definition video calls, ensuring a crisp and smooth experience 
                for all your meetings and personal chats. Stay connected in the best quality, every time.
              </p>
            </div>
            
            <div className="w-full sm:w-1/2">
              <div className="w-full h-72 sm:h-80 rounded-lg overflow-hidden">
                <motion.img 
                  src="https://www.gstatic.com/meet/premium_carousel_02_174e55774263506d1280ce6552233189.gif" 
                  alt="High-quality video call illustration"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        <section>
          <motion.div
            className="flex flex-col sm:flex-row gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="w-full sm:w-1/2 order-2 sm:order-1">
              <h2 className="text-3xl font-semibold text-gray-800 mb-5">
                Unlimited Group Calls
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Enjoy unlimited group video calls without worrying about time limits. Meetzy is optimized for 
                smooth multi-participant meetings that let you connect with large teams and groups effortlessly.
              </p>
            </div>
            
            <div className="w-full sm:w-1/2 order-1 sm:order-2">
              <div className="w-full h-72 sm:h-80 rounded-lg overflow-hidden">
                <motion.img 
                  src="https://www.gstatic.com/meet/premium_carousel_03_4f42ed34b9d0637ce38be87ecd8d1ca0.gif" 
                  alt="Group call illustration"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        <section>
          <motion.div
            className="flex flex-col sm:flex-row gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-5">
                Real-time Collaboration
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Meetzy offers real-time screen sharing and collaborative tools to help you work together seamlessly. 
                Share presentations, documents, and collaborate live with your team members.
              </p>
            </div>
            
            <div className="w-full sm:w-1/2">
              <div className="w-full h-72 sm:h-80 rounded-lg overflow-hidden">
                <motion.img 
                  src="https://www.gstatic.com/meet/premium_carousel_04_9659d3a952a74b27223836d673fe391f.gif" 
                  alt="Real-time collaboration illustration"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default WhyMeetzy;
