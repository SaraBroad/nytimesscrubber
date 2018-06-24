import axios from "axios";

const API = {
    runQuery: function (searchTerm, startYear, endYear) {
        const apiKey = "5d7640653b3b4acab5beec69a66e0904"
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
            apiKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
        return axios.get(queryURL);
    },
    getSaved: function () {
        return axios.get("/api/articles")
    },
    postArticles: function () {
        return axios.get("/api/articles" + "something")
        // return axios.post("/api/saved", articleObj);
    },
    deleteArticles: function () {
        return axios.get("/api/articles" + "something")
    }
};

export default API;

