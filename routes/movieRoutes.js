const express = require('express');
const { getAllMovies, getMovieById, addMovie, updateMovie, deleteMovie } = require('../controllers/movieControllers');
const router = express.Router()

// 1. Get all the movies
router.get('/', getAllMovies)
// 2. Get movie by id 
router.get('/:movieId', getMovieById)
// 3. Add movie 
router.post('/', addMovie)
// 4. Update movie
router.patch('/:movieId', updateMovie)
// 5. Deletem movie
router.delete('/:movieId', deleteMovie)

module.exports = router;