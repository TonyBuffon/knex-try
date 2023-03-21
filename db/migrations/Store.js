const Knex = require('knex');

exports.up = async (Knex) => {
  await Knex.schema.createTable('categories', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
  });

  await Knex.schema.createTable('stores', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('website').notNullable();
    table.integer('category_id').unsigned().notNullable();
    table.foreign('category_id').references('id').inTable('categories');
  });
}

exports.down = async (Knex) => {
  await Knex.schema.dropTable('stores');
  await Knex.schema.dropTable('categories');
}
