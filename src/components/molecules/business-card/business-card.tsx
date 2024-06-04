import React from "react";
import { Link } from "react-router-dom";
import { BusinessCard as KiwiBusinessCard } from "kiwi-design-system";
import { getSanityImageUrl } from "../../../sanity-images";
import { BusinessCardProps } from "../../../types/components/business-card.types";
import { translateSubcategoriesToName } from "../../../utils/translations/es";

export const BusinessCard = ({ business }: BusinessCardProps) => {
  const {
    name,
    url,
    address,
    subcategories,
    coverImage
  } = business;

  return (
    <Link to={`/restaurantes/${url}`}>
      <KiwiBusinessCard
        title={name}
        address={address}
        categories={translateSubcategoriesToName(subcategories)}
        image={getSanityImageUrl(coverImage)}
      />
    </Link>
  );
};
