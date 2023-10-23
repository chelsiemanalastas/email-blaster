import { useEffect, useState } from "react";
import "./createEmail.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import emailData from "../../assets/data/email-list.json";
import EmailItem from "../../common/EmailItem";
import axios from "axios";

export default function CreateEmail({ onShowPopup, emailItems }) {
    const [editEmail, setEditEmail] = useState("");
    const [activeTab, setActiveTab] = useState("edit");
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        setEmails(emailData);
    }, []);

    function switchTab(tab) {
        setActiveTab(tab);
    }

    function handleSave() {
        onShowPopup("save-email");
    }

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ size: [] }],
            [{ font: [] }],
            [{ align: ["right", "center", "justify"] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            [{ color: ["red", "#785412"] }],
            [{ background: ["red", "#785412"] }],
        ],
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align",
        "size",
        "font",
    ];

    const [code, setCode] = useState("");
    const handleProcedureContentChange = (content, delta, source, editor) => {
        setCode(content);
        //let has_attribues = delta.ops[1].attributes || "";
        //console.log(has_attribues);
        //const cursorPosition = e.quill.getSelection().index;
        // this.quill.insertText(cursorPosition, "★");
        //this.quill.setSelection(cursorPosition + 1);
    };

    return (
        <div className="create-email">
            {/* <div className="email-title">
                <label className="input-label">Subject: </label>
                <input type="text" placeholder="File Title" max="10" />
            </div> */}

            {/* TABS */}
            <div className="header-tabs">
                <button
                    onClick={(e) => switchTab("edit")}
                    className={
                        activeTab === "edit" ? "active-tab" : "inactive-tab"
                    }
                >
                    Editor
                </button>
                <button
                    onClick={(e) => switchTab("preview")}
                    className={
                        activeTab === "preview" ? "active-tab" : "inactive-tab"
                    }
                >
                    Saved Emails
                </button>
                {/* <button className="save-email">Save</button> */}
            </div>

            {/* EDITOR AND PREVIEW CONTENT */}
            <div className="editor-container">
                {/* Editor */}
                <div
                    className={
                        activeTab === "edit" ? "editor show-content" : "hide"
                    }
                >
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={code}
                        onChange={handleProcedureContentChange}
                        placeholder="Start writing your email..."
                    />
                </div>
                <button
                    className={activeTab === "edit" ? "save-email" : "hide"}
                    onClick={() => handleSave()}
                >
                    Save
                </button>
                {/* Preview */}
                <div
                    className={
                        activeTab === "preview"
                            ? "email-list show-content"
                            : "hide"
                    }
                >
                    <div className="half emails">
                        <div className="search-email">
                            <i className="fa fa-search icon"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="list">
                            {emails.map((e) => (
                                <EmailItem title={e.title} />
                            ))}
                        </div>
                    </div>
                    <div className="half preview">
                        <h3>Email title</h3>
                        <div className="email-preview">{code}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
