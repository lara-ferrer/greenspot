import React from "react";
import { Link } from "react-router-dom";
import { BusinessCard as KiwiBusinessCard } from "kiwi-design-system";
import { getSanityImageUrl } from "../../../sanity-images";
import { BusinessCardProps } from "../../../types/components/business-card";

export const BusinessCard = ({ business }: BusinessCardProps) => {
  const {
    name,
    url,
    address,
    categories,
    coverImage
  } = business;

  return (
    <Link to={`/restaurantes/${url}`}>
      <KiwiBusinessCard
        title={name}
        address={address}
        categories={categories}
        image={getSanityImageUrl(coverImage)}
      />
    </Link>
  );
};
