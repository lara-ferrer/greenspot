import React from "react"
import { ReviewForm } from "../review-form/review-form"
import { NoReviewsProps } from "./no-reviews.types"
import './no-reviews.scss';

export const NoReviews = ({onBlur, sendReview}: NoReviewsProps) => {
    return (
        <div className="grsp-business-page__no-reviews">
            Todavía no hay opiniones para este negocio. ¡Sé el primero y deja la tuya!
            <ReviewForm onBlur={onBlur} sendReview={sendReview}/>
        </div>
    )
}