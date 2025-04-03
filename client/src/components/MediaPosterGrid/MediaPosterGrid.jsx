import React from "react";
import { MediaPoster } from "../MediaPoster/MediaPoster";

export const MediaPosterGrid = ({ data, media_type }) => {
  const moviePosters = data?.results.map((m) => {
    if (m?.back === null) {
      return;
    } else {
      return (
        <MediaPoster
          key={m.id}
          id={m.id}
          poster_path={m.poster_path}
          title={m.title || m.name || m.original_name}
          media_type={media_type}
        />
      );
    }
  });

  return (
    <div className=" grid grid-cols-1 gap-8 min-[500px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {moviePosters}
    </div>
  );
};
