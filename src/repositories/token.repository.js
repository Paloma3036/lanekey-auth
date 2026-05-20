const pool = require('../config/database');

async function saveToken({ email, tokenHash, expiresAt }) {
  const query = `
    INSERT INTO temporary_tokens (email, token_hash, expires_at)
    VALUES ($1, $2, $3)
  `;

  try {
    await pool.query(query, [email, tokenHash, expiresAt]);
  } catch (error) {
    console.error('ERRO AO SALVAR TOKEN:', error);
    throw new Error('Erro ao salvar token');
  }
}

async function findValidToken(tokenHash) {
  const query = `
    SELECT *
    FROM temporary_tokens
    WHERE token_hash = $1
      AND used = false
      AND expires_at > NOW()
    LIMIT 1
  `;

  try {
    const result = await pool.query(query, [tokenHash]);
    return result.rows[0];
  } catch (error) {
    console.error('ERRO AO BUSCAR TOKEN:', error);
    throw new Error('Erro ao buscar token');
  }
}

async function markTokenAsUsed(id) {
  const query = `
    UPDATE temporary_tokens
    SET used = true
    WHERE id = $1
  `;

  try {
    await pool.query(query, [id]);
  } catch (error) {
    console.error('ERRO AO ATUALIZAR TOKEN:', error);
    throw new Error('Erro ao atualizar token');
  }
}

module.exports = {
  saveToken,
  findValidToken,
  markTokenAsUsed,
};