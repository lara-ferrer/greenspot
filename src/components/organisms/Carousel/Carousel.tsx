import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import { CarouselProps } from "./Carousel.types";

export const Carousel = ({ carouselItems, breakpoints }: CarouselProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={breakpoints}
    >
      {carouselItems.length && carouselItems.map((item) => <SwiperSlide>{item}</SwiperSlide>)}
    </Swiper>
  );
};
