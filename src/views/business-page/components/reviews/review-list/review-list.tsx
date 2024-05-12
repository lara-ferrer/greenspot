import React from "react";
import { TextCard as KiwiTextCard } from "kiwi-design-system";
import { ReviewListProps } from "../reviews.types";
import { Carousel } from "../../../../../components/organisms/carousel/carousel";
import { businessReviewsBps } from "../../../../../constants/carousel-breakpoints";
import "./review-list.scss";

export const ReviewList = ({ reviews }: ReviewListProps) => {
  const reviewCards = reviews?.map(({ picture, review }) => (
    <KiwiTextCard image={picture && picture}>
      <p>{review}</p>
    </KiwiTextCard>
  ));

  return (
    <div className="grsp-review-list">
      <Carousel carouselItems={reviewCards} breakpoints={businessReviewsBps} />
    </div>
  );
};
