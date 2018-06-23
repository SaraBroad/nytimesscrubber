import React, { Component } from 'react';
import Header from "../components/Header";
// import ResultsBar from "../components/ResultsBar";
// import SavedArticles from "../components/SavedArticles";
// import SearchBar from "../components/SearchBar";
import SearchBarCard from "../components/SearchBarCard";
import SavedArticlesBarCard from "../components/SavedArticlesBarCard";
import ResultsBarCard from "../components/ResultsBarCard";

class Mainpage extends Component {
    render() {
        return (
            <div>
                 <Header />
            <SearchBarCard>
                {/* <SearchBar /> */}
            </SearchBarCard>
            <SavedArticlesBarCard />
            <ResultsBarCard />
             
           
           </div>
        )
    }
}

export default Mainpage;