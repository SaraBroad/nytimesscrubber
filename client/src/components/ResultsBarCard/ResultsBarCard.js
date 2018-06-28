import React from "react";
import "./ResultsBarCard.css";

const ResultsBarCard = props => (
    <div className="search-container">
        <div className="header">Results</div>
        <div className="results-box">
            <div>{props.title}</div>
            <div>{props.url}</div>
            <div>{props.date}</div>
            <button className="btn btn-primary save-btn" onClick={() => props.handleSaveButton(props._id)}>Save Article</button>
        </div>
    </div>
);

export default ResultsBarCard;