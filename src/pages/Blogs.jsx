import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import Swal from "sweetalert2";

const blogPosts = [
  {
    id: 1,
    title: "The Timeless Album of Film Photography",
    category: "Photography",
    excerpt: "An in-depth guide on capturing timeless moments through film photography.",
    image: "https://freerangestock.com/sample/170027/vintage-canon-camera-on-wooden-table.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Individually Creative, Together Unforgettable",
    category: "Art & Design",
    excerpt: "Exploring collaborative creativity between artists in modern design projects.",
    image: "https://selecttraining.ae/wp-content/uploads/2024/01/team-building-for-graphic-designers-1063x800.png",
    link: "#"
  },
  {
    id: 3,
    title: "Have You Heard Our Podcast Yet?",
    category: "Podcast",
    excerpt: "Latest episodes on music, art, and creative processes.",
    image: "https://images.pexels.com/photos/3785766/pexels-photo-3785766.jpeg",
    link: "#"
  },
  {
    id: 4,
    title: "Urban Street Photography: Capturing Life in Motion",
    category: "Photography",
    excerpt: "Tips and tricks for photographing candid moments on the streets.",
    image: "https://images.pexels.com/photos/220764/pexels-photo-220764.jpeg",
    link: "#"
  },
  {
    id: 5,
    title: "Color Theory for Designers: Basics and Beyond",
    category: "Art & Design",
    excerpt: "A beginner’s guide to understanding color + its use in modern design.",
    image: "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg",
    link: "#"
  },
  {
    id: 6,
    title: "Starting Your Own Podcast: What You Should Know",
    category: "Podcast",
    excerpt: "From equipment to content ideas — everything to get your podcast off the ground.",
    image: "https://images.pexels.com/photos/261466/pexels-photo-261466.jpeg",
    link: "#"
  },
  {
    id: 7,
    title: "Minimalist Photography — Beauty in Simplicity",
    category: "Photography",
    excerpt: "How to create powerful images using minimal props and simple compositions.",
    image: "https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg",
    link: "#"
  },
  {
    id: 8,
    title: "Creative Workspace Setup for Artists & Creators",
    category: "Art & Design",
    excerpt: "Organizing your studio for maximum inspiration and productivity.",
    image: "https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg",
    link: "#"
  }
];

const Blogs = () => {

  const pathname=useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  

  const handlePremiumAlert = () => {
    Swal.fire({
      title: "Premium Feature",
      text: "You must be a premium member to access this content!",
      icon: "info",
      confirmButtonText: "OK",
      confirmButtonColor: "#1DAAA3",
    });
  };

  return (
    <section className=" py-26 w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-pastecolor">THE CANVAS</h1>
          <nav className="flex flex-wrap space-x-4 text-gray-600 mt-4 md:mt-0">
            <a onClick={handlePremiumAlert} className="hover:text-teal-500 cursor-pointer">Latest</a>
            <a onClick={handlePremiumAlert} className="hover:text-teal-500 cursor-pointer">Trending</a>
            <a onClick={handlePremiumAlert} className="hover:text-teal-500 cursor-pointer">Art</a>
            <a onClick={handlePremiumAlert} className="hover:text-teal-500 cursor-pointer">Design</a>
            <a onClick={handlePremiumAlert} className="hover:text-teal-500 cursor-pointer">Music</a>
            <a onClick={handlePremiumAlert} className="hover:text-teal-500 cursor-pointer">Podcast</a>
          </nav>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
          <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-72 object-cover"/>
          <div className="p-6">
            <span className="text-sm text-teal-500 font-semibold">{blogPosts[0].category}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{blogPosts[0].title}</h2>
            <p className="text-gray-600 mt-2">{blogPosts[0].excerpt}</p>
            <a onClick={handlePremiumAlert} className="mt-4 inline-block text-teal-500 font-semibold hover:underline cursor-pointer">Read More →</a>
          </div>
        </div>

        {/* Other Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map(post => (
            <div key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <span className="text-sm text-teal-500 font-semibold">{post.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-3">{post.excerpt}</p>
                <a onClick={handlePremiumAlert} className="mt-2 inline-block text-teal-500 font-semibold hover:underline cursor-pointer">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;
