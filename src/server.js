const express = require('express');
const cors = require('cors');
require('dotenv').config();

// ==================
// Inicialização do app
// ==================
const app = express();

// ==================
// Middlewares globais
// ==================
app.use(cors());
app.use(express.json());

// ==================
// Swagger
// ==================
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

// ==================
// Rotas
// ==================
const authRoutes = require('./routes/auth.routes');

// ==================
// Rota de teste
// ==================
app.get('/', (req, res) => {
  res.send('🚀 LaneKey Auth API rodando');
});

// ==================
// Rotas da aplicação
// ==================
app.use('/auth', authRoutes);
// ==================
// Swagger
// ==================
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ==================
// Inicialização do servidor
// ==================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📚 Swagger disponível em http://localhost:${PORT}/api-docs`);
});

