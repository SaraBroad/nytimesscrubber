const router = require("express").Router();
const articlesController = require("../../controllers/articlesControllers");

router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .delete(articlesController.delete);

module.exports = router;



