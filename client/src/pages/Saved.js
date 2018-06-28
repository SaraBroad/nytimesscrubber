import React, { Component } from 'react';
import SavedArticlesBarCard from "../components/SavedArticlesBarCard";
import API from "../utils/API";



class Saved extends Component {
   

    deleteBook = id => {
        API.deleteArticles(id)
            .then(res => this.getArticles())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                {/* getSavedArticles */}
                <SavedArticlesBarCard />
            </div>
        )
    }
}

export default Saved;