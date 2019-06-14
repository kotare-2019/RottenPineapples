exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, name: 'test user 1', email: 'test1@users.net' },
        { id: 2, name: 'test user 2', email: 'test2@users.net' },
        { id: 3, name: 'test user 3', email: 'test3@users.net' }
      ])
    })
}
