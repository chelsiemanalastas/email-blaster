import "../Main/sidenav.css";
import { useNavigate } from "react-router-dom";

export default function SideNav({
    children,
    selectedNav,
    setSelectedNav,
    navOptions,
}) {
    const navigate = useNavigate();
    function handleClick(id) {
        if (id === 0) {
            if (window.confirm("Are you sure you want to log out?"))
                navigate("/");
            else return;
        }
        setSelectedNav(id);
    }
    return (
        <div className="sidenav">
            <i
                className="fa fa-meetup icon"
                onClick={() => handleClick(null)}
            ></i>
            {navOptions.map((nav) => (
                <button
                    className={selectedNav === nav.id ? "selected" : "inactive"}
                    key={nav.id}
                    onClick={() => handleClick(nav.id)}
                >
                    {nav.name}
                </button>
            ))}
        </div>
    );
}
