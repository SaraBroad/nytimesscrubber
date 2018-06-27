import React, { Component } from 'react';
import SavedArticlesBarCard from "../components/SavedArticlesBarCard";
import API from "../utils/API";



class Saved extends Component {
    // componentDidMount() {
    //     this.getSavedArticles()
    //     };
        
        //   getSavedArticles = () => {
        //     API.getArticles()
        //       .then(res =>
        //         this.setState({ articles: res.data, title: "", stateYear: "", endYear: "" })
        //       )
        //       .catch(err => console.log(err));
        //   };
        
        //need remove button
        
        deleteBook = id => {
            API.deleteArticles(id)
            .then(res => this.getArticles())
            .catch(err => console.log(err));
        };

        getSavedArticles = () => {
            API.getArticles()
              .then((res) => {
                this.setState({ saved: res.data });
              });
          }

    render() {
        return (
            <div>
                <SavedArticlesBarCard />
           </div>
        )
    }
}

export default Saved;