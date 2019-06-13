exports.seed = function (knex, Promise) {
    return knex('users').del()
      .then(function () {
        return knex('users').insert([
            {id: 1, name: 'Hanh', email: 'hanh@dev.com'},
            {id: 2, name: 'Hamish', email: 'hamish@dev.com'},
            {id: 3, name: 'Dan', email: 'dan@dev.com'},
            {id: 4, name: 'Colleen', email: 'colleen@dev.com'},
            {id: 5, name: 'Pineapples', email: 'pineapples@dev.com'},
            {id: 6, name: 'Ross', email: 'ross@dev.com'},
            {id: 7, name: 'Hannah', email: 'hannah@dev.com'},
            {id: 8, name: 'Ollie', email: 'ollie@dev.com'},
            {id: 9, name: 'Kelly', email: 'kelly@dev.com'},
            {id: 10, name: 'Emily', email: 'emily@dev.com'},
         ])
      })
  }
  