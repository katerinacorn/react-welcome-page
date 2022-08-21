import clsx from "clsx";
import "./avatar.scss";

interface Props {
    alt: string;
    type?: Type;
    imgUrl: string;
}


export enum Type {
	SQUARE,
	ROUNDED,
}

const CLASSES_TYPE = {
    [Type.ROUNDED]: "avatar_rounded",
    [Type.SQUARE]: ""
};

export const Avatar = ({type = Type.ROUNDED, alt, imgUrl  }: Props) => {
    const className = clsx("avatar", CLASSES_TYPE[type]);
    
    return (
        <div className={className}>
            <img src={imgUrl} alt={alt}  className="avatar__img"/>
        </div>
    );
};
