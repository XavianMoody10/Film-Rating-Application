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
          transition={{ delay: 1 }}
          className=" absolute top-0 left-0 bottom-0 right-0 bg-[#333333] border border-white/25 flex items-center justify-center z-10"
        >
          <ClipLoader color="white" size={30} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
