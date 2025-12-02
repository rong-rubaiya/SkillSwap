// PopularSkilled.jsx
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router";

const PopularSkilled = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const top5 = data.sort((a, b) => b.rating - a.rating).slice(0, 5);
        setSkills(top5);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div 
    
    className="py-10 space-y-8 lg:space-y-14 w-11/12 mx-auto ">
      <motion.h2 
      initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      className="text-5xl font-bold text-center  text-pastecolor">
        Popular Skills
      </motion.h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill,i) => (
         <motion.div
                     key={skill.skillId}
                     initial={{ y: -50, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{
                       duration: 0.8,
                       delay: i * 0.15,
                       ease: "easeOut",
                     }}
  className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full"
>
  {/* Image */}
  <img
    src={skill.image}
    alt={skill.skillName}
    className="w-full h-32 object-cover"
  />

  {/* Content */}
  <div className="p-4 flex flex-col flex-1">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      {skill.skillName}
    </h3>

    <div className="flex justify-between items-center mb-4">
      <span className="text-yellow-400 font-semibold">★ {skill.rating}</span>
      <span className="text-teal-500 font-bold">${skill.price}</span>
    </div>

    {/* Button */}
    <div className="mt-auto">
      <button className="btnStyle">View Details</button>
    </div>
  </div>
</motion.div>

        ))}

        
      </div>
      {/* <div className="w-full flex  items-center ">
  <Link to="/skills">
    <button className="btnStyle hover:scale-110 mx-8">
      View All Skills
    </button>
  </Link>
</div> */}
    </div>
    
  );
};

export default PopularSkilled;
