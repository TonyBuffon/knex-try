const knex = require('knex');

const config = {
  client: 'mysql2',
  connection: {
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DB.
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: __dirname + '/migrations',
  },
};

const db = knex(config);

module.exports = db;
