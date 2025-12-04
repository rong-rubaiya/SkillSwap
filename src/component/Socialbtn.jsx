import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Socialbtn = () => {
  const { signInWithGoogle ,facebookLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
         Swal.fire({
          title: "Logged in successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log("Error:", err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(async () => {
        await Swal.fire({
          title: "Logged in successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/"); // navigate after alert
      })
      .catch(async (error) => {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  return (
    <motion.div className="flex flex-col gap-4">
      <motion.button
        onClick={handleGoogleSignIn}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full border border-gray-300 rounded-xl py-3 hover:bg-[#17a799] flex items-center justify-center gap-3 font-semibold transition text-white cursor-pointer bg-orange-500"
      >
        Login with Google
      </motion.button>

      <motion.button
        onClick={handleFacebookLogin}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full border border-gray-300 rounded-xl py-3 hover:bg-[#17a799] flex items-center justify-center gap-3 font-semibold transition text-white cursor-pointer bg-blue-600"
      >
        Login with Facebook
      </motion.button>
    </motion.div>
  );
};

export default Socialbtn;
