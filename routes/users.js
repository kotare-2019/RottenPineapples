const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/movies', (req, res) =>{
  db.addRatingToMovie()
  .then(movies =>{
    console.log({movies})
    res.render('movies', {movies: movies})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/users', (req, res) =>{
  db.getUsers()
  .then(users =>{
    res.render('users', {users: users})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/recomendations', (req, res) =>{
  // db.getRecommendations()
  db.addUserToRecommendation()
  .then(recommendations =>{
    console.log(recommendations)
    res.render('recomendations', {recommendations: recommendations})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/movie/:id', (req, res) =>{
  db.getMovie(req.params.id)
  .then(movie =>{
    console.log(movie)
    res.render('movie',movie)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
})
})


module.exports = router
