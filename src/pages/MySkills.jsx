import React from "react";
import { motion, useAnimation } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  {
    name: "Guitar Lessons",
    type: "Teaching",
    level: 85,
    description:
      "I teach beginner to intermediate guitar lessons in person or online.",
    color: "#FBBF24", // Tailwind yellow-400
  },
  {
    name: "JavaScript",
    type: "Trading",
    level: 90,
    description:
      "I help others improve their JavaScript skills through pair programming.",
    color: "#3B82F6", // Tailwind blue-500
  },
  {
    name: "Yoga Training",
    type: "Teaching",
    level: 70,
    description:
      "Guided yoga sessions for stress relief and flexibility improvement.",
    color: "#22C55E", // Tailwind green-400
  },
  {
    name: "React Development",
    type: "Learning",
    level: 80,
    description: "Currently improving my React skills through projects.",
    color: "#8B5CF6", // Tailwind purple-500
  },
  {
    name: "Language Exchange",
    type: "Trading",
    level: 75,
    description: "I exchange English and Spanish skills with others.",
    color: "#EC4899", // Tailwind pink-500
  },
];


const MySkills = () => {
  return (
    <div className="w-11/12 mx-auto py-28 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-pastecolor mb-12">
        My Skills
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform relative overflow-hidden flex flex-col items-center"
          >
            {/* Circular Progress */}
            <div className="w-32 h-32 mb-4">
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  pathColor: skill.color,
                  textColor: "#1DAAA3",
                  trailColor: "#e5e7eb",
                  textSize: "18px",
                  pathTransitionDuration: 1.5,
                })}
              />
            </div>

            {/* Skill Info */}
            <h3 className="text-xl font-bold mb-1">{skill.name}</h3>
            <span
              className="text-sm text-white font-semibold px-3 py-1 rounded-full mb-2"
              style={{ backgroundColor: skill.color }}
            >
              {skill.type}
            </span>
            <p className="text-gray-600 text-sm text-center">{skill.description}</p>

            {/* Hover Actions */}
            
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
