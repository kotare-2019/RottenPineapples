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
  ])
}))

const server = require('../server')

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
      expect(firstLiText).toBe('A.I., Steven Spielberg 2001')
    })
    .catch(err => expect(err).toBeNull())
})

test('test setup working', () => {
  expect(true).toBeTruthy()
})