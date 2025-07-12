import express from 'express';
import cors from 'cors';

// Маршруттар
import bookingsRoutes from './routes/bookings.js';
import contactRoutes from './routes/contact.js';

const app = express();

// ✅ Ортақ middleware
app.use(cors());
app.use(express.json());

// ✅ API маршруттар
app.use('/api/bookings', bookingsRoutes);
app.use('/api/contact', contactRoutes);

// ✅ Тест маршруты
app.get('/', (req, res) => {
  res.send('🧱 JIGER API Server is running');
});

// ✅ PORT конфигурациясы (Render үшін маңызды!)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Сервер іске қосылды: http://localhost:${PORT}`);
});