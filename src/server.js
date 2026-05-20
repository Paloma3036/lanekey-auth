const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// rota base
app.get('/', (req, res) => {
  res.send('🚀 LaneKey Auth API rodando');
});

// routes
const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

// swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
  });
});

// middleware de erro
app.use((err, req, res, next) => {
  console.error('❌ Erro:', err.message);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: err.message || 'Erro interno do servidor',
  });
});

// start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📚 Swagger disponível em http://localhost:${PORT}/api-docs`);
});