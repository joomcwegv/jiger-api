import express from 'express';
const router = express.Router();

// 🔹 GET: Барлық пікірлер
router.get('/', (req, res) => {
  // Уақытша деректер (кейін база деректерге ауыстырылады)
  const comments = [
    {
      id: 1,
      name: 'Аян',
      comment: '🔥 Керемет жоба! Жалғастырыңыз!',
      date: '2024-01-15T10:30:00Z'
    },
    {
      id: 2,
      name: 'Марат',
      comment: '🚀 Өте жақсы жұмыс! Тағы да келемін.',
      date: '2024-01-14T15:45:00Z'
    }
  ];
  res.json({ comments });
});

// 🔹 POST: Жаңа пікір
router.post('/', (req, res) => {
  const { name, comment } = req.body;
  
  if (!name || !comment || name.trim() === '' || comment.trim() === '') {
    return res.status(400).json({ error: '📵 Атыңыз және пікір қажет!' });
  }

  const newComment = {
    id: Date.now(),
    name: name.trim(),
    comment: comment.trim(),
    date: new Date().toISOString()
  };

  console.log('📝 Жаңа пікір:', newComment);
  res.status(201).json(newComment);
});

export default router;