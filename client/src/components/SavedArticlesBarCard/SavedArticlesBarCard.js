import React from "react";
import "./SavedArticlesBarCard.css";

const SavedArticlesBarCard = props => (
    <div className="saved-container">
        <div className="saved-box">
        <div>{props.title}</div>
        <div>{props.url}</div>
        <div>{props.date}</div>
            <button className="btn btn-primary delete-btn" onClick={() => props.deleteArticles(props._id)}>Delete</button>
        </div>
    </div>
);

export default SavedArticlesBarCard;