// TutorProfile.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaMapMarkerAlt, FaClock, FaHeart, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

/**
 * TutorProfile component
 * - Replace `tutor` object with props or API response as needed.
 * - Provide onBook/onMessage callbacks via props if you want custom behavior.
 */
const TutorProfile = ({ tutorData, onBook, onMessage, onFollow }) => {
  // fallback/mock data if tutorData not provided
  const tutor = tutorData ?? {
    id: 1,
    name: "Ayaan Khan",
    title: "Guitar Instructor & Music Producer",
    avatar: "https://i.pravatar.cc/150?img=12",
    cover: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    rating: 4.8,
    reviewsCount: 124,
    location: "Dhaka, Bangladesh",
    languages: ["English", "Bengali"],
    about:
      "Experienced guitar instructor with 6+ years teaching beginners and intermediates. I focus on practical songs, music theory basics, and performance confidence. Online & in-person sessions available.",
    skills: [
      { name: "Acoustic Guitar", level: "Expert" },
      { name: "Music Theory", level: "Advanced" },
      { name: "Songwriting", level: "Intermediate" },
    ],
    hourlyRate: 12, // USD per hour
    availability: ["Mon", "Wed", "Fri"],
    portfolio: [
      "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg",
      "https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg",
      "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg",
    ],
    topReviews: [
      {
        id: 1,
        name: "Sara",
        avatar: "https://i.pravatar.cc/150?img=32",
        rating: 5,
        text: "Ayaan is patient and explains things clearly. I improved so fast!",
      },
      {
        id: 2,
        name: "Tom",
        avatar: "https://i.pravatar.cc/150?img=45",
        rating: 5,
        text: "Great lessons — practical and fun. Highly recommended.",
      },
    ],
  };

  const handleBook = () => {
    if (onBook) return onBook(tutor);
    window.location.href = "/login"; // default action (go to login)
  };

  const handleMessage = () => {
    if (onMessage) return onMessage(tutor);
    window.location.href = "/login"; // default action
  };

  const handleFollow = () => {
    if (onFollow) return onFollow(tutor);
    alert("Followed " + tutor.name);
  };

  return (
    <section className="w-11/12 max-w-6xl mx-auto py-12">
      {/* COVER */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img
          src={tutor.cover}
          alt="cover"
          className="w-full h-44 object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="p-6 flex items-center gap-6">
            <img
              src={tutor.avatar}
              alt={tutor.name}
              className="w-28 h-28 rounded-full border-4 border-white shadow-md"
            />
            <div className="text-white">
              <h1 className="text-2xl font-bold">{tutor.name}</h1>
              <p className="text-sm opacity-90">{tutor.title}</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="font-medium">{tutor.rating}</span>
                  <span className="text-sm opacity-80">({tutor.reviewsCount})</span>
                </div>
                <div className="flex items-center gap-1 text-sm opacity-90">
                  <FaMapMarkerAlt />
                  <span>{tutor.location}</span>
                </div>
                <div className="flex items-center gap-1 text-sm opacity-90">
                  <FaClock />
                  <span>{tutor.availability.join(", ")}</span>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="ml-auto flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={handleFollow}
                className="bg-white/90 text-gray-800 px-4 py-2 rounded-full shadow-sm flex items-center gap-2"
              >
                <FaHeart className="text-red-500" /> Follow
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={() => navigator.share ? navigator.share({ title: tutor.name, text: tutor.title }) : alert('Share this profile')}
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
                <p className="text-gray-600">{tutor.about}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">${tutor.hourlyRate}/hr</p>
                <p className="text-sm text-gray-500">Session price</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-medium mb-3">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {tutor.skills.map((s, i) => (
                  <div key={i} className="px-3 py-2 rounded-full bg-gray-100 text-sm flex items-center gap-2">
                    <span className="font-semibold">{s.name}</span>
                    <span className="text-xs text-gray-500">• {s.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-medium mb-3">Languages</h3>
              <div className="flex gap-2 flex-wrap">
                {tutor.languages.map((l, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-pastecolor/10 text-pastecolor text-sm">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* PORTFOLIO */}
          <motion.div className="bg-white rounded-2xl p-6 shadow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <div className="grid grid-cols-3 gap-3">
              {tutor.portfolio.map((img, idx) => (
                <img key={idx} src={img} alt={`portfolio-${idx}`} className="w-full h-28 object-cover rounded-xl" />
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-500">More projects & recordings available upon request.</p>
          </motion.div>

          {/* REVIEWS */}
          <motion.div className="bg-white rounded-2xl p-6 shadow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            <h3 className="text-lg font-semibold mb-4">Top Reviews</h3>
            <div className="space-y-4">
              {tutor.topReviews.map((r) => (
                <div key={r.id} className="flex gap-3 items-start">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm">{r.name}</h4>
                      <div className="flex items-center text-yellow-400 text-sm">
                        {Array.from({ length: r.rating }).map((_, i) => <FaStar key={i} />)}
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
          <motion.div className="bg-white rounded-2xl p-6 shadow flex flex-col gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Hourly Rate</p>
                <p className="text-2xl font-bold">${tutor.hourlyRate}</p>
                <p className="text-sm text-gray-500">per hour</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Response</p>
                <p className="text-sm font-medium">Usually within 24h</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button onClick={handleMessage} className="w-full bg-pastecolor text-white py-2 rounded-xl font-semibold">Message</button>
              <button onClick={handleBook} className="w-full border-2 border-pastecolor text-pastecolor py-2 rounded-xl font-semibold">Book Session</button>
            </div>

            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-2">Availability</p>
              <div className="flex gap-2 flex-wrap">
                {tutor.availability.map((d, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm">{d}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white rounded-2xl p-4 shadow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}>
            <h4 className="text-sm font-medium mb-3">Stats</h4>
            <div className="flex justify-between text-sm text-gray-600">
              <div>
                <p className="font-semibold text-lg">124</p>
                <p className="text-xs">Sessions</p>
              </div>
              <div>
                <p className="font-semibold text-lg">4.8</p>
                <p className="text-xs">Avg. Rating</p>
              </div>
              <div>
                <p className="font-semibold text-lg">98%</p>
                <p className="text-xs">On-time</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white rounded-2xl p-4 shadow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 }}>
            <h4 className="text-sm font-medium mb-3">Contact</h4>
            <p className="text-sm text-gray-600">Email: <span className="text-gray-800 font-medium">ayaan@example.com</span></p>
            <p className="text-sm text-gray-600 mt-1">Phone: <span className="text-gray-800 font-medium">+8801XXXXXXXXX</span></p>
          </motion.div>
        </aside>
      </div>
    </section>
  );
};

export default TutorProfile;
