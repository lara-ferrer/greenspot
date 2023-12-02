import React from "react";
import { Link } from "react-router-dom";
import { BusinessCard as KiwiBusinessCard } from "kiwi-design-system";
import { getSanityImageUrl } from "../../../sanity-images";
import { BusinessCardProps } from "../../../types/components/BusinessCard";
import { getFirstThreeLettersFromDay } from "../../../utils/dates";

export const BusinessCard = ({ business }: BusinessCardProps) => {
  const {
    name,
    url,
    address,
    categories,
    coverImage
  } = business;

  /* const openTime = () => {
    if (openingDays) {
      const firstDayOpen = openingDays[0];
      const lastDayOpen = openingDays[openingDays.length - 1];

      return `${getFirstThreeLettersFromDay(
        firstDayOpen
      )} - ${getFirstThreeLettersFromDay(lastDayOpen)} ${
        openingHours.opening
      }h - ${openingHours.closing}h`;
    }

    return "";
  };

  const isOpen = () => {
    if (openingHours) {
      const opening = new Date(openingHours.opening);
      const closing = new Date(openingHours.closing).getTime();
      const now = new Date().getTime();

      return true;
    }

    return false;
  }; */

  return (
    <Link to={`/zaragoza/business/${url}`}>
      <KiwiBusinessCard
        title={name}
        address={address}
        categories={categories}
        image={getSanityImageUrl(coverImage)}
      />
    </Link>
  );
};
