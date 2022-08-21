import "./main.css";
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

export const Main = ({children}: Props) => {
    return(
        <main className="main">
            {children}
        </main>
    );
};