const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    genreTitle: String
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;