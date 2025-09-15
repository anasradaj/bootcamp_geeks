const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// --- Verification Block ---
// This will connect and print the name of the database we are connected to.
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client from pool:', err.stack);
  }
  client.query('SELECT current_database()', (err, result) => {
    release(); // Release the client back to the pool
    if (err) {
      return console.error('Error executing query:', err.stack);
    }
    console.log('✅✅✅ VERIFICATION: Successfully connected to database:', result.rows[0].current_database, '✅✅✅');
  });
});
// --- End of Verification Block ---

module.exports = {
  query: (text, params) => pool.query(text, params),
};