import React from "react"
import './grid-temp.scss';

export const Grid = ({ children }: any) => {
    return (
        <div className="grsp-grid">
            { children }
        </div>
    )
}