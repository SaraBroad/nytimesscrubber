const router = require("express").Router();
const articlesController = require("../../controllers/articlesControllers");

router.post("/api/articles", articlesController.create);
router.get("/api/articles", articlesController.findAll);
router.delete("/:id", articlesController.delete);
    

module.export = router;

