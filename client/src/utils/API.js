


// /api/articles (get) - your components will use this to query MongoDB for all saved articles

// /api/articles (post) - your components will use this to save an article to the database

// /api/articles (delete) - your components will use this to delete a saved article in the database

// * (get) - will load your single HTML page (with ReactJS) in client/build/index.html. Make sure you put this after all other GET routes
import axios from "axios";

const scrubber = {
    runQuery: function (searchTerm, startYear, endYear) {
        const apiKey = "5d7640653b3b4acab5beec69a66e0904"
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
            apiKey + "&q=" + topic + "&begin_date=" + startYear + "0101";
        return axios.get(queryURL);
    },
    getSaved: function () {
        return axios.get("/api/savedarticles")
    },


}


export default scrubber;

//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }