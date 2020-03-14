const MOVIE_SCHEMA = { title: String }

const generateMovieModel = mongoose => {
    const Movie = mongoose.model('Movie', MOVIE_SCHEMA);
    return Movie
}

module.exports = {
    generateMovieModel
}