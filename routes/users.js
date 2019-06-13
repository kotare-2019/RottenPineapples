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
  db.getUsers()
  .then(movies =>{
    res.render('movies', movies)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/ratings', (req, res) =>{
  db.getUsers()
  .then(ratings =>{
    res.render('ratings', ratings)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/recomendations', (req, res) =>{
  db.getUsers()
  .then(recomendations =>{
    res.render('recomendations', recomendations)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})
module.exports = router
