import "./list.css";
import clsx from "clsx";
import { ReactNode } from "react";


export enum Style {
    NUMBERED,
    DOTTED,
    UNORDERED,
    CUSTOM
}

export enum Type {
    LIGHT,
    DARK,
    ACCENT
}

const CLASSES_TYPE = {
    [Style.NUMBERED]: "list-items_numbered",
    [Style.UNORDERED]: "",
    [Style.DOTTED]: "list-items_dotted",
    [Style.CUSTOM]: "list-items_custom"
}
    
const COLOR_TYPE = {
    [Type.LIGHT]: "list-items_light",
    [Type.ACCENT]: "list-items_accent",
    [Type.DARK]: ""
}
    
interface Props {
    style?: Style;
    data: string[];
    type: Type;
    children?: ReactNode;
}
    
export const List = ({data, style = Style.UNORDERED, type = Type.DARK, children}: Props) => {
    const listItem = data.map((item, index) => 
        <li className="list-items__item" key={index}>
            {children}
            <span className="list-items__item-text">{item}</span>
        </li>
    );
    
    const className = clsx("list-items", CLASSES_TYPE[style], COLOR_TYPE[type]);
    
    return(
        <ul className={className}>
            {listItem}
        </ul>
    );
}