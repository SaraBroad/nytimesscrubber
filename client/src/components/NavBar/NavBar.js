import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            Home
        </Link>
        <div>
            <ul className="navbar-nav">
                <li
                    className={
                        window.location.pathname === "/" ||
                            window.location.pathname === "/saved"
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
            <Link to="/saved" className="nav-link">
                        Saved
          </Link>
                </li>
            </ul>

        </div>
    </nav>

)

export default NavBar;

