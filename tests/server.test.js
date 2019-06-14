const request = require('supertest')
const cheerio = require('cheerio')

jest.mock('../db', () => ({
  getUser: (id) => Promise.resolve(
    {id: id, name: 'test user', email: 'test@user.nz'}
  ),
  getUsers: () => Promise.resolve([
    {id: 2, name: 'test user 2', email: 'test2@user.nz'},
    {id: 4, name: 'test user 4', email: 'test4@user.nz'}
  ]),
  getListMovies: () => Promise.resolve([
    {id: 1, title: 'A.I.', year: '2001', director: 'Steven Spielberg'}, 
    {id: 2, title: 'After Earth', year: '2013', director: 'M. Night Shyamalan'}, 
    {id: 3, title: 'Alien', year: '1979', director: 'Ridley Scott'}
  ]),
  addRatingToMovie: () => Promise.resolve([
    { id: 61,
      title: 'A.I.',
      director: 'Steven Spielberg',
      year: '2001',
      url: null,
      rating: 6,
      movie_id: 1,
      user_id: 1 },
    { id: 62,
      title: 'After Earth',
      director: 'M. Night Shyamalan',
      year: '2013',
      url: null,
      rating: 1,
      movie_id: 2,
      user_id: 2 },
    { id: 63,
      title: 'Alien',
      director: 'Ridley Scott',
      year: '1979',
      url: null,
      rating: 9,
      movie_id: 3,
      user_id: 3 },
  ]),
  addUserToRecommendation: () => Promise.resolve([
    { id: 1,
      name: 'Hanh',
      email: 'hanh@dev.com',
      rec: 'Inception',
      movie_id: 18,
      user_id: 1 },
    { id: 2,
      name: 'Hamish',
      email: 'hamish@dev.com',
      rec: 'Alien',
      movie_id: 3,
      user_id: 2 },
    { id: 3,
      name: 'Dan',
      email: 'dan@dev.com',
      rec: 'Robocop',
      movie_id: 27,
      user_id: 3 },
  ])
}))

const server = require('../server')

// RECOMMENDATIONS PAGE TEST
test('GET /recomendations', () => {
  return request(server)
    .get('/recomendations')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      const firstLiText = $('li').first().text()
      expect(firstLiText).toEqual('Inception: recommended by Hanh')
    })
    .catch(err => expect(err).toBeNull())
})

//HOME PAGE ROUTE
test('GET /', () => {
  return request(server)
    .get('/')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      const firstLiText = $('h1').first().text()
      expect(firstLiText).toBe('ROTTEN PINEAPPLES')
    })
    .catch(err => expect(err).toBeNull())
})

//USER PAGE TEST
test('GET /users', () => {
  return request(server)
    .get('/users')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      const firstLiText = $('li').first().text()
      expect(firstLiText).toBe('test user 2, test2@user.nz')
    })
    .catch(err => expect(err).toBeNull())
})

//MOVIES LIST TEST
test('GET /movies', () => {
  return request(server)
    .get('/movies')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      const firstLiText = $('li').first().text()
      expect(firstLiText).toBe('A.I., Steven Spielberg 2001 Rating: 6/10')
    })
    .catch(err => expect(err).toBeNull())
})

test('test setup working', () => {
  expect(true).toBeTruthy()
})