import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/login.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(true);
    const [invalid, setInvalid] = useState(false);
    const navigate = useNavigate();

    function handleClear() {
        setUsername("");
        setPassword("");
    }

    function handleLogin() {
        if (username === "" || password === "") {
            setInvalid(true);
        } else {
            navigate("/Dashboard");
        }
    }

    return (
        <div className="login">
            <div className="login-header">
                <i className="fa fa-meetup icon"></i>
            </div>
            <div className="login-inputs">
                <div className="login-input-container">
                    {/* <i className="fa fa-user icon"></i> */}
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                </div>

                <div className="login-input-container">
                    {/* <i className="fa fa-lock icon"></i> */}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                {invalid ? (
                    <p className="invalid">Invalid username or password</p>
                ) : null}
            </div>

            <div className="login-buttons">
                <button onClick={() => handleLogin()}>Login</button>
                <div className="authentication">
                    <p>
                        <span>or continue with</span>
                    </p>
                    <div className="authentication-options">
                        <div className="google">
                            <i className="fa fa-google icon"></i>
                        </div>

                        <div className="github">
                            <i className="fa fa-github icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
