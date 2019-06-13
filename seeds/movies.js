exports.seed = function (knex, Promise) {
  return knex('movies').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, movie: A.I., year: 2001, director: Steven Spielberg,}, 
        {id: 2, movie: After Earth, year: 2013, director: M. Night Shyamalan,}, 
        {id: 3, movie: Alien, year: 1979, director: Ridley Scott,}, 
        {id: 4, movie: Alien vs Predator, year: 2004, director: Paul W. S. Anderson,}, 
        {id: 5, movie: Avatar, year: 2009, director: James Cameron,},
        {id: 6, movie: Back To The Future, year: 1985, director: Robert Zemeckis,}, 
        {id: 7, movie: Battlefield Earth, year: 2000, director: Roger Christian,}, 
        {id: 8, movie: Blade Runner, year: 1982, director: Ridley Scott,}, 
        {id: 9, movie: Click, year: 2006, director: Frank Coraci,}, 
        {id: 10, movie: Cowboys Vs Aliens, year: 2011, director: Jon Favreau,},
        {id: 11, movie: District 9, year: 2009, director: Neill Blomkamp,}, 
        {id: 12, movie: , year: , director: ,}, 
        {id: 13, movie: , year: , director: ,},
        {id: 14, movie: , year: , director: ,}, 
        {id: 15, movie: , year: , director: ,}, 
        {id: 16, movie: , year: , director: ,}, 
        {id: 17, movie: , year: , director: ,}, 
        {id: 18, movie: , year: , director: ,}, 
        {id: 19, movie: , year: , director: ,},
        {id: 20, movie: , year: , director: ,},
        {id: 21, movie: , year: , director: ,},
        {id: 22, movie: , year: , director: ,},
        {id: 23, movie: , year: , director: ,},
        {id: 24, movie: , year: , director: ,},
        {id: 25, movie: , year: , director: ,}, 
        {id: 26, movie: , year: , director: ,},       ])
    })
}
