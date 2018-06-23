import React, { Component } from 'react';
import Header from "../components/Header";
// import ResultsBar from "../components/ResultsBar";
// import SavedArticles from "../components/SavedArticles";
// import SearchBar from "../components/SearchBar";
import SearchBarCard from "../components/SearchBarCard";
import SavedArticlesBarCard from "../components/SavedArticlesBarCard";

class Mainpage extends Component {
    render() {
        return (
            <div>
                 <Header />
            <SearchBarCard />
            <SavedArticlesBarCard />
             
           
           </div>
        )
    }
}

export default Mainpage;