import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../../../components/templates/layout/layout";
import { writeClient } from "../../../../sanity-client";
import { ReviewsProps } from "./reviews.types";
import { NoReviews } from "./no-reviews/no-reviews";
import { useUserContext } from "../../../../contexts/user-context/user-context";
import { getReviews } from "../../../../api/get-reviews";
import { ReviewList } from "./review-list/review-list";
import { NoReviewAllowed } from "./no-review-allowed/no-review-allowed";
import './reviews.scss';

export const Reviews = ({ businessId }: ReviewsProps) => {
  const { businessUrl } = useParams();
  const [review, setReview] = useState<string>();
  const [actualReviews, setActualReviews] = useState<any[]>();

  useEffect(() => {
    getReviews(businessUrl).then((data) => setActualReviews(data));
  }, []);

  const handleOnBlur = (e: any) => {
    setReview(e.currentTarget.value);
  };

  const { userProfile } = useUserContext();

  const sendReview = () => {
    const result = writeClient
      .patch(businessId)
      .setIfMissing({ review: [] })
      .append("review", [
        {
          username: userProfile.given_name,
          email: userProfile.email,
          picture: userProfile.picture,
          review,
          date: new Date()
        },
      ])
      .commit({
        autoGenerateArrayKeys: true,
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error('Oh no, the update failed: ', err.message)
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
      <div className="grsp-business-page__reviews-first-section">
        {!actualReviews?.length && <p>Todavía no hay opiniones para este negocio. ¡Sé el primero y deja la tuya!</p>}
        {!userProfile && actualReviews?.length && <NoReviewAllowed /> }
        {userProfile && <NoReviews onBlur={handleOnBlur} sendReview={sendReview} /> }
      </div>
      <div className="grsp-business-page__reviews-second-section">
        {actualReviews?.length && <ReviewList reviews={actualReviews} /> }
      </div>
    </Layout>
  );
};
