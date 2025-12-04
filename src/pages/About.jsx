import React, { useEffect } from "react";
import { Link, useLocation } from "react-router";

const owners = [
  {
    id: 1,
    name: "Robuil Khan",
    role: "Co-Founder & Developer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    id: 2,
    name: "Ayaan Khan",
    role: "Co-Founder & Designer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  }
];

const About = () => {

  const pathname=useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="py-28 w-11/12 mx-auto ">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-pastecolor mb-5">
            About SkillSwap
          </h2>
          <p className="text-gray-700 mb-5">
            SkillSwap is a platform that connects passionate learners and skilled mentors. 
            Whether you want to learn a new skill or share your expertise, SkillSwap makes 
            it easy to connect, collaborate, and grow together.
          </p>
          <p className="text-gray-700 mb-5">
            Our mission is to create a vibrant community where knowledge and skills are 
            shared freely, helping everyone improve, innovate, and succeed. Join SkillSwap 
            today and start swapping skills!
          </p>
          <Link to='/login'>
            <button className="bg-white text-pastecolor cursor-pointer font-semibold px-6 py-3 rounded-xl hover:bg-teal-800 hover:text-black transition-all">
              Get Started
            </button>
          </Link>

          {/* Owners Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-pastecolor mb-6">Our Founders</h3>
            <div className="flex gap-2 sm:gap-6  ">
              {owners.map((owner) => (
                <div key={owner.id} className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-4 w-36 hover:scale-105 transition-transform">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className="w-20 h-20 rounded-full object-cover mb-3"
                  />
                  <h4 className="font-semibold text-gray-800">{owner.name}</h4>
                  <p className="text-gray-500 text-sm">{owner.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="SkillSwap"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
