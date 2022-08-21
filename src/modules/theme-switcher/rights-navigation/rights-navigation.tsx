import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "../../../context/theme";

export const RightsNavigation = () => {
    const { isDark } = useContext(ThemeContext);

    return (
        <div className="container">
            <ul className="navigation-list">
                <li className="navigation-list__item">
                    <NavLink to="home" className={`navigation-list__item-link ${isDark ? "dark" : ""}`}>
                        Home
                    </NavLink>
                </li>
                <li className="navigation-list__item">
                    <NavLink to="admin" className={`navigation-list__item-link ${isDark ? "dark" : ""}`}>
                        Admin
                    </NavLink>
                </li>
                <li className="navigation-list__item">
                    <NavLink to="dashboard" className={`navigation-list__item-link ${isDark ? "dark" : ""}`}>
                        Dashboard
                    </NavLink>
                </li>
            </ul>
            <Outlet />
        </div >
    );

};