const pool = require('../config/database');

async function createAuditLog({ email, action, ip }) {
  const query = `
    INSERT INTO audit_logs (email, action, ip_address)
    VALUES ($1, $2, $3)
  `;

  await pool.query(query, [email, action, ip]);
}

async function findAllLogs() {
  const query = `
    SELECT id, email, action, ip_address, created_at
    FROM audit_logs
    ORDER BY created_at DESC
  `;

  const result = await pool.query(query);
  return result.rows;
}

module.exports = {
  createAuditLog,
  findAllLogs,
};

