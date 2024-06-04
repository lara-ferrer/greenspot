import React from "react";
import { Button } from "kiwi-design-system";
import "./section-title.scss";
import "../../../styles/index.scss";

type SectionTitleProps = {
  title: string;
  link?: string;
};

export const SectionTitle = ({ title, link }: SectionTitleProps) => {
  return (
    <div className="grsp__section__title">
      <h2>{title}</h2>
      {link && (
        <a href={link}>
          <Button state="secondary" size="small" label="Ver todo" />
        </a>
      )}
    </div>
  );
};
