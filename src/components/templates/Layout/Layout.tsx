import React from "react"
import './layout.scss';
import { LayoutProps } from "./Layout.types";

export const Layout = ({numberOfColumns, children}: LayoutProps) => {
    const getColumnClassnames = (i) => {
        switch(i) {
            case 0:
                return 'grsp-layout__first';
            case 1:
                return 'grsp-layout__second';
            default:
                return null;
        }
    }
    const columns = 
        children.length > 1 ? 
            children.flatMap((child, i) => <div className={getColumnClassnames(i)}key={i}>{child}</div>)
        : children;

    return (
        <section className={`grsp-layout grsp-layout--${numberOfColumns}`}>
            {columns}
        </section>
    )
}