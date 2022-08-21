import { createContext } from "react";
import { Lang, Dictionary } from "./typedef"


type Context = {
    lang: Lang,
    dictionary: Dictionary,
    onChangeLang: (lang: Lang) => void
}

export const InternationalizationContext = createContext({} as Context)