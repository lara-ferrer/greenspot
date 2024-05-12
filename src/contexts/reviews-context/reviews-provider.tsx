import React, { useState } from "react";
import { ReviewsContext } from "./reviews-context";

export type ReviewsProvider = {
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ReviewsProvider = ({ children }: any) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const provider = {
    isLoginModalOpen,
    setIsLoginModalOpen
  }
    return (
      <ReviewsContext.Provider value={ provider }>
        { children }
      </ReviewsContext.Provider>
    );
  };