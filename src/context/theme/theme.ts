import { createContext } from "react";

type ThemeContext = {
    isDark: boolean,
    onSwitch: (isDark: boolean) => void
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);