import React from "react";
import { FaUsers, FaBook, FaChalkboardTeacher, FaAward } from "react-icons/fa";

const stats = [
  { id: 1, icon: <FaUsers className="text-4xl text-pastecolor" />, value: "10k+", label: "Learners" },
  { id: 2, icon: <FaBook className="text-4xl text-pastecolor" />, value: "500+", label: "Courses" },
  { id: 3, icon: <FaChalkboardTeacher className="text-4xl text-pastecolor" />, value: "50+", label: "Instructors" },
  { id: 4, icon: <FaAward className="text-4xl text-pastecolor" />, value: "1k+", label: "Projects Completed" },
];

const Achievements = () => {
  return (
    <section className="py-16 ">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-5xl font-bold text-pastecolor mb-16">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              {stat.icon}
              <h3 className="text-2xl font-bold text-gray-800 mt-4">{stat.value}</h3>
              <p className="text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
