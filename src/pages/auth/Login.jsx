import React, { use, useState } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router";
import Socialbtn from "../../component/Socialbtn";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {signInUser}=use(AuthContext)

  const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log('click')
       

    const email = e.target.email.value;
    const password = e.target.password.value;


     signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        Swal.fire({
                  title: "User login successfully!",
                  icon: "success",
                });
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        // console.log(error);
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
      });
    
  };

  return (
    <div className="min-h-screen py-28 flex items-center justify-center bg-gray-100">
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
          className="text-3xl font-bold text-center text-pastecolor mb-8"
        >
          Login
        </motion.h2>

        {/* Form */}
        <motion.form onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex flex-col gap-5"
        >
          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Email</label>
            <input
            name="email"
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pastecolor transition"
            />
          </div>

          {/* Password with toggle */}
          <div className="flex flex-col relative">
            <label className="mb-2 text-gray-700 font-medium">Password</label>
            <input
            name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border border-gray-300 rounded-xl p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-pastecolor transition"
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible size={22} /> : <AiFillEye size={22} />}
            </span>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btnStyle"
          >
            Login
          </motion.button>

          {/* Forgot Password */}
          <p className="text-sm text-gray-500 text-center mt-3">
            Forgot your password?{" "}
            <Link to={''} className="text-pastecolor font-semibold hover:underline">
              Reset
            </Link>
          </p>
          {/* register */}
          <p className="text-sm text-gray-500 text-center mt-3">
           New here?{" "}
            <Link to={'/register'} className="text-pastecolor font-semibold hover:underline">
              Register
            </Link>
          </p>
        </motion.form>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex items-center my-6"
        >
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </motion.div>

        {/* Social Login */}
       <Socialbtn/>
      </motion.div>
    </div>
  );
}

export default Login;
