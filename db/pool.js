// server/db/pool.js

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  password: '@',
  host: 'localhost',
  database: 'jiger',
  port: 5432
});

export default pool;