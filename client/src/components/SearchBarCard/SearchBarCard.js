import React from "react";
import "./SearchBardCard.css"

const SearchBarCard = props => (
    <div className="search-container">
        <div className="header">Search Articles</div>
        <div className="searches">
            <label htmlFor="topic">Topic</label>
            <input
                className="bar form-control"
                name="topic"
                onChange={props.handleTitle}
                placeholder="Topic"
                id="cust-address"
            />

            <label htmlFor="start-year">Start Year</label>
            <input
                className="bar form-control"
                name="start-year"
                onChange={props.handleStartYear}
                placeholder="Start Year"
                id="start-year"
            />

            <label htmlFor="end-year">End Year</label>
            <input
                className="bar form-control"
                name="end-year"
                onChange={props.handleEndYear}
                placeholder="End Year"
                id="end-year"
            />
            <button
                onClick={props.handleFormSubmit}
                type="button"
                className="input-lg">
                Search
            </button> 

        </div>
    </div>
);

export default SearchBarCard;