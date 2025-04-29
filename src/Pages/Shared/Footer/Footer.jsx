import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";
import logoe from "../../../assets/logoe.png"
function Footer() {
  return (

<motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <footer className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-700 text-white p">
        <aside className="flex flex-col items-center text-center">
<img src={logoe} alt="" />
          
        </aside>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8  lg:text-center container mx-auto sm:p-10">
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h6 className="footer-title">Services</h6>
            {["Branding", "Design", "Marketing", "Advertisement"].map((item, index) => (
              <motion.a
                key={index}
                className="block link link-hover hover:text-gray-300 transition-all"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h6 className="footer-title">Company</h6>
            {["About us", "Contact", "Jobs", "Press kit"].map((item, index) => (
              <motion.a
                key={index}
                className="block link link-hover hover:text-gray-300 transition-all"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h6 className="footer-title">Legal</h6>
            {["Terms of use", "Privacy policy", "Cookie policy"].map((item, index) => (
              <motion.a
                key={index}
                className="block link link-hover hover:text-gray-300 transition-all"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>
        </div>
            
      <motion.div
        className="text-center py-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <p>&copy; {new Date().getFullYear()} Meetzy. All rights reserved.</p>
      </motion.div>
      </footer>


    </motion.div>

  );
}

export default Footer;
