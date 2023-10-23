import React from "react";
import "../common/common.css";

export default function EmailItem({ children, title }) {
    return (
        <div className="email-item">
            <h3>{title}</h3>
            <p>tags, tags, tags</p>
            <p className="email-item-date">Oct 23, 2023</p>
        </div>
    );
}
