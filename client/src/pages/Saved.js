import React, { Component } from 'react';
import SavedArticlesBarCard from "../components/SavedArticlesBarCard";
import API from "../utils/API";



class Saved extends Component {
    componentDidMount() {
        this.getSavedArticles()
    };

    getSavedArticles = () => {
        API.getSaved()
            .then((res) => {
                this.setState({ saved: res.data });
            })
    }


    deleteBook = id => {
        API.deleteArticles(id)
            .then(res => this.getArticles())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <SavedArticlesBarCard />
            </div>
        )
    }
}

export default Saved;