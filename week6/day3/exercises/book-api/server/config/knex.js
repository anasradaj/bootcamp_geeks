const knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'postgres', 
    host: 'localhost',
    database: 'books', 
    password: '1234', 
    port: 5432
  }
});

module.exports = knex;
