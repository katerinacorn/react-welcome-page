import { useContext } from "react"
import { ThemeContext } from "./../../../context/theme/theme";
import { UserRightsContext } from "./../../../context/user-rights";


const Dashboard = () => {
    const { DASHBOARD } = useContext(UserRightsContext);
    const { isDark } = useContext(ThemeContext);

    return (
        <div className={`module ${isDark ? "dark" : ""}`}>
            <h2 className="module__title">Dashboard</h2>
            <p>{DASHBOARD ? "Ok" : "Acces Denied"}</p>
        </div>
    );
};

export default Dashboard;