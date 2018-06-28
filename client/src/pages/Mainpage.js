import React, { Component } from 'react';
import Header from "../components/Header";
import SearchBarCard from "../components/SearchBarCard";
import ResultsBarCard from "../components/ResultsBarCard";
import SavedArticlesBarCard from "../components/SavedArticlesBarCard";
import ResultsBarWrapper from "../components/ResultsBarWrapper";
import SavedBarWrapper from "../components/SavedBarWrapper";
import API from "../utils/API";

class Mainpage extends Component {
    state = {
        articles: [],
        savedArticles: [],
        title: "",
        startYear: "",
        endYear: ""
    }

    componentDidMount() {
        this.getSavedArticles()
    };

    getSavedArticles = () => {
        API.getSaved()
            .then((res) => {
                this.setState({
                    savedArticles: res.data
                });
            })
    }

    handleTitle = (event) => {
        this.setState({ title: event.target.value })
    };

    handleStartYear = (event) => {
        this.setState({ startYear: event.target.value })
    };

    handleEndYear = (event) => {
        this.setState({ endYear: event.target.value })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getArticles(
            this.state.title,
            this.state.startYear,
            this.state.endYear
        )
            .then(res => {
                console.log(res);
                this.setState({ articles: res.data.response.docs });
            })
            .catch(err => console.log(err));
    }

    //   save article from results
    handleSaveButton = id => {
        const articleSaving = this.state.articles.find(article => article.id === id);
        let newArticle = {
            title: articleSaving.headline.main,
            date: articleSaving.pub_date,
            url: articleSaving.web_url
        }
        API.saveArticle(newArticle)
            .then(data => this.getSavedArticles());
    }

        deleteArticles = id => {
        API.deleteArticles(id)
            .then(res => this.getSavedArticles())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Header />

                <SearchBarCard
                    handleStartYear={this.handleStartYear}
                    handleEndYear={this.handleEndYear}
                    handleTitle={this.handleTitle}
                    handleFormSubmit={this.handleFormSubmit}
                />

                <ResultsBarWrapper>
                {this.state.articles.map((article, i) => (
                    <ResultsBarCard
                        id={article.id}
                        key={i}
                        title={article.headline.main}
                        url={article.web_url}
                        date={article.pub_date}
                        handleSaveButton={this.handleSaveButton}
                    />
                ))}
                </ResultsBarWrapper>
                  
                <SavedBarWrapper>  
                {this.state.savedArticles.map((savedArticle, i) => (
                    <SavedArticlesBarCard
                        _id={savedArticle.id}
                        key={i}
                        title={savedArticle.title}
                        url={savedArticle.web_url}
                        date={savedArticle.pub_date}
                        deleteArticles={this.deleteArticles}
                    />
                ))}
                </SavedBarWrapper>
            </div>
        )
    }
}

export default Mainpage;