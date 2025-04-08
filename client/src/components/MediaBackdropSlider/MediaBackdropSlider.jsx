import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { MediaBackdrop } from "../MediaBackdrop/MediaBackdrop";

export const MediaBackdropSlider = ({ results, autoPlay }) => {
  const slides = results.map((s) => {
    return (
      <SwiperSlide key={s.id}>
        <MediaBackdrop
          backdrop_path={s.backdrop_path}
          title={s.title || s.name || s.original_name}
          overview={s.overview}
        />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={autoPlay ? [Autoplay] : null}
      autoplay={
        autoPlay
          ? {
              delay: 10000,
              disableOnInteraction: false,
            }
          : null
      }
    >
      {slides}
    </Swiper>
  );
};
