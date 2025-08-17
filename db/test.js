import { db } from './pool.js';
import dotenv from 'dotenv';

dotenv.config();

db.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Байланыс жоқ:', err);
  } else {
    console.log('✅ Деректер базасына қосылды!');
    console.log('Server time:', res.rows[0].now);
  }
  db.end(); // Қосылымды жабу
});