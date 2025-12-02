import React from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";

function Skills() {
  const data = useLoaderData(); // all skills array
  console.log(data);

  return (
    <div className="min-h-screen w-11/12 mx-auto  py-28 px-6 bg-gray-100 ">

      {/* Page Title */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center text-pastecolor"
      >
        All Skills ( {data.length} )
      </motion.h1>

      {/* Skills Card Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((skill, i) => (
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
                <span className="text-yellow-400 font-semibold">
                  ★ {skill.rating}
                </span>
                <span className="text-teal-500 font-bold">
                  ${skill.price}
                </span>
              </div>

              {/* Button at bottom */}
              <div className="mt-auto">
                <button className="btnStyle">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
