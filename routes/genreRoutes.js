const express = require('express');
const { getAllGenres, getGenreById, addGenre, updateGenre, deleteGenre } = require('../controllers/genreControllers');
const router = express.Router()

// 1. Get all the genre
router.get('/', getAllGenres)
// 2. Get genre by id 
router.get('/:genreId', getGenreById)
// 3. Add genre 
router.post('/', addGenre)
// 4. Update genre
router.patch('/:genreId', updateGenre)
// 5. Deletem genre
router.delete('/:genreId', deleteGenre)

module.exports = router;