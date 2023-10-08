import Login from "./components/Login/Login";
import Home from "./components/Main/Home";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Dashboard" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}
