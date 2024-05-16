import React from "react";
import { Breadcrumbs as KiwiBreadcrumbs } from "kiwi-design-system";
import { Breadcrumbs } from "../../../types/components/breadcrumbs";
import "./header.scss";

type HeaderProps = {
  breadcrumbLinks?: Breadcrumbs[];
  title: string;
}

export const Header = ({ title, breadcrumbLinks }: HeaderProps) => {
  return (
    <section className="grsp-header">
      { breadcrumbLinks && <KiwiBreadcrumbs links={breadcrumbLinks} /> }
      <h1 className="grsp-header__title">
        {title}
      </h1>
    </section>
  );
};
