import React from 'react';
import { motion } from "framer-motion";

const Socialbtn = () => {
  return (
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full border border-gray-300 rounded-xl py-3 hover:bg-[#17a799] flex items-center justify-center gap-3 font-semibold transition text-gray-100 cursor-pointer  bg-orange-500"
          >
            Login with Google
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full border border-gray-300 rounded-xl py-3 hover:bg-[#17a799] flex items-center justify-center gap-3 font-semibold transition text-gray-100 cursor-pointer  bg-blue-600"
          >
            Login with Facebook
          </motion.button>
        </motion.div>
  );
};

export default Socialbtn;