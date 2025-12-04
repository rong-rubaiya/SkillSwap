import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { useLocation } from "react-router";

const initialRequests = [
  { id: 1, skill: "Piano Lessons", level: "Beginner", status: "Pending", color: "#FBBF24" },
  { id: 2, skill: "Python Programming", level: "Intermediate", status: "Pending", color: "#3B82F6" },
  { id: 3, skill: "French Language", level: "Beginner", status: "Pending", color: "#EC4899" },
];

const MyReq = () => {
  const [requests, setRequests] = useState(initialRequests);
  const pathname=useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1DAAA3",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setRequests(requests.filter((req) => req.id !== id));
        Swal.fire("Deleted!", "Your request has been deleted.", "success");
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto py-28 px-6 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-pastecolor mb-12">
        My Requests
      </h2>

      {requests.length === 0 ? (
        <p className="text-center text-gray-500">No requests found.</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requests.map((req, index) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative bg-gradient-to-r from-white to-gray-100 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform border-t-4 border-[${req.color}]"
            >
              {/* Status Badge */}
              <span
                className={`absolute top-4 left-4 px-3 py-1 text-sm rounded-full text-white font-semibold`}
                style={{
                  backgroundColor: req.status === "Pending" ? "#F97316" : "#10B981",
                }}
              >
                {req.status}
              </span>

              {/* Skill Circle Icon */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 font-bold text-xl text-white"
                style={{ backgroundColor: req.color }}
              >
                {req.skill[0]}
              </div>

              <h3 className="text-2xl font-bold mb-2">{req.skill}</h3>
              <p className="text-gray-700 mb-2">Level: {req.level}</p>

              <p className="text-gray-600 text-sm mb-4">
                This is a skill I really want to learn. Looking forward to
                practicing it with experts.
              </p>

              {/* Delete Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDelete(req.id)}
                className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-2xl transition"
              >
                <AiFillDelete />
              </motion.button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReq;
