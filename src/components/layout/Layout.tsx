import React from "react"
import { LayoutProps } from "./Layout.types"
import './layout.scss';

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
    const twoColumns = children.length > 1 && children.flatMap((child, i) => <div className={getColumnClassnames(i)}key={i}>{child}</div>);

    return (
        <div className={`grsp-layout grsp-layout--${numberOfColumns}`}>
            {twoColumns}
        </div>
    )
}