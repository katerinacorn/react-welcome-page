import { useEffect, useState } from "react";
import "./theme-switcher.css";

import { ErrorBoundary } from "../../components/error-boundary";
import { Dictionary, InternationalizationContext, Lang } from "../../context/internationalization";
import { ThemeContext } from "../../context/theme";
import { UserRightsContext } from "../../context/user-rights";
import { Navigation } from "./navigation";
import { Toggler } from "./toggler";
import { RightsNavigation } from "./rights-navigation";



const ThemeSwitcher = () => {
    const [lang, setLang] = useState<Lang>(Lang.EN);
    const [dictionary, setDictionary] = useState<Dictionary>();
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        fetch(`./i18n/${lang}.json`)
            .then(result => result.json())
            .then(data => {
                setDictionary(data);
            });
    }, [lang]);

    if (!dictionary) {
        return null;
    }

    const contextValue = {
        dictionary,
        onChangeLang: (lang: Lang) => setLang(lang),
        lang
    };

    const userRights = {
        DASHBOARD: true,
        HOME: true,
        ADMIN: false
    };

    const themeSwitch = {
        isDark,
        onSwitch: () => setIsDark(!isDark)
    }


    return (
        <div className={`context-container ${isDark ? "dark" : ""}`}>
            <ThemeContext.Provider value={themeSwitch}>
                <ErrorBoundary moduleName="toggler">
                    <Toggler />
                </ErrorBoundary>
                <InternationalizationContext.Provider value={contextValue}>
                    <ErrorBoundary moduleName="navigation">
                        <Navigation />
                    </ErrorBoundary>
                </InternationalizationContext.Provider>
                <UserRightsContext.Provider value={userRights}>
                    <ErrorBoundary moduleName="rights-navigation">
                        <RightsNavigation />
                    </ErrorBoundary>
                </UserRightsContext.Provider>
            </ThemeContext.Provider>
        </div>
    );
};

export default ThemeSwitcher;