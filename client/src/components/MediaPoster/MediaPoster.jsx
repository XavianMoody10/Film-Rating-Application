import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import placeholder from "../../assets/poster_placeholder.png";

export const MediaPoster = ({ id, title, poster_path, media_type }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <div className=" relative">
      <AnimatePresence>
        {!isError && !isImageLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isImageLoaded ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5 }}
            className=" absolute top-0 left-0 right-0 bottom-0 bg-black flex items-center justify-center z-10"
          >
            <ClipLoader color="white" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className=" absolute top-0 left-0 right-0 bottom-0 bg-black/75"
      >
        <div className=" absolute bottom-5 left-5 w-[80%] space-y-3">
          <p className=" text-xl text-white font-bold">{title}</p>
          <>
            {media_type === "movie" && (
              <Link
                to={`/details/movie/${id}`}
                className=" bg-white text-lg font-medium w-fit py-2 px-7 rounded-sm flex items-center gap-2"
              >
                <span>Details</span>
                <InfoOutlineIcon />
              </Link>
            )}

            {media_type === "tv" && (
              <Link
                to={`/details/tv_show/${id}`}
                className=" bg-white text-lg font-medium w-fit py-2 px-7 rounded-sm flex items-center gap-2"
              >
                <span>Details</span>
                <InfoOutlineIcon />
              </Link>
            )}
          </>
        </div>
      </motion.div>

      <div>
        <img
          src={isError ? placeholder : imageUrl}
          alt={`${title} poster`}
          loading="lazy"
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setIsError(true)}
        />
      </div>
    </div>
  );
};
