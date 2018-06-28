import React from 'react';
import "./ResultsBarWrapper.css";

const ResultsBarWrapper = props => <div className="wrapper">
<h1 className="header">Results</h1>

{props.children}</div>;

export default ResultsBarWrapper;