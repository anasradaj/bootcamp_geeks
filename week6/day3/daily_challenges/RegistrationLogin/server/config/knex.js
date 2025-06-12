const knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'postgres', 
    host: 'localhost',
    database: 'registration', 
    password: '1234', 
    port: 5432
  }
});

module.exports = knex;
