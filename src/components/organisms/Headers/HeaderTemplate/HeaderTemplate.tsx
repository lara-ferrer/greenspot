import React from "react";
import { Breadcrumbs as KiwiBreadcrumbs } from "kiwi-design-system";
import "./header-template.scss";
import { Breadcrumbs } from "../../../../types";

type HeaderTemplateProps = {
  breadcrumbLinks: Breadcrumbs[];
  title: string;
}

export const HeaderTemplate = ({ breadcrumbLinks, title }: HeaderTemplateProps) => {
  return (
    <section className="grsp-category-header">
      <KiwiBreadcrumbs links={breadcrumbLinks} />
      <h1 className="grsp-category-header__title">
        {title}
      </h1>
    </section>
  );
};
