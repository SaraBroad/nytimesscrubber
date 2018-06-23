import React, { Component } from 'react';
import Header from "../components/Header";
import SearchBarCard from "../components/SearchBarCard";
import ResultsBarCard from "../components/ResultsBarCard";

class Mainpage extends Component {
    render() {
        return (
            <div>
            <Header />
            <SearchBarCard />
            <ResultsBarCard />
            <SavedArticlesBarCard />
           </div>
        )
    }
}

export default Mainpage;