// AllTeacher.jsx
import React, { useEffect } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router';
import { FaStar, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const AllTeacher = () => {
  const teachers = useLoaderData(); // this should be an array of teacher objects
  console.log(teachers);

 
 const pathname=useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  

  return (
    <div className="w-11/12 max-w-6xl mx-auto pb-8 pt-30">
      <h1 className="text-4xl font-bold text-center text-pastecolor mb-6">All Teachers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teachers.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Cover */}
            <div className="h-32 w-full">
              <img
                src={t.cover}
                alt="cover"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Avatar & info */}
            <div className="p-4 flex flex-col items-center text-center">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full border-2 border-white -mt-10 shadow-lg"
              />
              <h3 className="mt-2 font-semibold text-lg">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.title}</p>

              {/* Rating */}
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-medium">{t.rating}</span>
                <span className="text-gray-400 text-sm ml-1">({t.reviewsCount})</span>
              </div>

              {/* Location & availability */}
              <div className="flex items-center text-gray-500 text-sm mt-2 gap-2">
                <FaMapMarkerAlt /> <span>{t.location}</span>
                <FaClock /> <span>{t.availability.join(", ")}</span>
              </div>

              {/* Hourly rate */}
              <p className="mt-2 font-bold text-pastecolor">${t.hourlyRate}/hr</p>

              {/* Action buttons */}
              <div className="w-full">
               
              <Link to={`/tutor-details/${t.id}`}>
                <button
                 
                  className="btnStyle " 
                >
                  View
                </button>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTeacher;
