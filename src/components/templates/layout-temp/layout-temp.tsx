import React from "react";
import "./layout-temp.scss";

type LayoutProps = {
  numberOfColumns: number;
  children: any;
  className?: string;
  direction?: "row" | "column";
};

export const Layout = ({
  numberOfColumns,
  children,
  className,
  direction,
}: LayoutProps) => {
  const getColumnClassnames = (i) => {
    switch (i) {
      case 0:
        return "grsp-layout__first";
      case 1:
        return "grsp-layout__second";
      default:
        return null;
    }
  };

  const columns =
    children.length > 1
      ? children.flatMap((child, i) => (
          <div className={getColumnClassnames(i)} key={i}>
            {child}
          </div>
        ))
      : children;

  const getPositionClassname =
    direction === "column" ? "flex-d-column" : "flex-d-row";

  return (
    <section
      className={`${className ? className : ''} ${getPositionClassname} grsp-layout grsp-layout--${numberOfColumns}`}
    >
      {columns}
    </section>
  );
};
