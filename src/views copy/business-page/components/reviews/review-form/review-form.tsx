import { Input, Button } from "kiwi-design-system";
import React from "react";
import { ReviewFormProps } from "./review-form.types";
import './review-form.scss';

export const ReviewForm = ({onBlur, sendReview}: ReviewFormProps) => {
  return (
    <div className="grsp-business-page__review-form">
      <Input
        type="text"
        placeholder="Escribe aquí una opinión..."
        onBlur={onBlur}
      />
      <Button className="c-pointer" onClick={sendReview} label="Enviar" />
    </div>
  );
};
