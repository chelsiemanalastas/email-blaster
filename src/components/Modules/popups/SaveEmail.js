import { useState } from "react";
import "../popups/popups.css";

export default function SaveEmail({ onShowPopup }) {
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");

    function handleClose() {
        onShowPopup(null);
    }

    return (
        <div className="popup-save-email">
            <div className="save-email-header">
                <h2>Save email</h2>
                <i
                    className="fa fa-times icon"
                    onClick={() => handleClose()}
                ></i>
            </div>
            <div className="save-email-container">
                <input
                    type="text"
                    value={title}
                    placeholder="File title"
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <input
                    type="text"
                    value={subject}
                    placeholder="Email subject"
                    onChange={(e) => setSubject(e.target.value)}
                ></input>
            </div>
            <button>Save</button>
        </div>
    );
}
