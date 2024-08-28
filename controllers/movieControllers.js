const Movie = require("../models/movieModel");

const getAllMovies = async (req, res) => {

    
    const filterObj = { ...req.query }
    delete filterObj.sort 
    delete filterObj.limit
    delete filterObj.select
    // Filtering      "Movie.find(filterObj)" is called the query object
    let movieQuery = Movie.find(filterObj);
    // Sorting
    if(req.query.sort) movieQuery = movieQuery.sort(req.query.sort)
    // Limiting
    // movieQuery = movieQuery.limit(req.query.limit ? req.query.limit : 5)
    // Selecting 
    if(req.query.select){
        const spaceSeperatedFields = req.query.select.replace(',', ' ')
        movieQuery = movieQuery.select(spaceSeperatedFields)
    }
    const movies = await movieQuery
    // console.log('hello', movies)
    res.json(movies);
}

const getMovieById = async (req, res) => {
    const movie = await Movie.findById(req.params.movieId).exec();
    res.json(movie);
    // res.send('movie world');
}

const addMovie = async (req, res) => {
    // 1. Get data from request body
    const data = req.body;
    // 2. Create a document using data
    const movie = new Movie(data);
    // 3. Save document to the database
    await movie.save();
    res.json(movie);

    // res.send('movie world');
}

const updateMovie = async (req, res) => {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.movieId, req.body, { new: true })
    res.json(updatedMovie)
}

const deleteMovie = (req, res) => {
    res.send('movie world')
}

module.exports = {
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
}