import React from "react"
import { ReviewForm } from "../review-form/review-form"
import { NoReviewsProps } from "./no-reviews.types"
import './no-reviews.scss';

export const NoReviews = ({reviewStatus, onBlur, sendReview}: NoReviewsProps) => {
    return (
        <div className="grsp-business-page__no-reviews">
            {reviewStatus === 'OK' && <p>Review enviada correctamente.</p>}
            {reviewStatus === 'KO' && <p>Ha habido un error. Vuelve a probar en unos instantes.</p>}
            <ReviewForm onBlur={onBlur} sendReview={sendReview} />
        </div>
    )
}