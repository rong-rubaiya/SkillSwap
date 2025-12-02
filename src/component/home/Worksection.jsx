import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaHandshake, FaChalkboardTeacher } from "react-icons/fa";

function Worksection() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Browse Skills",
      desc: "Explore a wide range of professional skills taught by experts.",
    },
    {
      icon: <FaHandshake />,
      title: "Choose Your Expert",
      desc: "Compare ratings, prices, and experience to find the right match.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Start Learning",
      desc: "Book a session and begin your skill-building journey instantly.",
    },
  ];

  return (
    <div className="py-16 px-6">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-center text-pastecolor"
      >
        How It Works
      </motion.h2>

      {/* Steps Grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border-t-4"
            style={{
              borderColor: "#1DAAA3", // your pastecolor
            }}
          >
            <div className="text-5xl text-pastecolor flex justify-center mb-4">
              {step.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>

            <p className="text-gray-600 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Worksection;
