import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { getSanityImageUrl } from "../../../sanity-images";
import "./grid-gallery.scss";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

type GridGalleryProps = {
  images: string[];
};

export const GridGallery = ({ images }: GridGalleryProps) => {
  return (
    <Swiper
      slidesPerView={3}
      grid={{
        rows: 2,
      }}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination]}
    >
      <SwiperSlide className="first-image">
        <img src={getSanityImageUrl(images[0])} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={getSanityImageUrl(images[0])} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={getSanityImageUrl(images[0])} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={getSanityImageUrl(images[0])} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={getSanityImageUrl(images[0])} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={getSanityImageUrl(images[0])} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={getSanityImageUrl(images[0])} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={getSanityImageUrl(images[0])} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={getSanityImageUrl(images[0])} />
      </SwiperSlide>
    </Swiper>
  );
};
