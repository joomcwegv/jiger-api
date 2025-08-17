// pool.js
import dotenv from 'dotenv';
import path from 'path'; // Импортируем модуль path
import { fileURLToPath } from 'url'; // Для работы с __dirname в ES Modules

// Определяем __dirname для ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Указываем dotenv, где искать файл .env
// Это предполагает, что ваш .env находится на два уровня выше (../..) от pool.js
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Егер .env файлы жоқ болса, уақытша деректер қолданамыз
const isProduction = process.env.NODE_ENV === 'production';

import pkg from 'pg';
const { Pool } = pkg;

// --- ВАЖНЫЕ ОТЛАДОЧНЫЕ СТРОКИ (оставьте их) ---
console.log('DEBUG: DB_USER:', process.env.DB_USER);
console.log('DEBUG: DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DEBUG: DB_HOST:', process.env.DB_HOST);
console.log('DEBUG: DB_PORT:', process.env.DB_PORT);
console.log('DEBUG: DB_NAME:', process.env.DB_NAME);
console.log('DEBUG: Тип DB_PASSWORD:', typeof process.env.DB_PASSWORD);
// --- КОНЕЦ ОТЛАДОЧНЫХ СТРОК ---

// Конфигурация (база деректер жоқ болса)
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false }
});

export default pool;