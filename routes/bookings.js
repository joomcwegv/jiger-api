import express from 'express';
const router = express.Router();
import pool from '../db.js';

// 🔹 GET: Барлық заявкалар
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC');
    res.json({ bookings: result.rows });
  } catch (err) {
    console.error('❌ Қате [GET]:', err.message);
    res.status(500).json({ error: '💥 Сервер қатесі' });
  }
});
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, phone } = req.body;
  
    if (!name || !phone || name.trim() === '' || phone.trim() === '') {
      return res.status(400).json({ error: '📵 Атыңыз және телефон қажет!' });
    }
  
    try {
      const result = await pool.query(
        'UPDATE bookings SET name = $1, phone = $2 WHERE id = $3 RETURNING *',
        [name.trim(), phone.trim(), id]
      );
  
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Заявка табылмады' });
      }
  
      console.log('✏️ Жаңартылған заявка:', result.rows[0]);
      res.json(result.rows[0]);
    } catch (err) {
      console.error('❌ Қате [PATCH]:', err.message);
      res.status(500).json({ error: '💥 Сервер қатесі' });
    }
  });
// 🔹 POST: Жаңа заявка
router.post('/', async (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone || name.trim() === '' || phone.trim() === '') {
    return res.status(400).json({ error: '📵 Атыңыз және телефон қажет!' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO bookings (name, phone) VALUES ($1, $2) RETURNING *',
      [name.trim(), phone.trim()]
    );
    console.log('📥 Жаңа заявка:', result.rows[0]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('❌ Қате [POST]:', err.message);
    res.status(500).json({ error: '💥 Сервер қатесі' });
  }
});

// 🔹 DELETE: Заявканы жою
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM bookings WHERE id = $1', [id]);
    res.json({ message: '🗑 Заявка жойылды' });
  } catch (err) {
    console.error('❌ Қате [DELETE]:', err.message);
    res.status(500).json({ error: '💥 Сервер қатесі' });
  }
});

export default router;