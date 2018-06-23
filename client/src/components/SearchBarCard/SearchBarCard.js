import React from "react";
import "./SearchBardCard.css"

const SearchBarCard = props => (
    <div className="search-container">
        <div className="header">Search Articles</div>
        <div className="searches">
            <label htmlFor="topic">Topic</label>
            <input
                className="bar"
                name="topic"
                type="text"
                className="form-control"
                placeholder="Topic"
                id="cust-address"
            />

            <label htmlFor="start-year">Start Year</label>
            <input
                className="bar"
                name="start-year"
                type="text"
                className="form-control"
                placeholder="Start Year"
                id="start-year"
            />

            <label htmlFor="end-year">End Year</label>
            <input
                className="bar"
                name="end-year"
                type="text"
                className="form-control"
                placeholder="End Year"
                id="end-year"
            />

        </div>
    </div>
);

export default SearchBarCard;