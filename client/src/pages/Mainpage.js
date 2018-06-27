import React, { Component } from 'react';
import Header from "../components/Header";
import SearchBarCard from "../components/SearchBarCard";
import ResultsBarCard from "../components/ResultsBarCard";
// import SavedArticlesBarCard from "../components/SavedArticlesBarCard";
import API from "../utils/API";

class Mainpage extends Component {
    state = {
        articles: [],
        savedArticles: [],
        title: "",
        startYear: "",
        endYear: ""
    }

   //saved article


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
          .then(res => this.setState({ articles: res.data}))
          .catch(err => console.log(err));
      }

      handleSaveButton = event => {

      }

    render() {
        return (
            <div>
            <Header />

            <SearchBarCard />


            {this.state.articles.map(article => {
            <ResultsBarCard />


            })}
            {/* //headline
            //web_url
            //pub_date */}
            {/* <SavedArticlesBarCard /> */}
           </div>
        )
    }
}

{/* <RecipeList>
                  {this.state.recipes.map(recipe => {
                    return (
                      <RecipeListItem
                        key={recipe.title}
                        title={recipe.title}
                        href={recipe.href}
                        ingredients={recipe.ingredients}
                        thumbnail={recipe.thumbnail}
                      />
                    );
                  })}
                </RecipeList> */}

export default Mainpage;