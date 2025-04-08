import React from "react";

export const MediaBackdrop = ({ backdrop_path, title, overview }) => {
  const imageURL = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div
      className=" h-[88vh] bg-white bg-top bg-cover relative"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className=" bg-black/65 h-screen w-full">
        <div className=" max-w-[600px] space-y-3 absolute bottom-5 left-5 min-[800px]:bottom-10 min-[800px]:left-10">
          <h3 className=" text-white text-2xl font-bold min-[800px]:text-4xl">
            {title}
          </h3>

          <p className=" hidden text-white text-lg min-[800px]:block">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};
