// TutorProfile.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaMapMarkerAlt, FaClock, FaHeart, FaShareAlt } from "react-icons/fa";
import { useLoaderData, useLocation, useParams } from "react-router";

const TutorProfile = () => {
  const pathname=useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { id } = useParams();
  const data = useLoaderData(); // array of all teachers
  const teacher = data.find(t => t.id === parseInt(id));

  if (!teacher) {
    return <p className="text-center py-20 text-red-500">Teacher not found</p>;
  }

  

  

  

  return (
    <section className="w-11/12 max-w-6xl mx-auto pb-10 pt-20">
      {/* COVER */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img
          src={teacher.cover}
          alt="cover"
          className="w-full h-44 object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="p-6 flex items-center gap-6">
            <img
              src={teacher.avatar}
              alt={teacher.name}
              className="w-28 h-28 rounded-full border-4 border-white shadow-md"
            />
            <div className="text-white">
              <h1 className="text-2xl font-bold">{teacher.name}</h1>
              <p className="text-sm opacity-90">{teacher.title}</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="font-medium">{teacher.rating}</span>
                  <span className="text-sm opacity-80">({teacher.reviewsCount})</span>
                </div>
                <div className="flex items-center gap-1 text-sm opacity-90">
                  <FaMapMarkerAlt />
                  <span>{teacher.location}</span>
                </div>
                <div className="flex items-center gap-1 text-sm opacity-90">
                  <FaClock />
                  <span>{teacher.availability.join(", ")}</span>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="ml-auto flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                
                className="bg-white/90 text-gray-800 px-4 py-2 rounded-full shadow-sm flex items-center gap-2"
              >
                <FaHeart className="text-red-500" /> Follow
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={() =>
                  navigator.share
                    ? navigator.share({ title: teacher.name, text: teacher.title })
                    : alert("Share this profile")
                }
                className="bg-white/90 text-gray-800 px-3 py-2 rounded-full shadow-sm flex items-center gap-2"
              >
                <FaShareAlt /> Share
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* LEFT: ABOUT & SKILLS */}
        <div className="lg:col-span-2 space-y-6">
          {/* ABOUT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">About</h2>
                <p className="text-gray-600">{teacher.about}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">${teacher.hourlyRate}/hr</p>
                <p className="text-sm text-gray-500">Session price</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-medium mb-3">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {teacher.skills.map((s, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 rounded-full bg-gray-100 text-sm flex items-center gap-2"
                  >
                    <span className="font-semibold">{s.name}</span>
                    <span className="text-xs text-gray-500">• {s.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-medium mb-3">Languages</h3>
              <div className="flex gap-2 flex-wrap">
                {teacher.languages.map((l, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-pastecolor/10 text-pastecolor text-sm"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* PORTFOLIO */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <div className="grid grid-cols-3 gap-3">
              {teacher.portfolio.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`portfolio-${idx}`}
                  className="w-full h-28 object-cover rounded-xl"
                />
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-500">
              More projects & recordings available upon request.
            </p>
          </motion.div>

          {/* REVIEWS */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <h3 className="text-lg font-semibold mb-4">Top Reviews</h3>
            <div className="space-y-4">
              {teacher.topReviews.map((r) => (
                <div key={r.id} className="flex gap-3 items-start">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm">{r.name}</h4>
                      <div className="flex items-center text-yellow-400 text-sm">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT: SIDEBAR ACTIONS */}
        <aside className="space-y-6">
          <motion.div
            className="bg-white rounded-2xl p-6 shadow flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Hourly Rate</p>
                <p className="text-2xl font-bold">${teacher.hourlyRate}</p>
                <p className="text-sm text-gray-500">per hour</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Response</p>
                <p className="text-sm font-medium">Usually within 24h</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                
                className="w-full bg-pastecolor text-white py-2 rounded-xl font-semibold"
              >
                Message
              </button>
              <button
              
                className="w-full border-2 border-pastecolor text-pastecolor py-2 rounded-xl font-semibold"
              >
                Book Session
              </button>
            </div>

            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-2">Availability</p>
              <div className="flex gap-2 flex-wrap">
                {teacher.availability.map((d, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-4 shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
          >
            <h4 className="text-sm font-medium mb-3">Stats</h4>
            <div className="flex justify-between text-sm text-gray-600">
              <div>
                <p className="font-semibold text-lg">{teacher.reviewsCount}</p>
                <p className="text-xs">Sessions</p>
              </div>
              <div>
                <p className="font-semibold text-lg">{teacher.rating}</p>
                <p className="text-xs">Avg. Rating</p>
              </div>
              <div>
                <p className="font-semibold text-lg">98%</p>
                <p className="text-xs">On-time</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-4 shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08 }}
          >
            <h4 className="text-sm font-medium mb-3">Contact</h4>
            <p className="text-sm text-gray-600">
              Email: <span className="text-gray-800 font-medium">{teacher.email || "example@example.com"}</span>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Phone: <span className="text-gray-800 font-medium">{teacher.phone || "+8801XXXXXXXXX"}</span>
            </p>
          </motion.div>
        </aside>
      </div>
    </section>
  );
};

export default TutorProfile;
