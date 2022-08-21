import { useContext } from "react"
import { ThemeContext } from "./../../../context/theme";
import { UserRightsContext } from "./../../../context/user-rights";

const Home = () => {
    const { HOME } = useContext(UserRightsContext);
    const { isDark } = useContext(ThemeContext);

    return (
        <div className={`module ${isDark ? "dark" : ""}`}>
            <h2 className="module__title">Home</h2>
            <p>{HOME ? "Ok" : "Access Denied"}</p>
        </div >
    );
};

export default Home;