const pgp = require('pg-promise')();

const cn = {
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  max: 20,
}

const db = pgp(cn);

module.exports = db;