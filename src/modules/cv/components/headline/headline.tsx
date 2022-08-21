import "./headline.css";

interface Props {
    text: string;
    accentText?: string;
    dates: string;
    country: string;
    description?: string;
}

export const Headline = ({ text, accentText, dates, country, description }: Props) => {
    return (
        <div className="headline">
            <h3 className="headline__title">
                {text}
                <span className="headline__accent-text">{accentText}</span>
            </h3>
            <p className="headline__subtitle">{dates}<span className="headline__subtitle-divider">|</span>{country}</p>
            <p className="headline__description">{description}</p>
        </div>

    );
};