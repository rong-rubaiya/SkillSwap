import React from "react";
import { Link } from "react-router";

function CTASection() {
  return (
    <section className="bg-teal-500 text-white py-16 px-6 rounded-t-xl text-center relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Ready to Upgrade Your Skills?
      </h2>
      <p className="text-lg sm:text-xl mb-6">
        Join thousands of learners and start your journey today!
      </p>
      <Link to='/login'>
      <button className="bg-white text-pastecolor cursor-pointer font-semibold  px-6 py-3 rounded-xl hover:bg-gray-300  transition">
        Get Started
      </button></Link>

      
    </section>
  );
}

export default CTASection;
