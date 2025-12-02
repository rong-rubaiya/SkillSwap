// Slider.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slider = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const topRated = data.sort((a, b) => b.rating - a.rating);
        setSkills(topRated);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full pt-20">
      {skills.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="fade"
          loop={true}
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.skillId}>
              <div className="relative w-full h-[60vh] md:h-[60vh]">
                {/* Full Image */}
                <img
                  src={skill.image}
                  alt={skill.skillName}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70"></div>
                {/* Text Content */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 md:px-16 text-center md:text-left">
                  <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full mb-4 font-semibold">
                    Top Rated
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                    {skill.skillName}
                  </h2>
                  <p className="text-gray-200 text-md md:text-lg mb-5">
                    by {skill.providerName}
                  </p>
                  <div className="flex justify-center md:justify-start items-center gap-6">
                    <span className="text-teal-400 font-bold text-xl md:text-2xl">
                      ${skill.price}
                    </span>
                    <span className="text-yellow-400 font-semibold text-xl md:text-2xl">
                      ★ {skill.rating}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500 py-10">Loading skills...</p>
      )}
    </div>
  );
};

export default Slider;
