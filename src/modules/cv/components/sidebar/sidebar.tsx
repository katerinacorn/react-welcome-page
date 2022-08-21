import { ReactNode } from "react";
import "./sidebar.css"

interface Props {
    children?: ReactNode;
}

export const Sidebar = ({ children }: Props) => {
    return (
        <aside className="sidebar">
            {children}
        </aside>
    );
};

