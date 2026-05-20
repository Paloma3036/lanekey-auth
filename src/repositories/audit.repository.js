const pool = require('../config/database');

async function createAuditLog({ email, action, ipAddress }) {
  const query = `
    INSERT INTO audit_logs (email, action, ip_address)
    VALUES ($1, $2, $3)
    RETURNING id, email, action, ip_address, created_at
  `;

  try {
    const result = await pool.query(query, [email, action, ipAddress]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao registrar log de auditoria');
  }
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