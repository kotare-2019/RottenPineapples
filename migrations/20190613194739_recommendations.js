exports.up = (knex, Promise) => {
  return knex.schema.createTable('recommendations', (table) => {
    table.increments('id').primary()
    table.string('rec')
    table.integer('movie_id')
    table.integer('user_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('recommendations')
}

