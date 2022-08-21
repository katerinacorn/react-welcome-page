import "./section.css";
import React, { ReactNode } from "react";
import clsx from "clsx";

export enum Type {
    LIGHT,
    DARK
}

interface Props {
    children: ReactNode;
    title?: string;
    titleType: Type;
}

const CLASSES_TYPE = {
    [Type.LIGHT]: "section__title_light",
    [Type.DARK]: ""
};

export const Section = ({ children, title, titleType }: Props) => {
    const className = clsx("section__title", CLASSES_TYPE[titleType]);

    return (
        <div className="section">
            <h2 className={className}>{title}</h2>
            {children}
        </div>
    );
};
