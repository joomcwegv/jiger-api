import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ comments: ['🔥 Бірінші пікір', '🚀 Екінші пікір'] });
});

export default router;