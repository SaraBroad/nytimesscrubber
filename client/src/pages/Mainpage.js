import React, { Component } from 'react';
import Header from "../components/Header";
import SearchBarCard from "../components/SearchBarCard";
import ResultsBarCard from "../components/ResultsBarCard";
import API from "../utils/API";

class Mainpage extends Component {
    state = {
        articles: [],
        savedArticles: [],
        title: "",
        startYear: "",
        endYear: ""
    }

    handleTitle = (event) => {
        this.setState({ title: event.target.value })
    };

      handleStartYear = (event) => {
          this.setState({ startYear: event.target.value})
      };

      handleEndYear = (event) => {
          this.setState({ endYear: event.target.value })
      };
    
      //okay?
      handleFormSubmit = event => {
          event.preventDefault();
          API.getArticles({
              title: this.state.title,
              startYear: this.state.startYear,
              endYear: this.state.endYear
          })
          .then(res => this.setState({ articles: res.data }))
          .catch(err => console.log(err));
          console.log(this.state.articles);
      }

      //save article
      handleSaveButton = event => {

      }


    render() {
        return (
            <div>
            <Header />

            <SearchBarCard />

            {this.state.articles.map(article => {
            <ResultsBarCard 
            id={article.id}
            title={article.headline.main}
            date={article.web_url}
            url={article.pub_date}
            // function={this.function}
            />
            })}
     
           </div>
        )
    }
}

export default Mainpage;