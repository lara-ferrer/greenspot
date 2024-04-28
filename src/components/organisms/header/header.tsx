import React from "react";
import { Breadcrumbs as KiwiBreadcrumbs } from "kiwi-design-system";
import { Breadcrumbs } from "../../../types/components/breadcrumbs";
import "./header.scss";

type HeaderProps = {
  breadcrumbLinks: Breadcrumbs[];
  title: string;
}

export const Header = ({ breadcrumbLinks, title }: HeaderProps) => {
  return (
    <section className="grsp-header">
      <KiwiBreadcrumbs links={breadcrumbLinks} />
      <h1 className="grsp-header__title">
        {title}
      </h1>
    </section>
  );
};
