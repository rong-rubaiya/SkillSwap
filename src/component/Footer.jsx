// Footer.jsx
import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const links = [
  { path: "/", label: "Home" },
  { path: "/skills", label: "Skills" },
  { path: "/add-skill", label: "Add Skills" },
  { path: "/my-skills", label: "My Skills" },
  { path: "/my-requests", label: "My Requests" },
  { path: "/reviews", label: "Reviews" },
  { path: "/blog", label: "Blog" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo / Title */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-pastecolor">SkillSwap</h1>
          <p className="mt-2 text-gray-400">
            Learn and share skills with the community.
          </p>

          {/* Social Icons */}
          <div className="flex mt-4 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-pastecolor transition-colors duration-300">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pastecolor transition-colors duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pastecolor transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pastecolor transition-colors duration-300">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-300 hover:text-pastecolor transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
