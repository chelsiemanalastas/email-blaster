import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SideNav from "./SideNav";
import Dashboard from "../Modals/Dashboard/Dashboard";
import ManageAccounts from "../Modals/ManageAccounts/ManageAccounts";
import ScheduleBlast from "../Modals/ScheduleBlast/ScheduleBlast";
import Activities from "../Modals/Activities/Activities";
import "../Main/home.css";
import CreateEmail from "../Modals/CreateEmail/CreateEmail";

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
    return (
        <div className="home">
            <SideNav
                selectedNav={selectedNav}
                setSelectedNav={setSelectedNav}
                navOptions={navs}
            />
            <div className="home-modals">
                {selectedNav === null ? <Dashboard /> : null}
                {selectedNav === 1 ? <CreateEmail setIcon="fa" /> : null}
                {selectedNav === 2 ? <ManageAccounts setIcon="fa" /> : null}
                {selectedNav === 3 ? <ScheduleBlast setIcon="fa" /> : null}
                {selectedNav === 4 ? <Activities setIcon="fa" /> : null}
            </div>
        </div>
    );
}
