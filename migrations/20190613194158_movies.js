exports.up = (knex, Promise) => {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('director')
    table.string('year')
    table.string('url')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('movies')
}
