import React from "react";
import "./SavedArticlesBarCard.css";

const SavedArticlesBarCard = props => (
    <div className="search-container">
        <div className="header">Saved Articles</div>
        <div className="saved-box">
        <div>{props.title}</div>
            <button className="btn btn-primary" onClick={() => props.deleteBook(props._id)}>Delete</button>
        </div>
    </div>
);

export default SavedArticlesBarCard;