exports.seed = function (knex, Promise) {
    return knex('movies').del()
      .then(function () {
        return knex('movies').insert([
            {id: 1, title: 'A.I.', year: '2001', director: 'Steven Spielberg'}, 
            {id: 2, title: 'After Earth', year: '2013', director: 'M. Night Shyamalan'}, 
            {id: 3, title: 'Alien', year: '1979', director: 'Ridley Scott'}, 
        ])
      })
  }
  