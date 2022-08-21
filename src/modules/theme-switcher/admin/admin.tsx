import { useContext } from "react"
import { UserRightsContext } from "./../../../context/user-rights";
import { ThemeContext } from "./../../../context/theme";


const Admin = () => {
    const { ADMIN } = useContext(UserRightsContext);
    const { isDark } = useContext(ThemeContext);

    return (
        <div className={`module ${isDark ? "dark" : ""}`}>
            <h2 className="module__title">Admin</h2>
            <p>{ADMIN ? "Ok" : "Acces Denied"}</p>
        </div>
    );
};

export default Admin;