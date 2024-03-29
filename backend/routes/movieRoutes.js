const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');




router.post("/movie", movieController.addMovie)
router.get("/movies", movieController.getAllMovies)
router.get("/movies/:id", movieController.getMovieById)
router.delete("/movies/:id", movieController.deleteMovie)
router.patch("/movies/:id", movieController.updateMovie)

module.exports = router
