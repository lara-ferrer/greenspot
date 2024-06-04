import React from "react";
import { TextCard as KiwiTextCard } from "kiwi-design-system";
import { ReviewListProps } from "../reviews.types";
import { Carousel } from "../../../../../components/organisms/carousel/carousel";
import { businessReviewsBps } from "../../../../../constants/carousel-breakpoints";
import "./review-list.scss";

export const ReviewList = ({ reviews }: ReviewListProps) => {
  const reviewCards = reviews?.map(({ username, date, picture, review }) => (
    <KiwiTextCard image={picture && picture}>
      <div className="flex-d-column">
        <strong>
          <p>{username}</p>
        </strong>
        <p className="grsp-review-list__date">Escrita el { new Date(date).toLocaleString('es-ES', { timeZone: 'UTC' }) }</p>
        <p>{review}</p>
      </div>
    </KiwiTextCard>
  ));

  return (
    <div className="grsp-review-list">
      <Carousel carouselItems={reviewCards} breakpoints={businessReviewsBps} />
    </div>
  );
};
