const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getMovie: getMovie,
  getListMovies: getListMovies,
  getMovieRatings: getMovieRatings,
  getMovieRec: getMovieRec,
  getUserRatings: getUserRatings,
  getUserRecommendations: getUserRecommendations,
  addRatingToMovie: addRatingToMovie,
  getRecommendations: getRecommendations,
  addUserToRecommendation: addUserToRecommendation,
}

function getUsers(db = connection) {
  return db('users').select()
}

function getUser(id, db = connection) {
  return db('users').where('id', id).first()
}

function getMovie (id, db = connection) {
  return db('movies')
    .join('ratings', 'movies.id', 'ratings.movie_id')
    .join('recommendations', 'movies.id', 'recommendations.movie_id')
    .where('movies.id', id)
    .first().select()
}

function getListMovies (db = connection) {
  return db('movies').select()
}
//first draft
function getUserRatings (userId, db = connection){
  return db('movies').join('ratings', 'movies.id', '=', 'ratings.movie_id' )
          .where('ratings.user_id', userId).select()
}
//first draft
function getUserRecommendations (userId, db = connection){
  return db('movies').join('recommendations', 'movies.id', '=', 'recommendations.movie_id' )
          .where('recommendations.user_id', userId).select()
}

function getMovieRatings (movieId, db = connection) {
  return db('rating').where('movie_id', movieId).select('rating')
}

function getMovieRec (movieId, db = connection) {
  return db('recommendations').where('movie_id', movieId).select('rec')
}

function addRatingToMovie (db = connection) {
  return db('movies').join('ratings', 'movies.id', 'movie_id')
}

function getRecommendations (db = connection) {
  return db('recommendations').select()
}

function addUserToRecommendation (db = connection) {
  return db('users').join('recommendations', 'users.id', 'user_id')
}