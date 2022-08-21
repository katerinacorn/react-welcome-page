import "./welcome-page.css";

export const WelcomePage = () => {
    return (
        <>
            <h1 className="greeting"><span className="greeting-emoji">👋 </span>Hello</h1>
            <p className="message">I'm Kate — Front-End <span className="message-emoji">🎓</span> student</p>
        </>
    );
};