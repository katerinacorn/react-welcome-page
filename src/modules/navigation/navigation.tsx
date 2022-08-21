import { NavLink, Outlet } from "react-router-dom";
import "./navigation.css"


export const Navigation = () => {
    return (
        <div className="container">
            <ul className="navigation-list">Projects:
                <li className="navigation-list__item">
                    <NavLink className="navigation-list__item-link" to="welcome-page">Welcome</NavLink>
                </li>
                <li className="navigation-list__item">
                    <NavLink className="navigation-list__item-link" to="hook">Hook</NavLink>
                </li>
                <li className="navigation-list__item">
                    <NavLink className="navigation-list__item-link" to="player">Player</NavLink>
                </li>
                <li className="navigation-list__item">
                    <NavLink className="navigation-list__item-link" to="context">Switcher</NavLink>
                </li>
                <li className="navigation-list__item">
                    <NavLink className="navigation-list__item-link" to="cv">CV</NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    );
};