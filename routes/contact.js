import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  console.log('📥 Жаңа байланыс:', { name, email, message });

  // Осында мәліметті базаға жазуға, email-ге жіберуге болады
  res.json({ success: true });
});

export default router;