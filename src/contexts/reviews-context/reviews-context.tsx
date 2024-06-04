import { createContext, useContext } from "react";
import { ReviewsProvider } from "./reviews-provider";

export const ReviewsContext = createContext({} as ReviewsProvider);

export const useReviewsContext = () => {
  const reviewsContext = useContext(ReviewsContext);

  if (reviewsContext === undefined) {
    throw new Error('useReviewsContext can only be used in a ConfigProvider tree');
  }

  return reviewsContext;
};