import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

type CarouselProps = {
  carouselItems: JSX.Element[];
  breakpoints: any;
};

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
      {carouselItems.length &&
        carouselItems.map((item, i) => (
          <SwiperSlide key={`carousel-${i}`}>{item}</SwiperSlide>
        ))}
    </Swiper>
  );
};
