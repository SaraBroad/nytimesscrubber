const Article = require("../models/Article");
console.log(Article);
// const scrapeFun = require("../src/utils/API")
//scrape controller?

module.exports = {
    findAll: function (req, res) {
        Article
            .find(req.query)
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log("create");
        Article
            .create(req.body)
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        console.log("delete");
        Article
            .findById({ _id: req.params.id })
            .then(dbArticle => dbArticle.remove())
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(422).json(err));
    }
}




