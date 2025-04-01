import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MediaPoster } from "../MediaPoster/MediaPoster";

export const MediaPosterSlider = ({ data, media_type }) => {
  const slides = data?.results.map((s) => {
    const title = s.title || s.name || s.original_title;

    if (s?.back === null) {
      return;
    } else {
      return (
        <SwiperSlide key={s.id}>
          <MediaPoster
            id={s.id}
            title={title}
            poster_path={s.poster_path}
            media_type={media_type}
          />
        </SwiperSlide>
      );
    }
  });

  return (
    <Swiper
      slidesPerView={1.1}
      spaceBetween={20}
      breakpoints={{
        500: {
          slidesPerView: 2.1,
        },

        768: {
          slidesPerView: 3.1,
        },

        1280: {
          slidesPerView: 4.1,
        },
      }}
    >
      {slides}
    </Swiper>
  );
};
