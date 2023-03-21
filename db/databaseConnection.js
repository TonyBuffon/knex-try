const knex = require('knex');

const config = {
  client: 'mysql2',
  connection: {
    host: '18.157.127.87',
    user: 'user2',
    password: 'hRMyzHVgtWgDJAwe',
    database: 'task_db',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: __dirname + '/migrations',
  },
};

const db = knex(config);

module.exports = db;