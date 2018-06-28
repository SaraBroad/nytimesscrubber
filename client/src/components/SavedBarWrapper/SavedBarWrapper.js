import React from 'react';
import "./SavedBarWrapper.css";

const SavedBarWrapper = props => <div className="results-wrapper">
<h1 className="header">Saved Articles</h1>

{props.children}</div>;

export default SavedBarWrapper;