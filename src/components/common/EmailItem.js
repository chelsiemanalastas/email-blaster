import React from "react";
import "../common/common.css";

export default function EmailItem({ children, title, selected, onClick, key }) {
    function handleSelection(id) {
        console.log("Email Item clicked: ", selected);
    }
    return (
        <div
            className={`email-item ${selected ? "item-selected" : ""}`}
            onClick={onClick}
        >
            <div className="item-details">
                <h3>{title}</h3>
                <p>tags, tags, tags</p>
                <p className="email-item-date">October</p>
            </div>
            <div className="item-action">
                <i className="fa fa-pencil"></i>
                <i className="fa fa-trash"></i>
            </div>
        </div>
    );
}
