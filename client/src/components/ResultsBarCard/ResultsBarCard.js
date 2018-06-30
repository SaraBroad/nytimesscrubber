import React from "react";
import "./ResultsBarCard.css";

const ResultsBarCard = props => (
    <div className="results-container">
        {/* <div className="header">Results</div> */}
        <div className="results-box">
            <div>{props.title}</div>
            <div>{props.url}</div>
            <div>{props.date}</div>
            <button className="btn btn-primary save-btn" onClick={() => props.handleSaveButton(props.id)}>Save Article</button>
        </div>
    </div>
);

export default ResultsBarCard;