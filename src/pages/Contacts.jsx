import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const contactMethods = [
  {
    id: 1,
    title: 'Email',
    info: 'hello@skillswap.com',
    icon: '📧'
  },
  {
    id: 2,
    title: 'Phone',
    info: '+880 1234 5678',
    icon: '📞'
  },
  {
    id: 3,
    title: 'Location',
    info: 'Dhaka, Bangladesh',
    icon: '📍'
  }
];

const socialLinks = [
  { id: 1, icon: <FaFacebookF />, link: '#' },
  { id: 2, icon: <FaTwitter />, link: '#' },
  { id: 3, icon: <FaLinkedinIn />, link: '#' },
  { id: 4, icon: <FaInstagram />, link: '#' }
];

const Contacts = () => {
  return (
    <section className="relative bg-gray-50 py-28 px-5 md:px-20 overflow-hidden">
      {/* Animated floating shapes */}
      <motion.div
        className="absolute top-10 left-0 w-32 h-32 bg-pastecolor/20 rounded-full blur-3xl animate-pulse"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-0 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl animate-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Title */}
      <h2 className="text-4xl font-bold text-pastecolor mb-12 text-center">Contact Us</h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left Side: Contact Cards */}
        <div className="flex-1 flex flex-col gap-8">
          {contactMethods.map((method) => (
            <motion.div
              key={method.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center text-center cursor-pointer transition"
            >
              <div className="text-5xl mb-3">{method.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{method.title}</h3>
              <p className="text-gray-600">{method.info}</p>
            </motion.div>
          ))}

          {/* Social Media */}
          <div className="flex justify-center md:justify-start gap-6 mt-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-pastecolor text-2xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1  h-3/4 bg-white rounded-2xl shadow-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-pastecolor mb-6">Send Us a Message</h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pastecolor"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pastecolor"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pastecolor"
            ></textarea>
            <button className="btnStyle">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contacts;
