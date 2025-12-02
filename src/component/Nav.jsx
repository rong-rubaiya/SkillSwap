import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

function Nav() {
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
    { path: "/FAQ", label: "FAQ" }
  ];

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 bg-black text-gray-300 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full md:w-11/12 mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink to="/">
          <img className="w-12 rounded-full" src="#" alt="Logo" />
        </NavLink>

        {/* Desktop Links */}
        <motion.div
          className="hidden md:flex gap-6 items-center font-semibold text-gray-300"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#1DAAA3] scale-110 transition-transform duration-300"
                  : "hover:text-[#1DAAA3] hover:scale-110 transition-transform duration-300"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </motion.div>

        {/* Login Button / Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Login / Signup */}
          <NavLink to="/login">
            <button className="btn btn-outline bg-[#1DAAA3] hidden sm:block text-white border-none hover:bg-[#17a799]">
              Login / Signup
            </button>
          </NavLink>

          {/* Mobile Menu */}
          <div className="md:hidden dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-2 shadow bg-black text-gray-300 rounded-box w-52 absolute right-0 border border-gray-700">
              {links.map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "text-[#1DAAA3]" : "hover:text-[#1DAAA3]"
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/login"
                  className="btn btn-outline bg-[#1DAAA3] text-white border-none hover:bg-[#17a799] w-full mt-2"
                >
                  Login / Signup
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </motion.nav>
  );
}

export default Nav;
