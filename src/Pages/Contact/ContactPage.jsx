import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

const ContactPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const onSubmit = (data) => {
    if (!recaptchaToken) {
      Swal.fire({
        icon: "error",
        title: "Captcha Required",
        text: "Please complete the CAPTCHA!",
      });
      return;
    }

    // Here, you'd typically send the data to a backend or email API
    console.log("Form Data:", data);

    Swal.fire({
      icon: "success",
      title: "Message Sent",
      text: "We'll get back to you soon!",
    });

    reset();
    setRecaptchaToken(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center items-center"
        >
          <Player
            autoplay
            loop
            src="https://assets4.lottiefiles.com/packages/lf20_mjlh3hcy.json"
            style={{ height: "300px", width: "300px" }}
          />
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-semibold text-center text-indigo-600">
            Contact Us
          </h2>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            {...register("message", { required: true })}
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded"
            required
          />

          {/* ReCAPTCHA */}
          <div className="pt-2">
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace this with your real site key
              onChange={(token) => setRecaptchaToken(token)}
              theme="light"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Contact Info + Social */}
      <div className="mt-10 text-center space-y-4">
        <p className="text-gray-700">📧 support@meetzy.com</p>
        <p className="text-gray-700">📞 +880 123-456-789</p>
        <div className="flex justify-center gap-4 text-2xl text-indigo-600">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-10 w-full h-64">
        <iframe
          title="Meetzy Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8976788313695!2d90.39086121543299!3d23.750876484591845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b1b52d01cb%3A0xf588a65f2c3fded6!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1679619332213!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
