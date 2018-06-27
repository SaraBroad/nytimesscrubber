import React from "react";
import "./ResultsBarCard.css";

const ResultsBarCard = props => (
    <div className="search-container">
    <div className="header">Results</div>
    <button className="btn btn-primary" onClick={() => props.deleteBook(props._id)}>Delete Article</button>
    </div>
);

export default ResultsBarCard;