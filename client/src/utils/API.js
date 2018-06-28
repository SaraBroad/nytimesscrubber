import axios from "axios";
const apiKey = "5d7640653b3b4acab5beec69a66e0904";
export default {
    getArticles: function (title, startYear, endYear) {
        console.log(title, startYear, endYear);
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
            apiKey + "&q=" + title + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
        return axios.get(queryURL);
    },
    getSaved: function () {
        return axios.get("/api/articles");
    },
    saveArticle: function (articleData) {
        return axios.post("/api/articles", articleData);
    },
    deleteArticles: function (id) {
        return axios.delete("/api/articles/" + id);
    }
};


// * (get) - will load your single HTML page (with ReactJS) in client/build/index.html. Make sure you put this after all other GET routes