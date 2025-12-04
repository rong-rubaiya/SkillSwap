import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";

function Skills() {
  const originalData = useLoaderData(); 
  const [skills, setSkills] = useState(originalData);

  const [sortOrder, setSortOrder] = useState(""); 
  const [ratingFilter, setRatingFilter] = useState(""); 

  
  useEffect(() => {
    let sorted = [...originalData];

    if (sortOrder === "asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      sorted.sort((a, b) => b.price - a.price);
    }

    // Apply rating filter
    if (ratingFilter) {
      sorted = sorted.filter((item) => item.rating >= Number(ratingFilter));
    }

    setSkills(sorted);
  }, [sortOrder, ratingFilter, originalData]);

  return (
    <div className="min-h-screen w-11/12 mx-auto py-28 px-6 bg-gray-100 ">

      {/* Page Title */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center text-pastecolor"
      >
        All Skills ( {skills.length} )
      </motion.h1>

      {/* Sorting & Filtering */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">

        {/* Sort */}
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-3 rounded-xl bg-white shadow-sm"
        >
          <option value="">Sort By Price</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>

        {/* Filter by Rating */}
        <select
          onChange={(e) => setRatingFilter(e.target.value)}
          className="border p-3 rounded-xl bg-white shadow-sm"
        >
          <option value="">Filter Rating</option>
          <option value="5">5 ★</option>
          <option value="4">4 ★ & Above</option>
          <option value="3">3 ★ & Above</option>
        </select>
      </div>

      {/* Skills Card Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills?.map((skill, i) => (
          <motion.div
            key={skill.skillId}
           initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
  animate={{ scale: 1, opacity: 1, rotate: 0 }}
  transition={{
    duration: 0.6,
    delay: i * 0.1,
    ease: "backOut", // gives a smooth bounce effect
  }}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl flex flex-col h-full"
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

              {/* Button */}
              <div className="mt-auto">
                <Link to={`/skill-details/${skill.skillId}`}>
                  <button className="btnStyle">View Details</button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
