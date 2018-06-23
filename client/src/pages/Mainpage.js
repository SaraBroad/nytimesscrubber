import React, { Component } from 'react';
import Header from "../components/Header";
// import ResultsBar from "../components/ResultsBar";
// import SavedArticles from "../components/SavedArticles";
// import SearchBar from "../components/SearchBar";
import SearchBarCard from "../components/SearchBarCard";

class Mainpage extends Component {
    render() {
        return (
            <div>
                 <Header />
            <SearchBarCard />
             
           
           </div>
        )
    }
}

export default Mainpage;