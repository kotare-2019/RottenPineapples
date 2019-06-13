exports.up = (knex, Promise) => {
  return knex.schema.createTable('ratings', (table) => {
    table.increments('id').primary()
    table.integer('rating')
    table.integer('movie_id')
    table.integer('user_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('ratings')
}

