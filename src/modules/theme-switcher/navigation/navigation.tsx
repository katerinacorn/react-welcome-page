import { ChangeEvent, useContext } from "react";
import { InternationalizationContext, Lang } from "./../../../context/internationalization";
import { ThemeContext } from "./../../../context/theme";
import "./navigation.css";


export const Navigation = () => {
    const { onChangeLang, dictionary } = useContext(InternationalizationContext);
    const onLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeLang(e.target.value as Lang)
    }
    const { isDark } = useContext(ThemeContext);

    return (
        <div className={`module ${isDark ? "dark" : ""}`}>
            <select className="module__select" onChange={onLangChange}>
                <option value={Lang.EN}>EN</option>
                <option value={Lang.UA}>UA</option>
            </select>
            <ul className="module__list-items">
                <li>
                    {dictionary.navigation.home}
                </li>
                <li>
                    {dictionary.navigation.about}
                </li>
                <li>
                    {dictionary.navigation.contacts}
                </li>
                <li>
                    {dictionary.navigation.news}
                </li>
            </ul>
        </div>
    );
}