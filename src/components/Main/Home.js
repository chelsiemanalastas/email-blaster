import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SideNav from "./SideNav";
import ComposeEmail from "../Modals/ComposeEmail/ComposeEmail";
import ManageAccounts from "../Modals/ManageAccounts/ManageAccounts";
import SentEmails from "../Modals/SentEmails/SentEmails";
import Activities from "../Modals/Activities/Activities";
import "../Main/home.css";

const navs = [
    {
        id: 1,
        name: "Compose Email",
    },
    {
        id: 2,
        name: "Manage Accounts",
    },
    {
        id: 3,
        name: "Sent Emails",
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
    return (
        <div className="home">
            <SideNav
                selectedNav={selectedNav}
                setSelectedNav={setSelectedNav}
                navOptions={navs}
            />
            <div className="home-modals">
                {selectedNav === 1 ? <ComposeEmail setIcon="fa" /> : null}
                {selectedNav === 2 ? <ManageAccounts setIcon="fa" /> : null}
                {selectedNav === 3 ? <SentEmails setIcon="fa" /> : null}
                {selectedNav === 4 ? <Activities setIcon="fa" /> : null}
            </div>
        </div>
    );
}
