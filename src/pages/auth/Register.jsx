import React, { useState } from "react";
import { motion } from "framer-motion";
import Socialbtn from "../../component/Socialbtn";

function Register() {
  const [password, setPassword] = useState("");

  const rules = [
    { test: (pw) => pw.length >= 8, label: "At least 8 characters" },
    { test: (pw) => /[A-Z]/.test(pw), label: "At least one uppercase letter" },
    { test: (pw) => /[a-z]/.test(pw), label: "At least one lowercase letter" },
    { test: (pw) => /[0-9]/.test(pw), label: "At least one number" },
    { test: (pw) => /[!@#$%^&*]/.test(pw), label: "At least one special character (!@#$%^&*)" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-28">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-3xl font-bold text-center text-pastecolor mb-6"
        >
          Register
        </motion.h2>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex flex-col gap-5"
        >
          {/* Name */}
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
            <label className="mb-2 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pastecolor transition w-full"
            />
          </motion.div>

          {/* Email */}
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
            <label className="mb-2 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pastecolor transition w-full"
            />
          </motion.div>

          {/* Profile Photo URL */}
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
            <label className="mb-2 text-gray-700 font-medium">Profile Photo URL</label>
            <input
              type="text"
              placeholder="Enter image URL"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pastecolor transition w-full"
            />
          </motion.div>

          {/* Password */}
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-col relative">
            <label className="mb-2 text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pastecolor transition w-full"
            />
          </motion.div>

          {/* Password Rules */}
          {password.length > 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex flex-col gap-1 mt-2">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 text-sm ${rule.test(password) ? "text-green-500" : "text-gray-400"}`}
                >
                  {rule.test(password) ? <span>&#10003;</span> : <span>&#10007;</span>}
                  <span>{rule.label}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Terms & Conditions */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex items-center gap-2 mt-2">
            <input type="checkbox" className="accent-pastecolor" />
            <span className="text-gray-600 text-sm">
              I agree to the{" "}
              <a href="#" className="text-pastecolor font-semibold hover:underline">
                Terms & Conditions
              </a>
            </span>
          </motion.div>

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btnStyle"
          >
            Register
          </motion.button>

          {/* Login link */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-sm text-gray-500 text-center mt-3">
            Already have an account?{" "}
            <a href="/login" className="text-pastecolor font-semibold hover:underline">
              Login
            </a>
          </motion.p>

          {/* Divider */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </motion.div>

          {/* Social Login Buttons */}
         <Socialbtn/>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default Register;
