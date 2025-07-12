import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  password: 'Aaqwert2025@', // ⚠️ Өз құпиясөзіңмен ауыстыр
  host: 'localhost',
  database: 'jiger',
  port: 5432
});

export default pool;