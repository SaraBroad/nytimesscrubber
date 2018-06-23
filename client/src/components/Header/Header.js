import React from "react";
import "./Header.css"

const Header = props => (
    <div className="header-container">
        <div className="title">
            New York Times Article Scrubber
        </div>
        <div className="sub-title">
            Search for and Annotate Articles of Interest
        </div>
    </div>
);

export default Header;