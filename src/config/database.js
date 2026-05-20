require('dotenv').config();

const { Pool } = require('pg');

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não definida no .env');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: { rejectUnauthorized: false } // usar em produção se necessário
});

pool.on('connect', () => {
  console.log('📦 Conectado ao banco de dados');
});

module.exports = pool;