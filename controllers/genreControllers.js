const Genre = require("../models/genreModel");

const getAllGenres = async (req, res) => {

    const genres = await Genre.find({});
    res.json(genres)
    // res.send('genre world')
}

const getGenreById = async (req, res) => {
    const genre = await Genre.findById(req.params.genreId).exec();
    res.json(genre);
    // res.send('genre world')
}
// 667819be95ef87fa8e7e7ebb

const addGenre = async (req, res) => {
    // 1. Get data from request body
    const data = req.body;
    // 2. Create a document using data
    const genre = new Genre(data);
    // 3. Save document to the database
    await genre.save();
    console.log(genre)
    res.json(genre);
    // res.send('genre world')
}

const updateGenre = (req, res) => {
    res.send('genre world')
}

const deleteGenre = async (req, res) => {
    await Genre.findByIdAndDelete(req.params.genreId)
    res.send('deleted')
}

module.exports = {
    getAllGenres,
    getGenreById,
    addGenre,
    updateGenre,
    deleteGenre
}