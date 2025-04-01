import React from "react";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import { Link } from "react-router-dom";

export const MediaBackdrop = ({ id, title, backdrop_path, overview }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div
      className=" h-[750px] bg-top bg-cover"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/60">
        <div className=" w-[90%] max-w-[700px] absolute bottom-5 left-5 space-y-5 lg:bottom-10 lg:left-10">
          <h3 className=" text-white text-4xl font-bold">{title}</h3>
          <p className=" hidden text-white text-lg md:block">{overview}</p>
          <Link
            to={`/details/${id}`}
            className=" bg-white text-lg font-medium w-fit py-2 px-7 rounded-sm flex items-center gap-2"
          >
            <span>Details</span>
            <InfoOutlineIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
