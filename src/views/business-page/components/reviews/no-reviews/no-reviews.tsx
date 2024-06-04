import React from "react"
import { ReviewForm } from "../review-form/review-form"
import { NoReviewsProps } from "./no-reviews.types"
import './no-reviews.scss';

export const NoReviews = ({onBlur, sendReview}: NoReviewsProps) => {
    return (
        <div className="grsp-business-page__no-reviews">
            <ReviewForm onBlur={onBlur} sendReview={sendReview} />
        </div>
    )
}