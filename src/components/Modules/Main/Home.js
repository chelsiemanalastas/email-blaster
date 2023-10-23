import { useState } from "react";
import SideNav from "../Main/SideNav";
import Dashboard from "../Dashboard/Dashboard";
import ManageAccounts from "../ManageAccounts/ManageAccounts";
import ScheduleBlast from "../ScheduleBlast/ScheduleBlast";
import Activities from "../Activities/Activities";
import "./home.css";
import CreateEmail from "../CreateEmail/CreateEmail";
import SaveEmail from "../popups/SaveEmail";

const navs = [
    {
        id: 1,
        name: "Create Email",
    },
    {
        id: 2,
        name: "Manage Accounts",
    },
    {
        id: 3,
        name: "Schedule Blast",
    },
    {
        id: 4,
        name: "Activity",
    },
    {
        id: 0,
        name: "Logout",
    },
];

export default function Home() {
    const [selectedNav, setSelectedNav] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popup, setPopup] = useState("");
    return (
        <div className="home">
            <SideNav
                selectedNav={selectedNav}
                setSelectedNav={setSelectedNav}
                navOptions={navs}
            />
            <div className="home-modals">
                {selectedNav === null ? <Dashboard /> : null}
                {selectedNav === 1 ? (
                    <CreateEmail onShowPopup={setPopup} />
                ) : null}
                {selectedNav === 2 ? <ManageAccounts /> : null}
                {selectedNav === 3 ? <ScheduleBlast /> : null}
                {selectedNav === 4 ? <Activities /> : null}
            </div>

            <div className={popup && "popups"}>
                <div className="popups-content">
                    {popup === "save-email" ? (
                        <SaveEmail onShowPopup={setPopup} />
                    ) : null}
                </div>
            </div>
        </div>
    );
}
