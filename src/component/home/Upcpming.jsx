import React, { useEffect, useState } from 'react';

function Upcoming() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/upcoming.json')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching courses:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading courses...</p>;
  }

  return (
    <div className="">
      <h1 className="w-11/12 mx-auto text-5xl font-bold text-center text-pastecolor mt-4 mb-16">Upcoming Skills</h1>

      <div className="overflow-hidden relative">
        <div className="flex animate-marquee gap-4">
          {courses.concat(courses).map((course, index) => (
            <div
              key={index}
              className="w-56 bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 flex-shrink-0"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-3 h-40 flex flex-col justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-gray-800 mb-1 truncate">{course.title}</h2>
                  <p className="text-xs text-gray-500 mb-2">{course.category}</p>
                  <p className="text-xs text-gray-600 line-clamp-3">{course.description}</p>
                </div>
                <div className="flex justify-between items-center text-xs mt-2">
                  <span className="text-teal-500 font-bold">${course.price}</span>
                  <span className="text-yellow-500 font-semibold">⭐ {course.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Upcoming;
