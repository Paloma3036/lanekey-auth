const pool = require('../config/database');

async function saveToken({ email, tokenHash, expiresAt }) {
  const query = `
    INSERT INTO temporary_tokens (email, token_hash, expires_at)
    VALUES ($1, $2, $3)
  `;
  await pool.query(query, [email, tokenHash, expiresAt]);
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
  const result = await pool.query(query, [tokenHash]);
  return result.rows[0];
}

async function markTokenAsUsed(id) {
  const query = `
    UPDATE temporary_tokens
    SET used = true
    WHERE id = $1
  `;
  await pool.query(query, [id]);
}

module.exports = {
  saveToken,
  findValidToken,
  markTokenAsUsed,
};

