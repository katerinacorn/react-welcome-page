import { useContext } from "react";
import { ThemeContext } from "./../../../context/theme";
import "./toggler.css";

export const Toggler = () => {
    const { isDark, onSwitch } = useContext(ThemeContext);
    const onToggle = () => onSwitch(!isDark);


    return (
        <>
            <div className="toggle-button">
                <span className={`toggle-button__icon-sun${isDark ? "_dark" : ""}`}>☀</span>
                <label className="toggle-button__label">
                    <input type="checkbox" checked={isDark} onChange={onToggle} className="toggle-button__input" />
                    <span className="toggle-button__slider"></span>
                </label>
                <span className={`toggle-button__icon-moon${isDark ? "_dark" : ""}`}>☽</span>
            </div>
        </>
    );
};