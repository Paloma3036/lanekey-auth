const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// middlewares globais
app.use(cors());
app.use(express.json());

// rota de teste
app.get('/', (req, res) => {
  res.send('LaneKey Auth API rodando');
});

const authRoutes = require('./routes/auth.routes');

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

