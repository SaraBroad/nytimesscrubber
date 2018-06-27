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
                onChange={props.handleTitle}
                className="form-control"
                placeholder="Topic"
                id="cust-address"
            />

            <label htmlFor="start-year">Start Year</label>
            <input
                className="bar"
                name="start-year"
                onChange={props.handleStartYear}
                className="form-control"
                placeholder="Start Year"
                id="start-year"
            />

            <label htmlFor="end-year">End Year</label>
            <input
                className="bar"
                name="end-year"
                onChange={props.handleEndYear}
                className="form-control"
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