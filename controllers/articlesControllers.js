const db = require("../models/Article");
// const scrapeFun = require("../src/utils/API")
//scrape controller?

module.exports = {
    findAll: function (req, res) {
        db.Article
            .find({})
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log("create");
        db.Article
            .create(req.body)
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        console.log("delete");
        db.Article
            .findById({ _id: req.params.id })
            .then(dbArticle => dbArticle.remove())
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(422).json(err));
    }
}




