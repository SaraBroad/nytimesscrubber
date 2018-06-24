import React, { Component } from 'react';
import Header from "../components/Header";
import SearchBarCard from "../components/SearchBarCard";
import ResultsBarCard from "../components/ResultsBarCard";

class Mainpage extends Component {
    state = {
        articles: [],
        topic: "",
        startYear: "",
        endYear: ""
    }

        handleInputChange = event => {
            const { name, value } = event.target;
            this.setState({
                [name]: value
            });
        };

      handleFormSubmit = event => {
          event.preventDefault();
      }
    
      handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.getRecipes(this.state.recipeSearch)
          .then(res => this.setState({ recipes: res.data }))
          .catch(err => console.log(err));
      };

      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.saveBook({
            title: this.state.title,
            author: this.state.author,
            synopsis: this.state.synopsis
          })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
      };

  
    
      loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data, title: "", author: "", synopsis: "" })
          )
          .catch(err => console.log(err));
      };

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