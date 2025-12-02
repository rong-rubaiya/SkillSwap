import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    feedback: "This platform helped me improve my skills drastically! Highly recommended.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Aisha Rahman",
    role: "UI/UX Designer",
    feedback: "Amazing courses and interactive workshops. I learned so much in a short time!",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Photographer",
    feedback: "The instructors are professional and the content is very practical.",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
];

const PopularReview = () => {
  return (
    <section className="py-12">
      <div className="w-11/12 mx-auto px-6 md:px-16">
        <h2 className="text-5xl font-bold text-pastecolor mb-16 text-center">
          What Our Learners Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border-t-4"
              style={{ borderColor: "#1DAAA3" }} // your pastecolor
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{review.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularReview;
