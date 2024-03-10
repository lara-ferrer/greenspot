import React, { useState } from "react";
import { Layout } from "../../../../components/templates/Layout/Layout";
import { client } from "../../../../sanity-client";
import { ReviewsProps } from "./reviews.types";
import { ReviewForm } from "./review-form/review-form";
import { NoReviews } from "./no-reviews/no-reviews";

export const Reviews = ({ businessId, reviews }: ReviewsProps) => {
  const [review, setReview] = useState<string>();

  const handleOnBlur = (e: any) => {
    setReview(e.currentTarget.value);
  };

  const sendReview = () => {
    const result = client
      .patch(businessId)
      .setIfMissing({ reviews: [] })
      .append("reviews", [{ review }])
      .commit({
        autoGenerateArrayKeys: true,
      });

    return result;
  };

  return (
    <Layout
      numberOfColumns={1}
      className="grsp-business-page__reviews"
      direction="column"
    >
      <h3>Opiniones</h3>
      <NoReviews onBlur={handleOnBlur} sendReview={sendReview} />
    </Layout>
  );
};
