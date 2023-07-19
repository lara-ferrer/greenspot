import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";

export const Carousel = (carouselItems: JSX.Element[]) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {carouselItems.length && carouselItems.map((item) => <SwiperSlide>{item}</SwiperSlide>)}
    </Swiper>
  );
};
