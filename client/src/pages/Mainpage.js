import React, { Component } from 'react';
import Header from "../components/Header";
import SearchBarCard from "../components/SearchBarCard";
import ResultsBarCard from "../components/ResultsBarCard";
// import SavedArticlesBarCard from "../components/SavedArticlesBarCard";
import API from "../utils/API";

class Mainpage extends Component {
    state = {
        articles: [],
        title: "",
        startYear: "",
        endYear: ""
    }

  

      deleteBook = id => {
          API.deleteArticles(id)
          .then(res => this.getArticles())
          .catch(err => console.log(err));
      };

   //saved article

      handleInputChange = event => {
          const { name, value } = event.target;
          this.setState({
              [name]: value
          });
      };
    
      handleFormSubmit = event => {
          event.preventDefault();
          API.getArticles({
              title: this.state.title,
              startYear: this.state.startYear,
              endYear: this.state.endYear
          })
          .then(res => this.getArticles())
          .catch(err => console.log(err));
      }
    
    render() {
        return (
            <div>
            <Header />
            <SearchBarCard />
            <ResultsBarCard />
            {/* //headline
            //web_url
            //pub_date */}
            {/* <SavedArticlesBarCard /> */}
           </div>
        )
    }
}

export default Mainpage;