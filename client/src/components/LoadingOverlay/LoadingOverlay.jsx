import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { motion, AnimatePresence } from "motion/react";

export const LoadingOverlay = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5 }}
          className=" absolute top-0 left-0 right-0 bottom-0 border border-gray-700 bg-[#1A1A1A] flex items-center justify-center z-50"
        >
          <ClipLoader color="white" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
