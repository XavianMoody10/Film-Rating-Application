import React from "react";
import { MediaBackdrop } from "../MediaBackdrop/MediaBackdrop";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const MediaBackdropSlider = ({ data, autoPlay }) => {
  const results = data?.results || [];

  const slides = results.map((s) => {
    return (
      <SwiperSlide key={s.id}>
        <MediaBackdrop
          id={s.id}
          title={s.title || s.name || s.original_name}
          backdrop_path={s.backdrop_path}
          overview={s.overview}
        />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      autoplay={
        autoPlay
          ? {
              delay: 8000,
              disableOnInteraction: false,
            }
          : null
      }
      modules={autoPlay ? [Autoplay] : null}
    >
      {slides}
    </Swiper>
  );
};
