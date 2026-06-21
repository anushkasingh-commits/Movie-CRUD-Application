const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController.js");

router.get("/", movieController.home);

router.get("/movies", movieController.getMovie);

router.get("/addMovie", movieController.showAddForm);

router.post("/movies/add", movieController.addMovie);

router.post("/movies/edit/:id", movieController.editMovie);

router.get("/movies/delete/:id", movieController.deleteMovie);

router.post("/movies/search", movieController.searchMovie);

router.get("/movies/edit/:id", movieController.showEditForm);

module.exports = router;