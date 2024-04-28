import React from "react";
import { TextCard as KiwiTextCard } from 'kiwi-design-system';
import { ReviewListProps } from "../reviews.types";
import './review-list.scss';

export const ReviewList = ({ reviews }: ReviewListProps) => {
    return (
        <div className="grsp-review-list">
        {reviews?.map(({ picture, review }) =>
            <KiwiTextCard image={picture && picture}>
                <p>{review}</p>
            </KiwiTextCard>
        )}
        </div>
    );
};